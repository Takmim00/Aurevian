import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";
    };

    const handleMouseOver = (e) => {
      if (!cursorRef.current) return;

      const projectEl = e.target.closest("[data-cursor]");
      const normalHoverEl = e.target.closest("button, a");

      if (projectEl) {
        cursorRef.current.classList.add("cursor-active", "cursor-project");
        cursorRef.current.setAttribute(
          "data-text",
          projectEl.getAttribute("data-cursor") || "View Now"
        );
        return;
      }

      if (normalHoverEl) {
        cursorRef.current.classList.add("cursor-active");
      }
    };

    const handleMouseOut = (e) => {
      if (!cursorRef.current) return;

      const toEl = e.relatedTarget;

      const stillInsideProject = toEl?.closest?.("[data-cursor]");
      const stillInsideNormal = toEl?.closest?.("button, a");

      if (stillInsideProject) return;

      cursorRef.current.classList.remove("cursor-project");
      cursorRef.current.removeAttribute("data-text");

      if (!stillInsideNormal) {
        cursorRef.current.classList.remove("cursor-active");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
}