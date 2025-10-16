"use client";
import "./HomeAbout.css";

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about-col">
          <div className="symbols-container">
            <div className="symbol">
              <img src="/logos/rajsera-icon-dark.svg" alt="Rajsera Icon" />
            </div>
          </div>
          <div className="home-about-header">
            <p className="mono">
              <span>&#9654;</span> Capabilities
            </p>
            <h3>
              Comprehensive digital expertise across design, development, and strategy
            </h3>
          </div>
        </div>
        <div className="home-about-col">
          <div className="home-about-col-row">
            <div className="home-about-card">
              <p className="mono">
                [ Core 01 ]
              </p>
              <h4>
                Digital Strategy
              </h4>
            </div>
            <div className="home-about-card">
              <p className="mono">
                [ Core 02 ]
              </p>
              <h4>
                User Experience
              </h4>
            </div>
          </div>
          <div className="home-about-col-row">
            <div className="home-about-card">
              <p className="mono">
                [ Core 03 ]
              </p>
              <h4>
                Product Design
              </h4>
            </div>
            <div className="home-about-card">
              <p className="mono">
                [ Core 04 ]
              </p>
              <h4>
                Development
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

