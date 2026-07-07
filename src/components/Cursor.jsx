"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      if (!dotRef.current || !ringRef.current) return;

      const { clientX, clientY } = e;
      posRef.current = { x: clientX, y: clientY };

      dotRef.current.style.left = clientX + "px";
      dotRef.current.style.top = clientY + "px";

      ringRef.current.style.left = clientX + "px";
      ringRef.current.style.top = clientY + "px";

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      dotRef.current?.classList.add("cursor-click");
      ringRef.current?.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      dotRef.current?.classList.remove("cursor-click");
      ringRef.current?.classList.remove("cursor-click");
    };

    const checkElementsUnderCursor = (x, y) => {
      if (!dotRef.current || !ringRef.current) return;

      const elements = document.elementsFromPoint(x, y);

      let projectEl = null;
      let normalHoverEl = null;

      for (const el of elements) {
        if (!projectEl) projectEl = el.closest("[data-cursor]");
        if (!normalHoverEl) normalHoverEl = el.closest("button, a, .cursor-pointer");
        if (projectEl && normalHoverEl) break;
      }

      if (projectEl) {
        dotRef.current.classList.add("cursor-hover", "cursor-project");
        ringRef.current.classList.add("cursor-hover", "cursor-project");
        ringRef.current.setAttribute(
          "data-text",
          projectEl.getAttribute("data-cursor") || "View Now"
        );
        return;
      }

      if (normalHoverEl) {
        dotRef.current.classList.remove("cursor-project");
        ringRef.current.classList.remove("cursor-project");
        ringRef.current.removeAttribute("data-text");
        dotRef.current.classList.add("cursor-hover");
        ringRef.current.classList.add("cursor-hover");
        return;
      }

      dotRef.current.classList.remove("cursor-project", "cursor-hover");
      ringRef.current.classList.remove("cursor-project", "cursor-hover");
      ringRef.current.removeAttribute("data-text");
    };

    const handleMouseOver = (e) => {
      if (!dotRef.current || !ringRef.current) return;

      const projectEl = e.target.closest("[data-cursor]");
      const normalHoverEl = e.target.closest("button, a, .cursor-pointer");

      if (projectEl) {
        dotRef.current.classList.add("cursor-hover", "cursor-project");
        ringRef.current.classList.add("cursor-hover", "cursor-project");
        ringRef.current.setAttribute(
          "data-text",
          projectEl.getAttribute("data-cursor") || "View Now"
        );
        return;
      }

      if (normalHoverEl) {
        dotRef.current.classList.add("cursor-hover");
        ringRef.current.classList.add("cursor-hover");
        return;
      }
    };

    const handleMouseOut = (e) => {
      if (!dotRef.current || !ringRef.current) return;

      const toEl = e.relatedTarget;

      const stillInsideProject = toEl?.closest?.("[data-cursor]");
      const stillInsideNormal = toEl?.closest?.("button, a, .cursor-pointer");

      if (stillInsideProject) return;

      dotRef.current.classList.remove("cursor-project");
      ringRef.current.classList.remove("cursor-project");
      ringRef.current.removeAttribute("data-text");

      if (!stillInsideNormal) {
        dotRef.current.classList.remove("cursor-hover");
        ringRef.current.classList.remove("cursor-hover");
      }
    };

    const handleScroll = () => {
      const { x, y } = posRef.current;
      checkElementsUnderCursor(x, y);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}