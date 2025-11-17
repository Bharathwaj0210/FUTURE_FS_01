import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="hero reveal">
      <img
        src={process.env.PUBLIC_URL + "/profile.jpg"}
        alt="profile"
        className="profile-img"
        loading="lazy"
      />

      <h1>Bharathwaj P</h1>
      <p>Python Developer | AI & Data Science Enthusiast</p>

      <div className="contact-info">
        <p><FaPhone className="icon" /> 8682922695</p>
        <p><FaMapMarkerAlt className="icon" /> Chennai</p>
        <p><FaEnvelope className="icon" /> bharathwaj271192@gmail.com</p>
        <p>
          <FaLinkedin className="icon" />{" "}
          <a href="https://www.linkedin.com/in/bharathwaj-p-297602268/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <p>
          <FaGithub className="icon" />{" "}
          <a href="https://github.com/Bharathwaj0210" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
