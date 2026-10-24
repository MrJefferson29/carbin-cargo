import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Theme colors matching sc1.js
const theme = {
  darkGreen: "#1565C0",
  darkGreenHover: "#1976D2",
  lightGreen: "#42A5F5",
  lightGreenHover: "#64B5F6",
  lightGreenBg: "#BBDEFB",
  textLight: "#ffffff",
  textDark: "#2c3e50",
  textGray: "#5a6c7d",
  white: "#ffffff",
  shadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  shadowMedium: "0 8px 16px rgba(0, 0, 0, 0.15)",
  shadowLarge: "0 12px 24px rgba(0, 0, 0, 0.2)",
};

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const subject = encodeURIComponent('Contact Form Submission from Carbin and Cargo Logistics');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:logisticscarbinandcargo@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 500);
  };

  return (
    <>
      <GlobalStyle />
      <Styles>
        <HeroSection>
          <HeroContent>
            <HeroHeading>Contact Us</HeroHeading>
          </HeroContent>
        </HeroSection>

        <MainContainer>
          <GridWrapper>
            {/* Left Column: Form Intake */}
            <FormColumn>
              <FormHeading>We're Ready, Let's Talk.</FormHeading>
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormTextarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                {submitStatus === 'success' && (
                  <SuccessMessage>Message compiled! Launching mail system...</SuccessMessage>
                )}
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </SubmitButton>
              </ContactForm>
            </FormColumn>

            {/* Right Column: Direct Info Cards & Networks */}
            <InfoColumn>
              <StickySidebar>
                <InfoCard>
                  <InfoCardHeading>Direct Communications</InfoCardHeading>
                  
                  <InfoItem>
                    <InfoLabel>Email Support</InfoLabel>
                    <InfoValue href="mailto:logisticscarbinandcargo@gmail.com">
                      logisticscarbinandcargo@gmail.com
                    </InfoValue>
                  </InfoItem>
                </InfoCard>

                <SocialCard>
                  <SocialCardHeading>Digital Channels</SocialCardHeading>
                  <SocialIcons>
                    <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </SocialIcon>
                    <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </SocialIcon>
                  </SocialIcons>
                </SocialCard>
              </StickySidebar>
            </InfoColumn>
          </GridWrapper>
        </MainContainer>
      </Styles>
    </>
  );
};

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────
const Styles = styled.div`
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: #f8fafc;
`;

const HeroSection = styled.section`
  background-image: url("https://images.unsplash.com/photo-1601581875218-ee0c892ed92a?w=1200&h=800&fit=crop");
  background-size: cover;
  background-position: center;
  min-height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -76px;
  padding-top: calc(76px + 2rem);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(21, 101, 192, 0.8) 0%, rgba(15, 23, 42, 0.75) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${theme.textLight};
`;

const HeroHeading = styled.h1`
  font-weight: 800;
  font-size: 3.5rem;
  letter-spacing: -1px;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  gap: 4rem;
  align-items: start;

  @media (max-width: 992px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 3rem;
  }
`;

const FormColumn = styled.div`
  min-width: 0;
  background: ${theme.white};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.05);

  @media (max-width: 576px) {
    padding: 2rem 1.25rem;
  }
`;

const FormHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${theme.textDark};
  margin-bottom: 2rem;
  letter-spacing: -1px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  background-color: ${theme.white};
  color: ${theme.textDark};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.lightGreen};
    box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.15);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  background-color: ${theme.white};
  color: ${theme.textDark};
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.lightGreen};
    box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.15);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${theme.lightGreen} 0%, ${theme.lightGreenHover} 100%);
  color: ${theme.textLight};
  padding: 16px 32px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${theme.shadowMedium};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${theme.shadowLarge};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: ${theme.lightGreenBg};
  color: ${theme.darkGreen};
  padding: 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
`;

const InfoColumn = styled.div`
  height: 100%;
  min-width: 0;
`;

const StickySidebar = styled.div`
  position: sticky;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: ${theme.white};
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.05);
`;

const InfoCardHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${theme.textDark};
  margin-bottom: 1.75rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  &:last-child { margin-bottom: 0; }
`;

const InfoLabel = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${theme.lightGreenHover};
  display: block;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.textDark};
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.lightGreen};
  }
  
  @media (max-width: 576px) {
    font-size: 1.05rem;
  }
`;

const SocialCard = styled(InfoCard)`
  padding: 2rem 2.5rem;
`;

const SocialCardHeading = styled(InfoCardHeading)`
  margin-bottom: 1.25rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background: #f1f5f9;
  color: ${theme.textDark};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: ${theme.textLight};
    background: ${theme.darkGreen};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default ContactPage;