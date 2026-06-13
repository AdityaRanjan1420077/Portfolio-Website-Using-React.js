import "./Cursor.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const dotRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(()=>{
        if(!dotRef.current || !glowRef.current) return;

        gsap.set([dotRef.current, glowRef.current], {
            xPercent:-50,
            yPercent:-50,
        });

        const moveDotX = gsap.quickTo(dotRef.current, "x", {
            duration:0.15,
            ease:"power3.out",
        });
        const moveDotY = gsap.quickTo(dotRef.current, "y", {
            duration:0.15,
            ease:"power3.out",
        });

        const moveGlowX = gsap.quickTo(glowRef.current, "x", {
            duration:0.8,
            ease:"power3.out",
        });
        const moveGlowY = gsap.quickTo(glowRef.current, "y", {
            duration:0.8,
            ease:"power3.out",
        });

        const handleMove = (e) =>{
            moveDotX(e.clientX);
            moveDotY(e.clientY);

            moveGlowX(e.clientX);
            moveGlowY(e.clientY);


            
    
        };
        window.addEventListener('mousemove', handleMove);
        return ()=>{
            window.addEventListener('mousemove', handleMove);
        };
    },[]);
    return (
        <>
            <div className="cursor-glow" ref={glowRef}></div>
            <div className="cursor-dot" ref={dotRef}></div>
        </>
    )
}