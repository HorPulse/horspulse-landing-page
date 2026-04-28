"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + "px";
        ringRef.current.style.top  = p.ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const grow = () => {
      dotRef.current!.style.width  = "20px";
      dotRef.current!.style.height = "20px";
      ringRef.current!.style.width  = "50px";
      ringRef.current!.style.height = "50px";
    };
    const shrink = () => {
      dotRef.current!.style.width  = "12px";
      dotRef.current!.style.height = "12px";
      ringRef.current!.style.width  = "36px";
      ringRef.current!.style.height = "36px";
    };
    const targets = "a,button,.svc-item,.project-card,.team-card,.testi-card,.c-logo";
    const els = document.querySelectorAll<HTMLElement>(targets);
    els.forEach((el) => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      els.forEach((el) => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-accent rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 opacity-60 transition-[width,height] duration-200"
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}