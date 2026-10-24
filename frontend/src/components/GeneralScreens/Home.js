import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";

// Theme configuration matching global styles
const theme = {
  darkGreen: "#1565C0",
  darkGreenHover: "#1976D2",
  lightGreen: "#42A5F5",
  lightGreenHover: "#64B5F6",
  textLight: "#ffffff",
  textDark: "#2c3e50",
  textGray: "#5a6c7d",
  white: "#ffffff",
  shadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  shadowMedium: "0 8px 16px rgba(0, 0, 0, 0.15)",
  shadowLarge: "0 12px 24px rgba(0, 0, 0, 0.2)",
};

const Home = () => {
  // Initialize state once straight from localStorage to avoid race mismatches
  const [auth, setAuth] = useState(() => !!localStorage.getItem("authToken"));
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const search = useLocation().search;
  const searchKey = new URLSearchParams(search).get("search");

  // Sync token authentication parameters gracefully if they change globally
  useEffect(() => {
    const tokenExists = !!localStorage.getItem("authToken");
    setAuth(tokenExists);
  }, [search]); // Checks validation status safely across navigation cycles

  // Synchronize dynamic updates on cards without triggering a full page redraw
  const handleStoryUpdate = (updatedStory) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story._id === updatedStory._id || story.slug === updatedStory.slug
          ? updatedStory
          : story
      )
    );
  };

  // Reset page parameters smoothly when a new query execution takes place
  useEffect(() => {
    setPage(1);
  }, [searchKey]);

  // Unified data collection routine
  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        let url = `https://global-logistics-isu8.onrender.com/story/getAllStories?page=${page}`;
        if (searchKey) {
          url += `&search=${encodeURIComponent(searchKey)}`;
        }
        
        const { data } = await axios.get(url);
        setStories(data.data || []);
        setPages(data.pages || 1);
      } catch (error) {
        console.error("Error fetching operational stories:", error);
        setStories([]);
        setPages(1);
      } finally {
        setLoading(false);
      }
    };

    getStories();
  }, [searchKey, page]);

  return (
    <HomeContainer>
      <SearchForm />
      
      {loading ? (
        <SkeletonContainer>
          {/* Using index as key safely here because this is a static placeholder array */}
          {[...Array(6)].map((_, index) => (
            <SkeletonStory key={`skeleton-${index}`} />
          ))}
        </SkeletonContainer>
      ) : (
        <ContentWrapper>
          {auth ? (
            <>
              {stories.length !== 0 ? (
                <StoriesGrid>
                  {stories.map((story) => (
                    <CardStory 
                      key={story._id || story.slug} 
                      story={story} 
                      onUpdate={handleStoryUpdate} 
                    />
                  ))}
                </StoriesGrid>
              ) : (
                <NoStories />
              )}
              
              {stories.length > 0 && (
                <Pagination page={page} pages={pages} changePage={setPage} />
              )}
            </>
          ) : (
            <>
              {searchKey ? (
                stories.length > 0 ? (
                  <StoriesGrid>
                    <CardStory 
                      key={stories[0]._id || stories[0].slug} 
                      story={stories[0]} 
                      onUpdate={handleStoryUpdate} 
                    />
                  </StoriesGrid>
                ) : (
                  <NoStories />
                )
              ) : (
                <EmptyState>
                  <EmptyStateIcon role="img" aria-label="package">📦</EmptyStateIcon>
                  <EmptyStateTitle>Track Your Package</EmptyStateTitle>
                  <EmptyStateText>
                    Enter your tracking ID in the search form above to view your package details and current location.
                  </EmptyStateText>
                </EmptyState>
              )}
            </>
          )}
        </ContentWrapper>
      )}
    </HomeContainer>
  );
};

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 40px;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 60px 40px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 4px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 30px 20px;
  }

  @media (min-width: 992px) {
    padding: 40px 20px;
  }
`;

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-bottom: 30px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    gap: 30px;
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    gap: 40px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  background-color: ${theme.white};
  border-radius: 16px;
  box-shadow: ${theme.shadow};
  max-width: 600px;
  margin: 0 auto;
`;

const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.8;
`;

const EmptyStateTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.textDark};
  margin-bottom: 15px;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const EmptyStateText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${theme.textGray};
  font-weight: 400;
  max-width: 500px;

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

export default Home;