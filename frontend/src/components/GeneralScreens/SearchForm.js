import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/tracking?search=${searchTerm}`);
    }

    setSearchTerm("");
  };

  return (
    <Styles>
      <Col md="5" className="container">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ padding: "30px", fontSize: "1.3rem", color: "#1565C0" }}
          />
        </Link>
        <form className="form" onSubmit={handleSubmit}>
          <div
            style={{
              fontWeight: "600",
              letterSpacing: "3px",
              fontSize: "1rem",
            }}
          >
            Ex: B10375hd93VGH
          </div>
          <input
            autoFocus={false}
            type="text"
            required
            className="forms"
            placeholder="Please Input your Courier ID"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button type="submit" className="butt">
            Submit
          </button>
        </form>
      </Col>
    </Styles>
  );
};

export default SearchForm;

const Styles = styled.div`
  overflow-x: hidden;
  padding: clamp(1.25rem, 3vw, 2.5rem) 1rem;
  background: #edf4fa;

  .container {
    width: 100%;
    max-width: 760px;
    padding: clamp(1.1rem, 3vw, 2rem);
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e3eaf1;
    border-radius: 18px;
    box-shadow: 0 14px 36px rgba(16, 37, 63, 0.08);
  }

  .container > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    padding: 0 !important;
    margin-bottom: 0.75rem;
    border-radius: 50%;
    background: #f1f6fa;
  }

  .forms {
    width: 100%;
    min-height: 54px;
    padding: 12px 16px;
    box-shadow: none;
    background: #f8fafc;
    border: 1px solid #d9e3ed;
    border-radius: 10px;
    color: #1b2b3d;
    transition: border-color 180ms ease, box-shadow 180ms ease;

    &:focus {
      border-color: #35a5db;
      box-shadow: 0 0 0 4px rgba(53, 165, 219, 0.14);
      outline: none;
    }
  }
  .butt {
    border: none;
    border-radius: 10px;
    min-width: 132px;
    min-height: 50px;
    margin: 1.25rem 0 0;
    padding: 0.8rem 1.5rem;
    background: #1769aa;
    color: #ffffff;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 0 8px 18px rgba(23, 105, 170, 0.2);
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;

    &:hover {
      color: #ffffff;
      background: #12578e;
      transform: translateY(-1px);
      box-shadow: 0 10px 22px rgba(23, 105, 170, 0.24);
    }
  }

  @media (max-width: 575px) {
    .butt {
      width: 100%;
    }
  }
`;
