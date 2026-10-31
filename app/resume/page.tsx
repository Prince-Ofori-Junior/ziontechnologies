"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/* ---------- Resume/CV Section ---------- */

type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

type Education = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string[];
};

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Zion Technologies",
    period: "2022 - Present",
    description: [
      "Led development of custom web applications using Next.js and React",
      "Implemented printing solutions and brand identity digital assets",
      "Mediated between technical teams and clients in Accra, Ghana",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Web & Print Solutions Ltd",
    period: "2020 - 2022",
    description: [
      "Developed custom software and printing systems",
      "Created responsive websites and mobile applications",
      "Managed database integration and API development",
    ],
    technologies: ["Node.js", "React", "SQL", "Python"],
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Digital Creations Agency",
    period: "2019 - 2020",
    description: [
      "Assisted in building web interfaces and printing materials",
      "Supported the team with UI/UX implementation",
      "Learned custom software development workflows",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
  },
];

const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",
    institution: "University of Ghana",
    period: "2015 - 2019",
    description: [
      "Focused on software engineering and systems design",
      "Completed projects in web development and database management",
    ],
  },
  {
    id: 2,
    degree: "Higher National Diploma",
    institution: "Accra Institute of Technology",
    period: "2013 - 2015",
    description: [
      "Specialized in computer programming and networking",
      "Developed small business software solutions",
    ],
  },
];

export default function ResumePage() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2>Resume</h2>
        <div className="section-divider" />
        
        <h3>Professional Experience</h3>
        <div className="experiences-grid">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="exp-header">
                <h4>{exp.title}</h4>
                <span className="exp-company">{exp.company}</span>
                <span className="exp-period">{exp.period}</span>
              </div>
              <div className="exp-tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="exp-description">
                {exp.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <h3>Education</h3>
        <div className="education-list">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="edu-degree">
                {edu.degree} - {edu.institution}
              </div>
              <div className="edu-period">{edu.period}</div>
              <div className="edu-description">
                {edu.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}