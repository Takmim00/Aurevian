import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";
    };

    const addActive = () => {
      cursorRef.current.classList.add("cursor-active");
    };

    const removeActive = () => {
      cursorRef.current.classList.remove("cursor-active");
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverEls = document.querySelectorAll("button, a");

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", addActive);
        el.removeEventListener("mouseleave", removeActive);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
}