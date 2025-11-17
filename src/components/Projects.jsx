import React from "react";

export default function Projects() {
    const projects = [
    {
      title: "Paradise Restaurant",
      desc: "Responsive restaurant website using HTML & CSS.",
      tech: "HTML, CSS",
      link: "https://github.com/Bharathwaj0210/Paradise-Restaurant",
      image: process.env.PUBLIC_URL + "/Projects/paradise.png",
    },
    {
      title: "RedMarrow",
      desc: "E-commerce web app with authentication & cart.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/Bharathwaj0210/Red_Marrow",
      image: process.env.PUBLIC_URL + "/Projects/redmarrow.png",
    },
    {
      title: "Weather App",
      desc: "Weather app using OpenWeatherMap API.",
      tech: "HTML, CSS, JavaScript, API",
      link: "https://github.com/Bharathwaj0210/Weathers",
      image: process.env.PUBLIC_URL + "/Projects/weather.png",
    },
    {
      title: "Blockchain E-Voting",
      desc: "Secure blockchain-based voting system with biometric authentication.",
      tech: "Blockchain, Biometrics",
      image: process.env.PUBLIC_URL + "/Projects/voting.png",
    },
    {
      title: "Clothing Recommendation",
      desc: "AI-powered outfit recommendation system.",
      tech: "Python, ML",
      image: process.env.PUBLIC_URL + "/Projects/clothing.png",
    },
  ];


  return (
    <section id="projects" className="reveal">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card hover-zoom reveal-up">
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="project-thumbnail"
                loading="lazy"
              />
            )}
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p className="tech">Tech: {p.tech}</p>
            {p.link ? (
              <a href={p.link} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            ) : (
              <span className="no-link">Demo available on request</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
