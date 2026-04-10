import { useEffect, useRef } from "react";

export default function Water3D() {
  const turbulenceRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      frame += 0.008;

      if (turbulenceRef.current) {
        turbulenceRef.current.setAttribute(
          "baseFrequency",
          `${0.01 + Math.sin(frame) * 0.002} ${0.015 + Math.cos(frame) * 0.002}`
        );
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* SVG filter */}
      <svg className="absolute w-0 h-0">
        <filter id="waterDistortion">
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency="0.01 0.015"
            numOctaves="2"
            seed="2"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="45"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Main image */}
      <div className="water-image-3d" />

      {/* Overlay for depth */}
      <div className="water-overlay-3d" />
    </div>
  );
}