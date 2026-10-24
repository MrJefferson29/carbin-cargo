import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row className="gy-5">
          <Col lg={5} md={12}>
            <BrandColumn>
              <FooterLogo to="/">
                <span className="brand-primary">Carbin and Cargo</span>
                <span className="brand-secondary">Logistics</span>
              </FooterLogo>
              <FooterDescription>
                Meticulously streamlining supply chains, route automation, and 
                freight asset handling across global vectors. Delivering exceptional 
                operational efficiency every step of the way.
              </FooterDescription>
              <ContactEmail href="mailto:logisticscarbinandcargo@gmail.com">
                logisticscarbinandcargo@gmail.com
              </ContactEmail>
              <SocialIcons>
                <SocialIcon href="#" aria-label="Facebook">
                  <Facebook size={18} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Twitter">
                  <Twitter size={18} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">
                  <Instagram size={18} />
                </SocialIcon>
              </SocialIcons>
            </BrandColumn>
          </Col>
          
          <Col lg={3} md={6} className="ps-lg-5">
            <LinkColumn>
              <FooterTitle>Navigation</FooterTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/meet-the-team">Services</FooterLink>
              <FooterLink to="/summary">Contact</FooterLink>
            </LinkColumn>
          </Col>

          <Col lg={4} md={6}>
            <LinkColumn>
              <FooterTitle>Operations</FooterTitle>
              <FooterLink to="/tracking">Real-Time Tracking</FooterLink>
              <FooterLink to="/create-post">Consignment Portal</FooterLink>
              <FooterLink to="#privacy">Privacy Directives</FooterLink>
            </LinkColumn>
          </Col>
        </Row>
        
        <FooterBottom>
          <p>&copy; 2026 Carbin and Cargo Logistics. All rights reserved.</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

// ─── THEME CONFIGURATION ───────────────────────────────────────────────────
const theme = {
  brandPrimary: "#0f172a",       // Deep slate unifying baseline matching core app layers
  brandAccent: "#0ea5e9",        // Crisp sky blue accent indicator
  textMuted: "#94a3b8",          // Sleek low-contrast text values
  textLight: "#ffffff",
  transitionSmooth: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
};

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────
const FooterContainer = styled.footer`
  background-color: ${theme.brandPrimary};
  color: ${theme.textMuted};
  padding: clamp(3.5rem, 7vw, 6rem) 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterLogo = styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
  color: ${theme.textLight};
  text-decoration: none;
  letter-spacing: -0.035em;
  line-height: 1.05;

  .brand-secondary {
    color: ${theme.brandAccent};
    font-family: Inter, "Segoe UI", sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.34em;
    text-transform: uppercase;
  }
  
  &:hover {
    color: ${theme.textLight};
  }
`;

const FooterDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: #94a3b8;
  max-width: 380px;
  margin: 0;
`;

const ContactEmail = styled.a`
  color: #94a3b8;
  font-size: 0.95rem;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: ${theme.transitionSmooth};

  &:hover {
    color: ${theme.brandAccent};
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const FooterTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${theme.textLight};
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(NavLink)`
  font-size: 0.95rem;
  color: #64748b;
  text-decoration: none;
  transition: ${theme.transitionSmooth};
  display: inline-block;
  align-self: flex-start;

  &:hover {
    color: ${theme.brandAccent};
    transform: translateX(3px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  color: #64748b;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitionSmooth};

  &:hover {
    color: ${theme.textLight};
    background: rgba(14, 165, 233, 0.1);
    border-color: ${theme.brandAccent};
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  margin-top: clamp(2.5rem, 5vw, 5rem);
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  text-align: center;
  
  p {
    font-size: 0.85rem;
    color: #475569;
    margin: 0;
  }
`;