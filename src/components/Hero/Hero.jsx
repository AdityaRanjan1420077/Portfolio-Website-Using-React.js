import React , {useRef} from "react"; 
import "./Hero.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
// import { name } from "../../constants/landingPageConstants";
// import { tagline } from "../../constants/aboutmeConstants";
// import { scrollIndicator } from "../../constants/landingPageConstants";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import scrollDown from "../../assets/images/common/scroll-down.png";
import {
    name,
    tagline,
    scrollIndicator
  } from "../../constants/landingPageConstants";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const handleScrollDown = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: "#aboutMe",
      ease: "power2.inOut",
    });
  };
  

const Hero = () => {
  const heroRef = useRef(null);
  const zoomRef = useRef(null);
  const stRef = useRef(null);

  useGSAP(()=>{
    const heroE1 = heroRef.current;
    const zoomE1 = zoomRef.current;

    if(!heroE1 || !zoomE1) return;

    const mm = gsap.matchMedia();

    mm.add(
        {
            mobile:"(max-width: 767px)",
            tablet: "(min-width: 768px) and (max-width: 1023px)",
            desktop: "(min-width: 1024px)",
            reduce: "(prefers-reduced-motion: reduce)",
            short: "(max-height: 660px)",
        },
        (ctx)=>{
            const{mobile, tablet, desktop, reduce, short} = ctx.conditions;
            if(reduce) {
                gsap.set(zoomE1, {clearProps:"transform, opacity"});
                return;
            }

            const scaleTo = mobile ? 6: tablet ? 8 : 10;
            const endDist = short ? "+=55%" : mobile ? "+=70%" : "+=80%";

            const tl= gsap.timeline({
                defaults:{ease:'none'},
                scrollTrigger:{
                    trigger:heroE1,
                    start:"top top",
                    end: endDist,
                    scrub:1.2,
                    pin:true,
                    anticipatePin:1,
                    invalidateOnRefresh:true,
                    id:"heroPin"
                },
            });
            gsap.set(zoomE1, {scale:1, opacity: 1, force3D: true});
            tl.to(zoomE1, {scale:scaleTo, opacity:0});

            stRef.current = tl.scrollTrigger;

            return()=>{
                tl.scrollTrigger.kill();
                tl.kill();
            };
        }
    );
    return () => mm.revert();
  }, [])
  return(
    <section className="hero" id="home" ref={heroRef}>
        <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-zoom" ref={zoomRef}>
                    <h1 className="hero-title">{name}</h1>
                    <div className="hero-sub">
                        <span className="line"></span>
                        <span className="tag-line">{tagline}</span>
                        <div className="line"></div>
                    </div>
                    <div className="scroll-down-indicator" onClick={handleScrollDown}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleScrollDown();
    }
  }} >
                        <img src={scrollDown} alt=""/>
                        <p>{scrollIndicator}</p>
                    </div>
                </div>
            </div>
        
    </section>
  );
};

export default Hero
