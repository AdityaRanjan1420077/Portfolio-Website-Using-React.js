import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
import "./TechStack.scss";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


// Front end icons
// const reactIcon = "/assets/images/tech-icons/reactjsIcon.svg";
// const htmlIcon = "/assets/images/tech-icons/htmlIcon.svg";
// const cssIcon = "/assets/images/tech-icons/cssIcon.svg";
// const jsIcon = "/assets/images/tech-icons/javascriptIcon.svg";
// const jqueryIcon = "/assets/images/tech-icons/jqueryIcon.svg";
// const tailwindIcon = "/assets/images/tech-icons/tailwindIcon.svg";
// const gsapIcon = "/assets/images/tech-icons/gsapIcon.svg";
// const sassIcon = "/assets/images/tech-icons/sassIcon.svg";

// //Backend Icons
// const javaIcon = "/assets/images/tech-icons/javaIcon.svg";
// const pythonIcon = "/assets/images/tech-icons/python.svg"
// const springIcon = "/assets/images/tech-icons/springIcon.svg";
// const apiIcon = "/assets/images/tech-icons/apiIcon.svg";
// const junitIcon = "/assets/images/tech-icons/junitIcon.svg";
// const swaggerIcon = "/assets/images/tech-icons/swaggerIcon.svg";
// const microservicesIcon = "/assets/images/tech-icons/microservicesIcon.svg";

// //Database Icons
// const postgresIcon = "/assets/images/tech-icons/postgresIcon.svg";
// const mongoIcon = "/assets/images/tech-icons/mongoIcon.svg";
// const redisIcon = "/assets/images/tech-icons/redisIcon.svg";
// const mysqlIcon = "/assets/images/tech-icons/mysqlIcon.svg";
// const h2Icon = "/assets/images/tech-icons/h2Icon.svg";

// //Cloud and Devops Icons
// const awsIcon = "/assets/images/tech-icons/awsIcon.svg";
// const s3Icon = "/assets/images/tech-icons/s3Icon.svg";
// const ec2Icon = "/assets/images/tech-icons/ec2Icon.svg";
// const lambdaIcon = "/assets/images/tech-icons/lambdaIcon.svg";
// const cloudFrontIcon = "/assets/images/tech-icons/cloudFrontIcon.svg";
// const dynamoDbIcon = "/assets/images/tech-icons/dynamoDbIcon.svg";
// const dockerIcon = "/assets/images/tech-icons/dockerIcon.svg";
// const githubActionsIcon = "/assets/images/tech-icons/githubActionsIcon.svg";
// const ciCdIcon = "/assets/images/tech-icons/ciCdIcon.svg";

// //Tools Icons

// const postmanIcon = "/assets/images/tech-icons/postmanIcon.svg";
// const eclipseIcon = "/assets/images/tech-icons/eclipseIcon.svg";
// const vscodeIcon = "/assets/images/tech-icons/vscodeIcon.svg";
// const figmaIcon = "/assets/images/tech-icons/figmaIcon.svg";
// const msOfficeIcon = "/assets/images/tech-icons/msOfficeIcon.svg";
// const jiraIcon = "/assets/images/tech-icons/jiraIcon.svg";
// const intellijIcon = "/assets/images/tech-icons/intellij.svg";



import reactIcon from "../../assets/images/tech-icons/reactjsIcon.svg";
import htmlIcon from "../../assets/images/tech-icons/htmlIcon.svg";
import cssIcon from "../../assets/images/tech-icons/cssIcon.svg";
import jsIcon from "../../assets/images/tech-icons/javascriptIcon.svg";
import jqueryIcon from "../../assets/images/tech-icons/jqueryIcon.svg";
import tailwindIcon from "../../assets/images/tech-icons/tailwindIcon.svg";
import gsapIcon from "../../assets/images/tech-icons/gsapIcon.svg";
import sassIcon from "../../assets/images/tech-icons/sassIcon.svg";

import javaIcon from "../../assets/images/tech-icons/javaIcon.svg";
import pythonIcon from "../../assets/images/tech-icons/Python.svg";
import springIcon from "../../assets/images/tech-icons/springIcon.svg";
import apiIcon from "../../assets/images/tech-icons/apiIcon.svg";
import junitIcon from "../../assets/images/tech-icons/junitIcon.svg";
import swaggerIcon from "../../assets/images/tech-icons/swaggerIcon.svg";
import microservicesIcon from "../../assets/images/tech-icons/microservicesIcon.svg";

import postgresIcon from "../../assets/images/tech-icons/postgresIcon.svg";
import mongoIcon from "../../assets/images/tech-icons/mongoIcon.svg";
import redisIcon from "../../assets/images/tech-icons/redisIcon.svg";
import mysqlIcon from "../../assets/images/tech-icons/mysqlIcon.svg";
import h2Icon from "../../assets/images/tech-icons/h2Icon.svg";

import awsIcon from "../../assets/images/tech-icons/awsIcon.svg";
import s3Icon from "../../assets/images/tech-icons/s3Icon.svg";
import lambdaIcon from "../../assets/images/tech-icons/lambdaIcon.svg";
import cloudFrontIcon from "../../assets/images/tech-icons/cloudfrontIcon.svg";

import dockerIcon from "../../assets/images/tech-icons/dockerIcon.svg";
import githubActionsIcon from "../../assets/images/tech-icons/githubActionsIcon.svg";
import ciCdIcon from "../../assets/images/tech-icons/ciCdIcon.svg";

import postmanIcon from "../../assets/images/tech-icons/postmanIcon.svg";
import eclipseIcon from "../../assets/images/tech-icons/eclipseIcon.svg";
import vscodeIcon from "../../assets/images/tech-icons/vscodeIcon.svg";
import cursorIcon from "../../assets/images/tech-icons/cursor.png"
import figmaIcon from "../../assets/images/tech-icons/figmaIcon.svg";
import msOfficeIcon from "../../assets/images/tech-icons/msOfficeIcon.svg";
import jiraIcon from "../../assets/images/tech-icons/jiraIcon.svg";
import intellijIcon from "../../assets/images/tech-icons/intellij.svg";


const SECTIONS = [
    {
        label:"FRONTEND",
        techs:[
            "React.js",
            "HTML",
            "CSS",
            "Java Script",
            "JQuery",
            "Tailwind CSS",
            "GSAP",
            "SASS",
        ],
    },
    {
        label:"BACKEND",
        techs:[
            "JAVA",
            "Python",
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "REST APIs",
            "JUnit",
            "Micro Services",
            "Swagger",
        ],

    },
    { label :"DATABASE", techs:["Postgre SQL", "MongoDB", "Redis", "MySQL"]},
    {
        label:"CLOUD & DEVOPS",
        techs:[
            "AWS",
            "S3",
            "Cloud Front",
            "Docker",
            "GitHub Actions",
            "CI/CD"
        ],
    },
    { label :"TOOLS", techs:["Postman", "Eclipse", "Visual Studio Code","Cursor", "Figma", "MS Office", "Intellij IDEA"]},
];
const TECH_ICONS = {
    "React.js": reactIcon,
    HTML: htmlIcon,
    CSS: cssIcon,
    "Java Script": jsIcon,
    JQuery: jqueryIcon,
    "Tailwind CSS": tailwindIcon,
    GSAP: gsapIcon,
    SASS: sassIcon,
  
    JAVA: javaIcon,
    Python: pythonIcon,
    "Spring Boot": springIcon,
    "Spring MVC": springIcon,
    "Spring Security": springIcon,
    "REST APIs": apiIcon,
    JUnit: junitIcon,
    "Micro Services": microservicesIcon,
    Swagger: swaggerIcon,
  
    "Postgre SQL": postgresIcon,
    MongoDB: mongoIcon,
    Redis: redisIcon,
    MySQL: mysqlIcon,
    H2: h2Icon,
  
    AWS: awsIcon,
    S3: s3Icon,
    Lambda: lambdaIcon,
    "Cloud Front": cloudFrontIcon,
    Docker: dockerIcon,
    "GitHub Actions": githubActionsIcon,
    "CI/CD": ciCdIcon,
  
    Postman: postmanIcon,
    Eclipse: eclipseIcon,
    "Visual Studio Code": vscodeIcon,
    Cursor:cursorIcon,
    Figma: figmaIcon,
    "MS Office": msOfficeIcon,
    Jira: jiraIcon,
    "Intellij IDEA": intellijIcon,
  };

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));


export default function TechStack() {
    const sectionRef = useRef(null);
    const viewportRef = useRef(null);
    const worldRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const viewportEl = viewportRef.current;
        const worldEl = worldRef.current;
        if (!sectionEl || !viewportEl || !worldEl) return;

        const getConfig = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const mobile = w < 640;

            return {
                starCount: mobile ? 90 : 150,
                zGap: mobile ? 520 : 800,
                camSpeed: mobile ? 2.0 : 2.5,
                internalLerp: 0.12,
                velLerp: 0.18,
                velScale: 0.00035,
                velClamp: mobile ? 1.0 : 1.25,
                tiltMul: mobile ? 18 : 45,
                shadowMul: mobile ? 18 : 40,

                radiusX: Math.min(w * (mobile ? 0.22 : 0.32), 520),
                radiusY: Math.min(h * (mobile ? 0.18 : 0.30), 420),

                baseFov: mobile ? 760 : 1000,
            };
        };

        let cleanup = () => { };
        let raf = 0;

        const build = () => {
            cleanup();
            const CONFIG = getConfig();

            worldEl.innerHTML = "";

            const items = [];
            let idx = 0;
            const totalCount = SECTIONS.reduce((acc, s) => acc + 1 + s.techs.length, 0);

            const pushText = (label) => {
                const el = document.createElement("div");
                el.className = "hs-item";
                const txt = document.createElement("div");
                txt.className = "hs-big-text";
                txt.innerText = label;
                el.appendChild(txt);
                worldEl.appendChild(el);
                items.push({ el, type: "text", x: 0, y: 0, rot: 0, baseZ: -idx * CONFIG.zGap });
                idx++;
            };

            const pushCard = (domain, tech) => {
                const el = document.createElement("div");
                el.className = "hs-item";

                const card = document.createElement("div");
                card.className = "hs-card";

                const randId = Math.floor(Math.random() * 9999);
                const iconSrc = TECH_ICONS[tech];

                card.innerHTML = `
                        <div class="hs-card-header">
                            <span class="hs-card-id">ID-${randId}</span>
                            <div class="hs-dot"></div>
                        </div>
                        <h2>${tech}</h2>
                        <div class="hs-card-meta">DOMAIN: ${domain}</div>
                        ${iconSrc ? `<img class="hs-tech-icon" src="${iconSrc}" alt="${tech} icon" loading="lazy" />` : ""}
                        <div class="hs-card-footer">
                            <span>GRID: ${Math.floor(Math.random() * 10)}x${Math.floor(Math.random() * 10)}</span>
                            <span>DATA_SIZE: ${(Math.random() * 100).toFixed(1)}MB</span>
                        </div>
                        <div class="hs-card-ghost">0${idx}</div>
        `;

                el.appendChild(card);
                worldEl.appendChild(el);

                const angle = (idx / totalCount) * Math.PI * 6;
                const x = Math.cos(angle) * CONFIG.radiusX;
                const y = Math.sin(angle) * CONFIG.radiusY;
                const rot = (Math.random() - 0.5) * 30;

                items.push({ el, type: "card", x, y, rot, baseZ: -idx * CONFIG.zGap });
                idx++;
            };

            SECTIONS.forEach((s) => {
                pushText(s.label);
                s.techs.forEach((t) => pushCard(s.label, t));
            });

            const totalDepth = Math.max(0, (idx - 1) * CONFIG.zGap);
            const scrollRangePx = Math.max(1, totalDepth / CONFIG.camSpeed);

            for (let i = 0; i < CONFIG.starCount; i++) {
                const el = document.createElement("div");
                el.className = "hs-star";
                worldEl.appendChild(el);
                items.push({
                    el,
                    type: "star",
                    x: (Math.random() - 0.5) * 2600,
                    y: (Math.random() - 0.5) * 2600,
                    baseZ: -Math.random() * totalDepth,
                });
            }

            const internal = { value: 0, target: 0 };
            const vel = { v: 0, target: 0 };
            const mouse = { x: 0, y: 0 };

            const onPointerMove = (e) => {
                mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
                mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
            };
            window.addEventListener("pointermove", onPointerMove, { passive: true });

            const smoother = ScrollSmoother.get();
            const scrollerEl = smoother ? smoother.wrapper() : undefined;

            const st = ScrollTrigger.create({
                trigger: sectionEl,
                scroller: scrollerEl,
                start: "top top",
                end: () => `+=${scrollRangePx}`,
                pin: true,
                scrub: true,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    internal.target = self.progress * scrollRangePx;
                    const v = self.getVelocity() * CONFIG.velScale;
                    vel.target = clamp(v, -CONFIG.velClamp, CONFIG.velClamp);
                },
            });

            const render = () => {
                internal.value += (internal.target - internal.value) * CONFIG.internalLerp;
                vel.v += (vel.target - vel.v) * CONFIG.velLerp;

                const cameraZ = internal.value * CONFIG.camSpeed;

                const tiltX = mouse.y * 5 - vel.v * CONFIG.tiltMul;
                const tiltY = mouse.x * 5;

                worldEl.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

                const fov = CONFIG.baseFov - Math.min(Math.abs(vel.v) * 220, 520);
                viewportEl.style.perspective = `${fov}px`;

                items.forEach((item) => {
                    const vizZ = item.baseZ + cameraZ;

                    let alpha = 1;
                    if (vizZ < -3000) alpha = 0;
                    else if (vizZ < -2000) alpha = (vizZ + 3000) / 1000;
                    if (vizZ > 100 && item.type !== "star") alpha = 1 - (vizZ - 100) / 400;

                    alpha = clamp(alpha, 0, 1);
                    item.el.style.opacity = alpha;
                    if (alpha <= 0) return;

                    let trans = `translate3d(${item.x || 0}px, ${item.y || 0}px, ${vizZ}px)`;

                    if (item.type === "star") {
                        const stretch = Math.max(1, Math.min(1 + Math.abs(vel.v) * 18, 10));
                        trans += ` scale3d(1, 1, ${stretch})`;
                    } else if (item.type === "text") {
                        trans += ` rotateZ(${item.rot || 0}deg)`;
                        if (Math.abs(vel.v) > 0.02) {
                            const offset = clamp(vel.v * CONFIG.shadowMul, -40, 40);
                            item.el.style.textShadow = `${offset}px 0 var(--hs-accent), ${-offset}px 0 #ffffff`;
                        } else {
                            item.el.style.textShadow = "none";
                        }
                    } else {
                        const t = gsap.ticker.time;
                        const float = Math.sin(t + (item.x || 0)) * 10;
                        trans += ` rotateZ(${item.rot || 0}deg) rotateY(${float}deg)`;
                    }

                    item.el.style.transform = trans;
                });
            };

            gsap.ticker.add(render);

            raf = requestAnimationFrame(() => ScrollTrigger.refresh());

            cleanup = () => {
                cancelAnimationFrame(raf);
                gsap.ticker.remove(render);
                window.removeEventListener("pointermove", onPointerMove);
                st.kill();
                worldEl.innerHTML = "";
            };
        };

        build();

        const onResize = () => build();
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            cleanup();
        };
    }, []);

    return (
        <section ref={sectionRef} className="hs-section" id="skills">

            <div className="hs-header">
                <p className="hs-kicker">03. TECH STACK</p>
                <h2 className="hs-title">TECHNICAL EXPERTISE</h2>
                <p className="hs-desc">A curated set of technologies I use to ship fast, scalable products—clean UI, solid backend, reliable cloud,
                    and automation.</p>
            </div>
            <div ref={viewportRef} className="hs-viewport">
                <div ref={worldRef} className="hs-world" />
            </div>
        </section>
    );
}




