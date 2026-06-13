import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react"
import React, {useRef, useState} from "react";
import { navLinks } from "../../constants/navbarConstants";
import "./NavBar.scss";
import homeIcon from "../../assets/images/common/home2.svg";
import logo from "../../assets/images/common/ar-logo.png";
import resumePdf from "../../assets/files/Aditya Ranjan Updated Resume.pdf";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const NavBar = () => {
  const panelRef = useRef(null);
  const[open, setOpen] = useState(false);
  useGSAP(()=>{
    if(!panelRef.current) return;
    gsap.set(panelRef.current, {
        height:0,
        opacity:0,
        y:-8,
        pointerEvents:"none"
    })
  },[])

  const animatePanel = (next)=>{
    const panel = panelRef.current;
    if(!panel) return;

    gsap.to(panel, {
        height:next ? "auto" :0,
        opacity: next ? 1: 0,
        y: next ? 1 : 0,
        duration: 0.25,
        ease: "power2.out",
        onStart:()=>gsap.set(panel, {pointerEvents: "auto"}),
        onComplete:()=>{
            if(!next) gsap.set(panel, {pointerEvents: "none"})
        },
    });
  };

  const toggle = ()=>{
    setOpen((prev)=>{
        const next = !prev;
        animatePanel(next);
        return next;
    });
  };

  const goTo = (id)=>(e)=>{
    e.preventDefault();

    const el = document.getElementById(id);
    if(!el) return;

    if(open) {
        setOpen(false);
        animatePanel(false);

    }

    ScrollTrigger.refresh();
    gsap.to(window, {
        duration:1,
        ease: "power3.out",
        scrollTo:{y:el, offsetY:80},
    });
  };

  return(
        <>
          <a
            href="#home"
            className="site-logo"
            onClick={goTo("home")}
            aria-label="Aditya Ranjan"
          >
            <img src={logo} alt="AR Logo" />
            {/* <span>RANJAN</span> */}
          </a>
      
          <nav className="navbar">
            <div className="navbar-wrapper">
              <a
                className="nav-home"
                href="#home"
                onClick={goTo("home")}
                aria-label="Home"
              >
                <img src={homeIcon} alt="" />
              </a>
      
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} onClick={goTo(link.id)}>
                      {link.label}
                    </a>
                  </li>
                ))}
      
                <li>
                  <a
                    href={resumePdf}
                    className="download-button"
                    download="Aditya Ranjan Updated Resume.pdf"
                  >
                    RESUME
                  </a>
                </li>
              </ul>
      
              <button
                type="button"
                className={`nav-burger ${open ? "is-open" : ""}`}
                aria-label="Toggle Menu"
                aria-expanded={open}
                aria-controls="nav-panel"
                onClick={toggle}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
      
            <div ref={panelRef} id="nav-panel" className="nav-panel">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={goTo(link.id)}
                >
                  {link.label}
                </a>
              ))}
      
              <a
                href="/assets/files/Aditya Ranjan Updated Resume.pdf"
                className="download-button"
                download="Aditya Ranjan Updated Resume.pdf"
              >
                RESUME
              </a>
            </div>
          </nav>
        </>
      );
};

export default NavBar
