// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = ({ footpaths }) => {
  const navigate = useNavigate(); // Changed from history to navigate

  const handleCardClick = (id) => {
    navigate(`/exhibitions/${id}`); // Navigate to the exhibition page
  };

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <button
          className="btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="logo">Museum Logo</div>
        <div className="badge-info">
          <span className="trophy-icon">🏆</span>
          <span className="badge-count">0</span>
        </div>
      </header>

      <nav className="collapse navbar navbar-light bg-light" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Log Out
            </a>
          </li>
        </ul>
      </nav>

      <main className="text-center p-5">
        <h1>Choose Your Adventure</h1>
        <p>Explore the different learning footpaths we have to offer!</p>
        <div className="row">
          {footpaths.map((footpath, index) => (
            <div className="col-6 mb-4" key={index}>
              <div
                className="card flip-card"
                onClick={() => handleCardClick(footpath.id)} // Call updated click handler
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-body">
                      <h5 className="card-title">{footpath.title}</h5>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-body">
                      <p className="card-text">{footpath.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
