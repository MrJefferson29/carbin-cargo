import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import arah from "../../Assets/arah.jpg";
import miller from "../../Assets/miller.jpeg";
import michael from "../../Assets/michael.jpeg";
import emily from "../../Assets/emily.jpeg";
import robert from "../../Assets/robert.jpeg";

const testimonials = [
  {
    name: "Sarah Gonzalez",
    feedback:
      "Carbin and Cargo Logistics transformed how we manage our supply chain. Real-time tracking and reliable delivery mean we can promise accurate arrival times. Their team feels like an extension of our own.",
    location: "New York, NY",
    imageUrl: arah,
    rating: 5,
    role: "Operations Director",
  },
  {
    name: "Miller Temili",
    feedback:
      "We ship internationally every single week. Carbin and Cargo Logistics handles booking, customs, and last-mile delivery without a hitch. Highly recommended for freight and cargo operations.",
    location: "Los Angeles, CA",
    imageUrl: miller,
    rating: 4.5,
    role: "Logistics Manager",
  },
  {
    name: "Michael Harrington",
    feedback:
      "The tracking platform is outstanding—I always know where my packages are. When I had questions, their 24/7 support team delivered clear answers and real solutions within minutes.",
    location: "Chicago, IL",
    imageUrl: michael,
    rating: 5,
    role: "Supply Chain Lead",
  },
  {
    name: "Emily Davis",
    feedback:
      "Carbin and Cargo Logistics doesn't just move boxes—they move our business forward. Customer consultation and planning helped us optimize complex routes and dramatically cut unnecessary costs.",
    location: "Houston, TX",
    imageUrl: emily,
    rating: 5,
    role: "Procurement Manager",
  },
  {
    name: "Robert Brown",
    feedback:
      "From air freight to road freight, they deliver excellence every time. Their commitment to supply chain innovation shows in both their platforms and professional customer support.",
    location: "Miami, FL",
    imageUrl: robert,
    rating: 4.5,
    role: "Import/Export Coordinator",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} color={theme.brandAccent} />
      ))}
      {halfStar && <FaStarHalfAlt color={theme.brandAccent} />}
    </>
  );
};

const TestimonialSlider = () => {
  // Configured to show multiple cards on large viewports for organic layouts
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <TestimonialsSection>
      <MetaTag>Social Proof</MetaTag>
      <SectionHeading>What Our Clients Say</SectionHeading>
      <SliderContainer>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard aria-label={`Testimonial from ${testimonial.name}`}>
                <QuoteContext>
                  <Stars>{renderStars(testimonial.rating)}</Stars>
                  <Feedback>"{testimonial.feedback}"</Feedback>
                </QuoteContext>
                
                <AuthorProfile>
                  <ProfileImage src={testimonial.imageUrl} alt={testimonial.name} />
                  <MetaDetails>
                    <Name>{testimonial.name}</Name>
                    <Role>{testimonial.role} <span>• {testimonial.location}</span></Role>
                  </MetaDetails>
                </AuthorProfile>
              </TestimonialCard>
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </TestimonialsSection>
  );
};

export default TestimonialSlider;

// ─── THEME CONFIGURATION ───────────────────────────────────────────────────
const theme = {
  brandPrimary: "#0f172a",       // Deep slate matching global system core
  brandAccent: "#0ea5e9",        // Pristine Electric Sky Blue
  bgLight: "#f8fafc",            // Clean, organic gray backdrop
  textMain: "#1e293b",           // Clean high contrast charcoal
  textMuted: "#64748b",          // Muted sub-text gray
  radiusSmooth: "16px",
  transitionSmooth: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  shadowSoft: "0 10px 30px rgba(15, 23, 42, 0.03)",
  shadowMedium: "0 20px 40px rgba(15, 23, 42, 0.06)"
};

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────
const TestimonialsSection = styled.section`
  background-color: ${theme.bgLight};
  padding: 8rem 0;
  text-align: center;
`;

const MetaTag = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  color: ${theme.brandAccent};
  margin-bottom: 0.75rem;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${theme.brandPrimary};
  margin-bottom: 4rem;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 1.85rem;
    margin-bottom: 2.5rem;
  }
`;

const SliderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  /* Polishing dots component injection */
  .slick-dots {
    bottom: -3.5rem;

    li {
      margin: 0 4px;
      
      button:before {
        font-size: 8px;
        color: ${theme.textMuted};
        opacity: 0.25;
        transition: ${theme.transitionSmooth};
      }

      &.slick-active button:before {
        color: ${theme.brandAccent};
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }

  .slick-slide > div {
    padding: 1rem; /* Eliminates rigid viewport clipping boundaries */
  }
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 3rem;
  border-radius: ${theme.radiusSmooth};
  box-shadow: ${theme.shadowSoft};
  border: 1px solid rgba(15, 23, 42, 0.04);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 340px;
  transition: ${theme.transitionSmooth};

  &:hover {
    box-shadow: ${theme.shadowMedium};
    transform: translateY(-5px);
  }

  @media (max-width: 576px) {
    padding: 2rem;
    min-height: auto;
  }
`;

const QuoteContext = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 1.5rem;
`;

const Feedback = styled.blockquote`
  font-size: 1.1rem;
  line-height: 1.75;
  color: ${theme.textMain};
  font-weight: 400;
  margin-bottom: 2.5rem;
  position: relative;
`;

const AuthorProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${theme.bgLight};
`;

const MetaDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${theme.brandPrimary};
  margin: 0 0 0.2rem 0;
`;

const Role = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${theme.brandAccent};
  margin: 0;

  span {
    color: ${theme.textMuted};
    font-weight: 400;
  }
`;