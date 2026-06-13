import { useEffect, useRef } from "react";
import "./Warp.scss";

export default function Warp() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    resize();

    let xMod = 0;
    let yMod = 0;
    let warpSpeed = false;

    const setWarp = (value) => {
      warpSpeed = value;
    };

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.c = 0;
      }

      updateColor() {
        this.c = Math.min(255, this.c + 5);
      }

      updatePos() {
        const speedMult = warpSpeed ? 0.028 : 0.02;

        const cx = w / 2;
        const cy = h / 2;

        this.x += xMod + (this.x - cx) * speedMult;
        this.y += yMod + (this.y - cy) * speedMult;

        this.updateColor();

        if (
          this.x < 0 ||
          this.x > w ||
          this.y < 0 ||
          this.y > h
        ) {
          this.reset();
        }
      }
    }

    const STAR_COUNT = 300;
    const stars = Array.from(
      { length: STAR_COUNT },
      () => new Star()
    );

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, w, h);

      stars.forEach((star) => {
        const c = star.c;

        if (warpSpeed) {
          ctx.fillStyle = `rgb(${c}, ${Math.floor(
            c * 0.45
          )}, 0)`;
        } else {
          ctx.fillStyle = `rgb(${c}, ${c}, ${c})`;
        }

        const size = Math.max(1, c / 128);

        ctx.fillRect(
          star.x,
          star.y,
          size,
          size
        );

        star.updatePos();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onKeyDown = (e) => {
      switch (e.keyCode) {
        case 32: // Space
          setWarp(true);
          break;

        case 37: // Left
          xMod = 0.5;
          break;

        case 38: // Up
          yMod = 0.5;
          break;

        case 39: // Right
          xMod = -0.5;
          break;

        case 40: // Down
          yMod = -0.5;
          break;

        default:
          return;
      }

      e.preventDefault();
    };

    const onKeyUp = (e) => {
      switch (e.keyCode) {
        case 32:
          setWarp(false);
          break;

        case 37:
        case 39:
          xMod = 0;
          break;

        case 38:
        case 40:
          yMod = 0;
          break;

        default:
          return;
      }

      e.preventDefault();
    };

    const onMouseDown = (e) => {
      if (e.button === 0) {
        setWarp(true);
      }
    };

    const onMouseUp = (e) => {
      if (e.button === 0) {
        setWarp(false);
      }
    };

    const onTouchStart = () => {
      setWarp(true);
    };

    const onTouchEnd = () => {
      setWarp(false);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart);
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(rafRef.current);

      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);

      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="warp-wrap">
      <canvas
        ref={canvasRef}
        className="warp-canvas"
      />
    </div>
  );
}