"use client";
import "../css/floatingToogle.css";
import { useEffect, useState } from "react";
import type { FloatingToggleConfig } from "../../../types";
import { DEFAULT_SECTION_IDS } from "../../../constants";

export interface FloatingToggleProps extends Partial<FloatingToggleConfig> {
  onToggle?: (value: boolean) => void;
}

export default function FloatingToggle({
  onToggle,
  sectionId = DEFAULT_SECTION_IDS.ABOUT,
  threshold = 0.3,
  defaultChecked = true,
  position,
}: FloatingToggleProps) {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    const section = document.querySelector(`#${sectionId}`);

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );

    section && observer.observe(section);
    return () => observer.disconnect();
  }, [sectionId, threshold]);

  const handleToggle = () => {
    const newState = !checked;
    setChecked(newState);
    console.log("Toggle State:", newState);
    onToggle?.(newState); // safe call
  };

  const containerStyle: React.CSSProperties = position
    ? {
        bottom: position.bottom,
        right: position.right,
      }
    : {};

  return (
    <div
      className={`floating-toggle-container ${
        visible ? "visible" : "hiddenToggle"
      }`}
      style={containerStyle}
    >
      <label className="toggle-wrapper">
        <input
          type="checkbox"
          className="toggle-input"
          checked={checked}
          onChange={handleToggle}
          aria-label="Toggle gravity"
        />

        <div className="toggle-bg"></div>
        <span className="toggle-knob"></span>
      </label>
    </div>
  );
}
