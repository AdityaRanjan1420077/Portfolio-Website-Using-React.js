import React from "react";
import "./Projects.scss";
import resume from "../../assets/images/common/airesume.png";
import hotel from "../../assets/images/common/hotel.png";
import pos from "../../assets/images/common/pos.png";
import portfolio from "../../assets/images/common/portfolio.png";
const PROJECTS = [

    {
        title: "Next-Gen Developer Portfolio",
        desc: "Designed and built a high-performance animated portfolio using React and GSAP. Implemented ScrollTrigger-based section pinning, scrubbed timelines, parallax/zoom effects, and smooth anchor navigation. Built reusable motion patterns, responsive layouts, and optimized rendering with will-change, transform-based animations, and cleanup-safe GSAP hooks for consistent behavior across refresh/resize.",
        image: portfolio,
        tags: ["HTML", "CSS", "React.js", "SCSS", "Vite", "GSAP", "ScrollTrigger"],
        links: [
          { label: "Live Demo", href: "#", icon: "↗" },
          { label: "Source Code", href: "#", icon: "⌂" },
        ]
      },
  {
    title: "SmartPOS — Point of Sale System",
    desc: "Developed a secure Point of Sale (POS) system using Spring Boot, React.js, MySQL, and Spring Security. Implemented JWT authentication, role-based access control, inventory management, billing, invoicing, and REST APIs for real-time sales tracking and store operations.",
    image: pos,
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "JWT",
      "Spring Security",
      "REST API"
    ],
    links: [
      {
        label: "Live Demo",
        href: "#",
        icon: "↗"
      },
      {
        label: "Source Code",
        href: "#",
        icon: "⌂"
      }
    ]
  },

  {
    title: "AI Resume Analyzer",
    desc: "Built an AI-powered web application that analyzes resumes for ATS compatibility and provides intelligent feedback, keyword insights, resume scoring, and personalized recommendations. Designed a responsive interface with real-time analysis to help users optimize their resumes for better job opportunities.",
    image: resume,
    tags: [
      "React.js",
      "JavaScript",
      "AI",
      "ATS Analysis",
      "Tailwind CSS",
      "Vercel"
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://ai-resume-analyzer-rose-pi.vercel.app/",
        icon: "↗"
      },
      {
        label: "Source Code",
        href: "https://github.com/AdityaRanjan1420077/Ai-Resume-analyzer",
        icon: "⌂"
      }
    ]
  },

  {
    title: "Hotel Booking Invoice Processing System",
    desc: "Developed an enterprise-grade Robotic Process Automation (RPA) solution using UiPath RE-Framework to automate hotel booking invoice processing. Implemented a queue-based dispatcher-performer architecture with robust exception handling, structured logging, and reusable workflows, significantly reducing manual effort and improving processing efficiency.",
    image: hotel,
    tags: [
      "UiPath",
      "RPA",
      "RE-Framework",
      "Automation",
      "Invoice Processing",
      "Queue Management"
    ],
    links: [
      {
        label: "Case Study",
        href: "#",
        icon: "↗"
      },
      {
        label: "Source Code",
        href: "#",
        icon: "⌂"
      }
    ]
  }
];


export default function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Header like your Certifications screenshot */}
      <div className="sectionHeader">
        <p className="sectionKicker">04. PROJECTS</p>
        <h2 className="sectionTitle">PROJECTS </h2>
        <p className="sectionSub">
        A curated collection of projects demonstrating expertise in Java, React, Spring Boot, AI, and enterprise automation.
        </p>
      </div>

      {/* Cards like your first screenshot */}
      <div className="projectsGrid">
        {PROJECTS.map((p) => (
          <article className="projectCard" key={p.title}>
            <div className="projectMedia"> <img src={p.image} alt={p.title} loading="lazy" /> <div className="projectOverlay"> <h3>{p.title}</h3> </div> </div>

            <div className="projectBody">
              <h3 className="projectTitle">{p.title}</h3>
              <p className="projectDesc">{p.desc}</p>

              <div className="projectTags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="projectFooter">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    className="projectLink"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon">{l.icon}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}