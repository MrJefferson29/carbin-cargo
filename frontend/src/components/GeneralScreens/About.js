import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Importing your image assets natively
import i2 from "../../Assets/m2.jpeg"; 
import g6 from "../../Assets/m1.jpeg";

export default function About() {
  return (
    <AboutSection>
      <Container>
        <Row className="align-items-center gy-5">
          {/* Left Text Block */}
          <Col lg={6} md={12}>
            <TextContext>
              <MetaTag>Our Identity</MetaTag>
              <MainHeading>
                Redefining the Velocity of Modern Logistics
              </MainHeading>
              <Description>
                Carbin and Cargo Logistics was founded on a singular premise: to replace the legacy friction 
                of traditional freight distribution with intelligent automation and human precision. 
                We oversee complex warehouse mechanics and end-to-end routing infrastructure 
                to ensure your cargo flows seamlessly across domestic and international lines.
              </Description>
              <Description>
                Whether managing bulk industrial freight or delicate specialized consignments, 
                our dedicated transit networks operate with total visibility, absolute accuracy, 
                and unmatched precision.
              </Description>
              <ActionLink to="/meet-the-team">
                Explore Our Services
              </ActionLink>
            </TextContext>
          </Col>

          {/* Right Visual Frame Composition */}
          <Col lg={6} md={12}>
            <ImageCompositionFrame>
              <MainImageWrapper>
                <img src={g6} alt="Logistics fulfillment facility operations" />
              </MainImageWrapper>
              <OverlayImageWrapper>
                <img src={i2} alt="Global cargo distribution management" />
              </OverlayImageWrapper>
            </ImageCompositionFrame>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
}

// ─── THEME CONFIGURATION ───────────────────────────────────────────────────
const theme = {
  brandPrimary: "#0f172a",       // Deep Slate base matching layout profiles
  brandAccent: "#0ea5e9",        // Electric Sky Blue indicator focus
  textMain: "#334155",           // High contrast slate gray body text
  textMuted: "#64748b",
  radiusSmooth: "16px",
  transitionSmooth: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  shadowSoft: "0 20px 40px rgba(15, 23, 42, 0.05)"
};

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────
const AboutSection = styled.section`
  background-color: #ffffff;
  padding: 8rem 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const TextContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const MetaTag = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  color: ${theme.brandAccent};
`;

const MainHeading = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  color: ${theme.brandPrimary};
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${theme.textMain};
  margin: 0;
`;

const ActionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: ${theme.brandPrimary};
  border-radius: ${theme.radiusSmooth};
  text-decoration: none;
  box-shadow: ${theme.shadowSoft};
  transition: ${theme.transitionSmooth};
  margin-top: 1rem;

  &:hover {
    background-color: ${theme.brandAccent};
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(14, 165, 233, 0.2);
  }
`;

const ImageCompositionFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 0;
  
  @media (max-width: 991px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

const MainImageWrapper = styled.div`
  width: 75%;
  height: 480px;
  border-radius: ${theme.radiusSmooth};
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${theme.transitionSmooth};
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 320px;
  }
`;

const OverlayImageWrapper = styled.div`
  position: absolute;
  width: 45%;
  height: 280px;
  left: 0;
  bottom: -1rem;
  border-radius: ${theme.radiusSmooth};
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(15, 23, 42, 0.15);
  border: 4px solid #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 991px) {
    left: 10%;
  }

  @media (max-width: 576px) {
    display: none; /* Simplifies layout over small mobile frames to prioritize readability */
  }
`;