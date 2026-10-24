import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import j1 from '../../Assets/burn.jpg';
import exel1 from '../../Assets/exel1.jpg';
import exel2 from '../../Assets/exel2.jpg';
import gal1 from '../../Assets/gal1.jpg';
import gal2 from '../../Assets/gal2.jpg';
import gal3 from '../../Assets/gal3.jpg';
import gal4 from '../../Assets/gal4.jpg';
import TestimonialSlider from "./Testimonials";

export default function Sc1() {
  return (
    <Styles>
      {/* 1. HERO SECTION */}
      <HeroSection>
        <HeroContent>
          <MainHeading>Delivering Excellence, Every Time</MainHeading>
          <SubHeading>
            Your Trusted Partner in Transport Logistics
          </SubHeading>
          <RequestButton href="#contact">Request Quote</RequestButton>
        </HeroContent>
      </HeroSection>
      
      {/* 2. QUOTE & INTRO */}
      <QuoteSection>
        <Container>
          <QuoteIcon>&ldquo;</QuoteIcon>
          <QuoteText>
            At Carbin and Cargo Logistics, we believe logistics is more than just moving goods—it's about moving businesses forward. Our mission is simple: to deliver reliability, innovation, and exceptional service every step of the way.
          </QuoteText>
          <QuoteAuthor>Frank Weller</QuoteAuthor>
        </Container>
      </QuoteSection>

      {/* 3. EXCELLENCE WORK */}
      <ExcellenceSection>
        <Container>
          <SectionTag>Operations</SectionTag>
          <SectionHeading>How We Deliver Excellence</SectionHeading>
          
          <ExcellenceContent>
            <div className="excellence-item">
              <ExcellenceImageWrapper>
                <img src={exel1} alt="Consultation and Planning" />
              </ExcellenceImageWrapper>
              <ExcellenceText>
                <ExcellenceTitle>Consultation and Planning</ExcellenceTitle>
                <ExcellenceDescription>
                  Our expert team works closely with you to understand your unique logistics needs. We analyze your supply chain, identify optimization opportunities, and develop customized solutions that align with your business goals. Through detailed consultation, we ensure every aspect of your logistics operation is carefully planned and executed.
                </ExcellenceDescription>
              </ExcellenceText>
            </div>

            <div className="excellence-item">
              <ExcellenceImageWrapper>
                <img src={exel2} alt="Booking and Scheduling" />
              </ExcellenceImageWrapper>
              <ExcellenceText>
                <ExcellenceTitle>Booking and Scheduling</ExcellenceTitle>
                <ExcellenceDescription>
                  Streamline your shipping process with our intuitive booking system. Our advanced scheduling platform allows you to book shipments, track availability, and manage your logistics calendar with ease. We coordinate all aspects of your shipment, ensuring timely pickups and deliveries that keep your operations running smoothly.
                </ExcellenceDescription>
              </ExcellenceText>
            </div>
          </ExcellenceContent>
        </Container>
      </ExcellenceSection>

      {/* 4. INNOVATION & VALUE PROPOSITION */}
      <InnovationSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <SectionTag className="light">Forward Thinking</SectionTag>
              <SectionHeadingWhite>Our Commitment to Innovation</SectionHeadingWhite>
              <InnovationText>
                At Carbin and Cargo Logistics, we're constantly pushing the boundaries of what's possible in logistics. We invest in cutting-edge technologies including AI-powered route optimization, machine learning for predictive analytics, blockchain for transparent supply chains, and IoT sensors for real-time cargo monitoring.
              </InnovationText>
            </Col>
            <Col lg={6} className="text-lg-end">
              <CardCta>
                <h3>Need Real-Time Visibility?</h3>
                <p>Check the immediate live status of your payload anywhere globally.</p>
                <TrackButton href="/tracking">
                  Track Shipment <Arrow>→</Arrow>
                </TrackButton>
              </CardCta>
            </Col>
          </Row>
        </Container>
      </InnovationSection>

      {/* 5. JOIN SECTION */}
      <JoinSection>
        <Container fluid className="px-lg-5">
          <JoinCardWrapper>
            <SectionTag>Partnership</SectionTag>
            <SectionHeading style={{ marginBottom: '1.5rem' }}>Join the Carbin and Cargo Logistics Family</SectionHeading>
            <JoinText>
              When you partner with Carbin and Cargo Logistics, you're not just getting a logistics provider—you're joining a family of businesses that value excellence, reliability, and innovation. We offer competitive rates, flexible solutions, and a dedicated support team that's available 24/7 to assist you.
            </JoinText>
            <SecondaryButton href="#contact">Get Started Today</SecondaryButton>
          </JoinCardWrapper>
        </Container>
      </JoinSection>

      {/* 6. GALLERY */}
      <GallerySection>
        <Container>
          <SectionTag style={{ textAlign: 'center', display: 'block' }}>Our Fleet in Action</SectionTag>
          <GalleryGrid>
            <GalleryImage src={gal1} alt="Delivery workers loading van" />
            <GalleryImage src={gal2} alt="Warehouse forklift operation" />
            <GalleryImage src={gal3} alt="Delivery driver with clipboard" />
            <GalleryImage src={gal4} alt="Fleet of delivery vans" />
          </GalleryGrid>
        </Container>
      </GallerySection>

      <TestimonialSlider />
    </Styles>
  );
}

// ─── THEME CONFIGURATION ───────────────────────────────────────────────────
// Shifted away from bright blue/saturated greens to a modern, premium deep slate & teal palette
const theme = {
  brandPrimary: "#0f172a",       // Deep Slate / Navy Base
  brandAccent: "#0ea5e9",        // Clean Electric Sky Blue for focused visual targets
  bgLight: "#f8fafc",            // Extremely soft gray for background changes
  bgCard: "#ffffff",
  textMain: "#1e293b",           // Near black for clean readability
  textMuted: "#64748b",          // Refined mid-tone gray for details
  textLight: "#ffffff",
  radiusSmooth: "16px",          // Consistent modern radius roundings
  transitionSmooth: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  shadowSoft: "0 4px 30px rgba(0, 0, 0, 0.03)",
  shadowMedium: "0 10px 40px rgba(15, 23, 42, 0.08)"
};

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────
const Styles = styled.div`
  overflow-x: hidden;
  background-color: #ffffff;
  color: ${theme.textMain};
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

// Elegant Subtitle / Section Overviews instead of harsh lines
const SectionTag = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  color: ${theme.brandAccent};
  margin-bottom: 0.75rem;
  
  &.light {
    color: #38bdf8;
  }
`;

const HeroSection = styled.div`
  background-image: url(${j1});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 8rem 0 6rem 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /* Softened color overlay interaction */
    background: linear-gradient(to right, rgba(15, 23, 42, 0.85) 30%, rgba(15, 23, 42, 0.4) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 750px;
  padding-left: 5%;
  color: ${theme.textLight};
  animation: fadeIn 1s ease-out;

  @media (max-width: 768px) {
    padding-left: 15px;
    text-align: center;
  }
`;

const MainHeading = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -1.5px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const SubHeading = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #cbd5e1;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const RequestButton = styled.a`
  display: inline-block;
  background-color: ${theme.textLight};
  color: ${theme.brandPrimary};
  padding: 14px 34px;
  border-radius: ${theme.radiusSmooth};
  font-weight: 600;
  text-decoration: none;
  transition: ${theme.transitionSmooth};
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);

  &:hover {
    transform: translateY(-3px);
    background-color: #f1f5f9;
    color: ${theme.brandPrimary};
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
  }
`;

const QuoteSection = styled.section`
  background-color: ${theme.bgLight};
  padding: 6rem 0;
  text-align: center;
`;

const QuoteIcon = styled.div`
  font-size: 5rem;
  color: #cbd5e1;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: serif;
`;

const QuoteText = styled.blockquote`
  font-size: 1.4rem;
  line-height: 1.75;
  max-width: 850px;
  margin: 0 auto 1.5rem;
  color: ${theme.textMain};
  font-style: italic;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 0.95rem;
  color: ${theme.textMuted};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  &::before {
    content: '— ';
  }
`;

const ExcellenceSection = styled.section`
  padding: 8rem 0;
  background: white;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${theme.brandPrimary};
  margin-bottom: 4rem;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

const ExcellenceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;

  .excellence-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;

    &:nth-child(even) {
      direction: rtl;
      .excellence-text { direction: ltr; }
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      &:nth-child(even) { direction: ltr; }
    }
  }
`;

const ExcellenceImageWrapper = styled.div`
  overflow: hidden;
  border-radius: ${theme.radiusSmooth};
  box-shadow: ${theme.shadowMedium};
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: ${theme.transitionSmooth};
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    img { height: 260px; }
  }
`;

const ExcellenceText = styled.div`
  padding: 1rem 0;
`;

const ExcellenceTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.brandPrimary};
  margin-bottom: 1.25rem;
`;

const ExcellenceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  color: ${theme.textMuted};
`;

const InnovationSection = styled.section`
  background-color: ${theme.brandPrimary};
  padding: 8rem 0;
  color: ${theme.textLight};
`;

const SectionHeadingWhite = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
`;

const InnovationText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #94a3b8;
  margin-bottom: 0;
`;

// Card Container separating tracking away from plain background text blocks
const CardCta = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem;
  border-radius: ${theme.radiusSmooth};
  text-align: left;
  backdrop-filter: blur(10px);

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  p {
    color: #94a3b8;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const TrackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: ${theme.brandAccent};
  color: ${theme.textLight};
  padding: 12px 28px;
  border-radius: ${theme.radiusSmooth};
  font-weight: 600;
  text-decoration: none;
  transition: ${theme.transitionSmooth};

  &:hover {
    background-color: #38bdf8;
    color: ${theme.textLight};
    transform: translateX(4px);
  }
`;

const Arrow = styled.span`
  transition: transform 0.2s ease;
`;

const JoinSection = styled.section`
  padding: 6rem 0;
  background-color: white;
`;

// Instead of a plain section block, we encapsulate Join layout inside an asymmetric container card
const JoinCardWrapper = styled.div`
  background-color: ${theme.bgLight};
  padding: 5rem 4rem;
  border-radius: 24px;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const JoinText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: ${theme.textMuted};
  max-width: 800px;
  margin: 0 auto 2.5rem;
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: ${theme.brandPrimary};
  color: ${theme.textLight};
  padding: 14px 32px;
  border-radius: ${theme.radiusSmooth};
  font-weight: 600;
  text-decoration: none;
  transition: ${theme.transitionSmooth};

  &:hover {
    background-color: #334155;
    color: ${theme.textLight};
    transform: translateY(-2px);
  }
`;

const GallerySection = styled.section`
  padding: 4rem 0 8rem;
  background-color: #ffffff;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: ${theme.radiusSmooth};
  transition: ${theme.transitionSmooth};
  box-shadow: ${theme.shadowSoft};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadowMedium};
  }
`;