"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OrbitWords() {
  const svgRef = useRef(null);
  const animRef = useRef([]);

  const words = [
    "Full-Stack",
    "Frontend",
    "Creative",
    "Designer",
    "Builder",
    "Digital",
    "Modern",
    "Shipped",
  ];

  const orbits = [
    { r: 775, id: "o1", offset: "30%", tl: 300 },
    { r: 700, id: "o2", offset: "31%", tl: 280 },
    { r: 625, id: "o3", offset: "33%", tl: 240 },
    { r: 550, id: "o4", offset: "32%", tl: 260 },
    { r: 475, id: "o5", offset: "30%", tl: 290 },
    { r: 400, id: "o6", offset: "31%", tl: 200 },
    { r: 325, id: "o7", offset: "33%", tl: 210 },
    { r: 250, id: "o8", offset: "32%", tl: 190 },
  ];

  const targetTextLengths = [4000, 3500, 3250, 3000, 2500, 2000, 1500, 1250];
  const maxOrbitRadius = 775;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const textPaths = svg.querySelectorAll("textPath");
    const orbitTexts = svg.querySelectorAll(".orbit-text");

    gsap.set(orbitTexts, { opacity: 0 });
    const orbitTextsReversed = Array.from(orbitTexts).reverse();
    gsap.to(orbitTextsReversed, {
      opacity: 1,
      duration: 0.75,
      stagger: 0.125,
      ease: "power1.out",
    });

    textPaths.forEach((tp, i) => {
      const startTL = parseFloat(tp.getAttribute("textLength"));
      const startOffset = parseFloat(tp.getAttribute("startOffset"));
      const r = orbits[i].r;
      const duration =
        1 + (r / maxOrbitRadius) * (1.25 - 1);
      const delay = (textPaths.length - 1 - i) * 0.1;
      const pathLength = 2 * Math.PI * r * 3;
      const tlIncrease = targetTextLengths[i] - startTL;
      const offsetAdj = (tlIncrease / 2 / pathLength) * 100;
      const targetOffset = startOffset - offsetAdj;

      const tween = gsap.to(tp, {
        attr: {
          textLength: targetTextLengths[i],
          startOffset: targetOffset + "%",
        },
        duration,
        delay,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 0,
      });
      animRef.current.push(tween);
    });

    let rotation = 0;
    function spin() {
      const dir = Math.random() < 0.5 ? 1 : -1;
      rotation += 25 * dir;
      const t = gsap.to(svg, {
        rotation,
        duration: 2,
        ease: "power2.inOut",
        onComplete: spin,
      });
      animRef.current.push(t);
    }
    spin();

    return () => {
      animRef.current.forEach((t) => t.kill());
      animRef.current = [];
    };
  }, []);

  function makePath(r) {
    return `M 500,${500 - r} A ${r},${r} 0 0,1 500,${500 + r} A ${r},${r} 0 0,1 500,${500 - r} A ${r},${r} 0 0,1 500,${500 + r} A ${r},${r} 0 0,1 500,${500 - r} A ${r},${r} 0 0,1 500,${500 + r} A ${r},${r} 0 0,1 499.99,${500 - r}`;
  }

  return (
    <div style={{ width: "clamp(260px,32vw,380px)", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg
        ref={svgRef}
        viewBox="-425 -425 1850 1850"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        {orbits.map((o, i) => (
          <path key={o.id} id={o.id} d={makePath(o.r)} fill="none" />
        ))}

        {orbits.map((o, i) => (
          <text key={`t${i}`} className="orbit-text" style={{ fill: "#1a1814", textTransform: "uppercase", fontSize: "2.75rem", fontWeight: 500, fontFamily: "monospace" }}>
            <textPath href={`#${o.id}`} startOffset={o.offset} textLength={o.tl}>
              {words[i]}
            </textPath>
          </text>
        ))}
      </svg>
    </div>
  );
}
