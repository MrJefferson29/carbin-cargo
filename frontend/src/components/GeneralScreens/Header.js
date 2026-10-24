import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const Header = () => {
  const { activeUser, authToken } = useContext(AuthContext);
  const [auth, setAuth] = useState(!!authToken);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Sync auth state directly without artificial loading delays
  useEffect(() => {
    setAuth(!!authToken || !!localStorage.getItem("authToken"));
  }, [authToken]);

  // Navbar scroll background trigger
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <NavWrapper scrolled={scrolled}>
      <GlobalStyle />
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <BrandLogo as={NavLink} to="/" onClick={handleLinkClick}>
            <span className="brand-primary">Carbin and Cargo</span>
            <span className="brand-secondary">Logistics</span>
          </BrandLogo>

          <NavbarToggleCustom 
            aria-controls="responsive-navbar-nav" 
            aria-label="Toggle navigation" 
          />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <NavMenu>
              <MenuLink to="/" end onClick={handleLinkClick}>
                Home
              </MenuLink>
              <MenuLink to="/tracking" onClick={handleLinkClick}>
                Track Shipment
              </MenuLink>
              {auth && (
                <MenuLink to="/create-post" onClick={handleLinkClick}>
                  New Package
                </MenuLink>
              )}
              <MenuLink to="/about" onClick={handleLinkClick}>
                About
              </MenuLink>
              <MenuLink to="/meet-the-team" onClick={handleLinkClick}>
                Services
              </MenuLink>
              <MenuLink to="/summary" onClick={handleLinkClick}>
                Contact
              </MenuLink>
            </NavMenu>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavWrapper>
  );
};

export default Header;

// ─── THEME CONFIGURATION ───────────────────────────────────────────────────
const theme = {
  textDark: "#0f172a",       // Matching deep slate
  textMuted: "#64748b",      // Subtle text
  brandAccent: "#0ea5e9",    // Clean active sky blue
  radiusSmooth: "12px",
  transitionSmooth: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
};

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 82px;
    @media (min-width: 992px) {
      padding-top: 92px;
    }
  }
`;

const NavWrapper = styled.div`
  .custom-navbar {
    background: rgba(255, 255, 255, 0.96);
    padding: 0.8rem 0;
    transition: ${theme.transitionSmooth};
    border-bottom: 1px solid rgba(16, 37, 63, 0.08);
    box-shadow: 0 5px 24px rgba(16, 37, 63, 0.07);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    &.scrolled {
      background: rgba(255, 255, 255, 0.97);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 0.65rem 0;
    }
  }
`;

const BrandLogo = styled(NavLink)`
  color: ${theme.textDark};
  text-decoration: none;
  letter-spacing: -0.035em;
  transition: ${theme.transitionSmooth};
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.04;
  flex: 0 1 auto;
  min-width: 0;

  .brand-primary {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.05rem, 2.2vw, 1.55rem);
    font-weight: 700;
    white-space: nowrap;
  }

  .brand-secondary {
    color: ${theme.brandAccent};
    font-family: Inter, "Segoe UI", sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    margin-top: 0.32rem;
  }

  &:hover {
    opacity: 0.9;
    color: ${theme.textDark};
  }
`;

const NavbarToggleCustom = styled(Navbar.Toggle)`
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  transition: ${theme.transitionSmooth};

  &:focus {
    box-shadow: none;
    background: rgba(14, 165, 233, 0.1);
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }
`;

const NavMenu = styled(Nav)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 991px) {
    width: 100%;
    background: #ffffff;
    padding: 0.75rem;
    margin-top: 0.7rem;
    border-radius: 14px;
    box-shadow: 0 14px 32px rgba(16, 37, 63, 0.12);
    align-items: stretch;
    border: 1px solid rgba(16, 37, 63, 0.08);
  }
`;

const MenuLink = styled(NavLink)`
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: ${theme.textMuted};
  padding: 9px 13px;
  border-radius: ${theme.radiusSmooth};
  transition: ${theme.transitionSmooth};
  white-space: nowrap;

  &:hover {
    color: ${theme.brandAccent} !important;
    background: rgba(14, 165, 233, 0.06);
  }

  &.active {
    color: ${theme.brandAccent} !important;
    background: rgba(14, 165, 233, 0.1);
    font-weight: 600;
  }

  @media (max-width: 991px) {
    color: ${theme.textDark} !important;
    padding: 11px 14px;
    text-align: left;
    
    &:hover, &.active {
      background: rgba(14, 165, 233, 0.08);
    }
  }
`;