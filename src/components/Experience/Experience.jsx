import React, { useRef } from "react";
import "./Experience.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    date: "SEP 2021 - JUN 2025",
    title: "B.Tech in Computer Science And Engineering",
    org: "Galgotias University, Greater Noida, Uttar Pradesh",
    desc: "Graduated with a CGPA of 7.45, building a strong foundation in software development, data structures, algorithms, database management, and full-stack web technologies.",
  },
  {
    date: "APR 2019 - MAR 2020",
    title: "Senior Secondary Education (Class XII)",
    org: "Kendriya Vidyalaya No. 1 AFS Pathankot, Punjab",
    desc: "Completed Higher Secondary Education with Physics, Chemistry, and Mathematics (PCM), securing 76.4% marks.",
  },
  {
    date: "APR 2017 - MAR 2018",
    title: "Secondary Education (Class X)",
    org: "Kendriya Vidyalaya No. 1 AFS Pathankot, Punjab",
    desc: "Completed Secondary Education under CBSE curriculum, securing 74% marks.",
  },
  {
    date: "JAN 2025 - MAY 2025",
    title: "RPA Developer Intern",
    org: "Centelli India, Panchkula, Haryana",
    desc: "Built an automated Hotel Booking Invoice Processing System using UiPath RE-Framework, implementing a queue-based dispatcher-performer architecture. Reduced manual processing effort by 70% through structured logging, robust exception handling, and reusable workflow modules.",
  },
  {
    date: "JUL 2024 - SEP 2024",
    title: "WEB Developer Intern",
    org: "CodTech IT Solutions Pvt Ltd, Hyderabad",
    desc: "Worked closely with senior developers to build and maintain modern web applications. Participated in frontend development, REST API integration, performance optimization, and troubleshooting, gaining hands-on experience in real-world software development workflows.",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineFillRef = useRef(null);

  useGSAP(() => {
    const wrap = timelineRef.current;
    if (!wrap) return;

    const items = gsap.utils.toArray(".tl-item", wrap);

    items.forEach((item) => {
      const card = item.querySelector(".tl-card");
      const dot = item.querySelector(".tl-dot");

      gsap.set(card, {
        opacity: 0.18,
        y: 60,
        filter: "blur(10px)",
      });

      gsap.set(dot, {
        scale: 0.9,
        opacity: 0.55,
      });
    });

    gsap.set(lineFillRef.current, {
      scaleY: 0,
      transformOrigin: "top",
    });

    gsap.to(lineFillRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    items.forEach((item) => {
      const card = item.querySelector(".tl-card");
      const dot = item.querySelector(".tl-dot");

      ScrollTrigger.create({
        trigger: item,
        start: "top 55%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power3.out",
            });

            gsap.to(dot, {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "power3.out",
            });

            item.classList.add("is-active");
          } else {
            gsap.to(card, {
              opacity: 0.18,
              y: 60,
              filter: "blur(10px)",
              duration: 0.7,
              ease: "power3.out",
            });

            gsap.to(dot, {
              scale: 0.9,
              opacity: 0.55,
              duration: 0.35,
              ease: "power3.out",
            });

            item.classList.remove("is-active");
          }
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, { scope: sectionRef });

  return (
    <section className="journey" id="timeline" ref={sectionRef}>
      <div className="journey-hero">
        <p className="journey-kicker">02. JOURNEY</p>
        <h2 className="journey-title">Professional Path</h2>
        <p className="journey-sub">
          A timeline of key milestones, training, internships, and experiences
          focused on technology and software development.
        </p>
      </div>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line">
          <span className="timeline-line-bg"></span>
          <span
            className="timeline-line-fill"
            ref={lineFillRef}
          ></span>
        </div>

        {TIMELINE.map((t, i) => {
          const side = i % 2 === 0 ? "left" : "right";

          return (
            <div className={`tl-item ${side}`} key={`${t.date}-${i}`}>
              <div className="tl-side tl-left">
                {side === "left" ? (
                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-h">{t.title}</h3>
                    <div className="tl-org">{t.org}</div>
                    <p className="tl-desc">{t.desc}</p>
                  </article>
                ): null}
              </div>

              <div className="tl-center">
                <span className="tl-dot" aria-hidden="true"></span>
              </div>

              <div className="tl-side tl-right">
                {side === "right" ? (
                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-h">{t.title}</h3>
                    <div className="tl-org">{t.org}</div>
                    <p className="tl-desc">{t.desc}</p>
                  </article>
                ):null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};