import React from "react";
import styles from "../../css/Hero.module.css";
import arrow from "../../../assets/arrow.png";
import type { HeroContent } from "../../../types";
import { DEFAULT_HERO_CONTENT, DEFAULT_SECTION_IDS } from "../../../constants";

export interface HeroProps {
  sectionId?: string;
  content?: HeroContent;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  sectionId = DEFAULT_SECTION_IDS.ABOUT,
  content = DEFAULT_HERO_CONTENT,
  className,
}) => {
  const handleScrollClick = () => {
    if (content.scrollButton?.targetId) {
      const targetSection = document.getElementById(content.scrollButton.targetId);
      targetSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`${styles.hero} ${className || ""}`} id={sectionId}>
      {/* Badge */}
      {content.badge && (
        <div className={styles.badge}>
          {content.badge.dot && <span className={styles.dot}></span>}
          {content.badge.newLabel && (
            <span className={styles.new}>{content.badge.newLabel}</span>
          )}{" "}
          {content.badge.label}
        </div>
      )}

      {/* Title */}
      <h1 className={styles.title}>{content.title}</h1>

      {/* Subtitle */}
      <p className={styles.subtitle}>{content.subtitle}</p>

      {/* Buttons */}
      {(content.primaryButton || content.secondaryButton) && (
        <div className={styles.buttonRow}>
          {content.primaryButton && (
            <a href={content.primaryButton.href} className={styles.primaryBtn}>
              {content.primaryButton.label}
            </a>
          )}
          {content.secondaryButton && (
            <a
              href={content.secondaryButton.href}
              className={styles.secondaryBtn}
            >
              {content.secondaryButton.label}
            </a>
          )}
        </div>
      )}

      {/* Scroll Button */}
      {content.scrollButton?.enabled && (
        <div className={styles.scrollDownWrapper}>
          <button
            className={styles.scrollDownBtn}
            onClick={handleScrollClick}
            aria-label="Scroll to next section"
          >
            <img
              src={arrow}
              alt="Scroll Down"
              className={styles.arrowIcon}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
