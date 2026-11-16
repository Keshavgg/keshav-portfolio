import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface HelloPreloaderProps {
  onTriggerHero?: () => void;
  onComplete: () => void;
}

const GREETINGS = [
  "안녕하세요",
  "Привет",
  "שלום",
  "Olá",
  "Bonjour",
  "Ciao",
  "やあ",
  "Hallo",
  "नमस्ते",
  "Hola",
  "你好",
  "مرحبا",
  "Γειά σου",
  "สวัสดี",
  "Merhaba",
  "Hej",
  "Cześć",
  "Xin chào",
  "হ্যালো",
  "வணக்கம்",
  "Hello"
];

export const HelloPreloader: React.FC<HelloPreloaderProps> = ({ onTriggerHero, onComplete }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const hasTriggeredExit = useRef(false);

  // Lock scroll during preloader
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Rapid multilingual greeting text cycle (exact Ashmit fast rhythm)
  useEffect(() => {
    if (index === GREETINGS.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 220 : 95);

    return () => clearTimeout(timeout);
  }, [index]);

  // Liquid SVG wave exit when reaching "Hello"
  useEffect(() => {
    if (index !== GREETINGS.length - 1 || hasTriggeredExit.current) return;
    hasTriggeredExit.current = true;

    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      // 1. Text fades slightly upwards
      if (contentRef.current) {
        tl.to(contentRef.current, {
          opacity: 0,
          y: -25,
          duration: 0.3,
          ease: "power2.in"
        });
      }

      // 2. Liquid curve wave animation
      if (curvePathRef.current) {
        tl.to(
          curvePathRef.current,
          {
            attr: { d: "M0 0 Q500 160 1000 0 L1000 0 L0 0 Z" },
            duration: 0.4,
            ease: "power2.in"
          },
          "-=0.1"
        );
        tl.to(
          curvePathRef.current,
          {
            attr: { d: "M0 0 Q500 0 1000 0 L1000 0 L0 0 Z" },
            duration: 0.45,
            ease: "power2.out"
          },
          "+=0.05"
        );
      }

      // 3. Whole preloader curtain slides up
      if (containerRef.current) {
        tl.to(
          containerRef.current,
          {
            yPercent: -120,
            duration: 0.85,
            ease: "power4.inOut"
          },
          "-=0.75"
        );
      }

      // 4. Trigger hero animation WHILE the liquid curtain is lifting! (Exact Ashmit timing)
      tl.add(() => {
        if (typeof onTriggerHero === 'function') {
          onTriggerHero();
        }
      }, "-=0.6");

    }, 320);

    return () => clearTimeout(timeout);
  }, [index, onTriggerHero, onComplete]);

  return (
    <div
      ref={containerRef}
      className="hello-preloader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        zIndex: 9999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        pointerEvents: 'auto',
        userSelect: 'none',
      }}
    >
      <div
        ref={contentRef}
        className="hello-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '18px',
          zIndex: 2,
        }}
      >
        <span
          className="hello-dot"
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 16px rgba(255, 255, 255, 0.95)',
            flexShrink: 0,
          }}
        />
        <h1
          className="hello-text font-condensed"
          style={{
            fontSize: '58px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.5px',
            margin: 0,
            textAlign: 'center',
            minWidth: '220px',
            textShadow: '0 0 25px rgba(255, 255, 255, 0.25)',
          }}
        >
          {GREETINGS[index]}
        </h1>
      </div>

      <svg
        className="hello-curve"
        viewBox="0 0 1000 160"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          height: '160px',
          pointerEvents: 'none',
        }}
      >
        <path
          ref={curvePathRef}
          d="M0 0 Q500 0 1000 0 L1000 0 L0 0 Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
};
