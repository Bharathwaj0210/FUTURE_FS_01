import React from "react";
import { Code2, Layers, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Code2 size={36} color="#fff" />,
      title: "Languages",
      items: ["Python", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: <Layers size={36} color="#fff" />,
      title: "Frameworks",
      items: ["React", "Django", "Bootstrap"],
    },
    {
      icon: <Database size={36} color="#fff" />,
      title: "Database",
      items: ["MySQL", "MongoDB"],
    },
    {
      icon: <Wrench size={36} color="#fff" />,
      title: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="reveal">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="card-grid">
        {skills.map((s, i) => (
          <div key={i} className="card">
            <div className="skills-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <ul>
              {s.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
