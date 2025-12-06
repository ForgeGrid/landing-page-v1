import React, { useState, useMemo } from "react";
import styles from "../css/NavBar.module.css";
import ForgeGridLogo from "../../assets/ForgeGrid.svg";
import LinkedInIcon from "../../assets/linkedin.png";
import EmailIcon from "../../assets/email.png";
import DiscordIcon from "../../assets/discord.png";
import type { NavItem, SocialLink } from "../../types";
import { DEFAULT_NAV_ITEMS, DEFAULT_SOCIAL_LINKS } from "../../constants";

export interface NavBarProps {
  logo?: {
    src: string;
    alt: string;
    text?: string;
  };
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  logo = {
    src: ForgeGridLogo,
    alt: "ForgeGrid Logo",
    text: "ForgeGrid",
  },
  navItems = DEFAULT_NAV_ITEMS,
  socialLinks,
  className,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Default social links with icons
  const defaultSocialLinksWithIcons: SocialLink[] = useMemo(
    () => [
      {
        ...DEFAULT_SOCIAL_LINKS[0],
        icon: LinkedInIcon,
      },
      {
        ...DEFAULT_SOCIAL_LINKS[1],
        icon: EmailIcon,
      },
      {
        ...DEFAULT_SOCIAL_LINKS[2],
        icon: DiscordIcon,
      },
    ],
    []
  );

  const finalSocialLinks = socialLinks || defaultSocialLinksWithIcons;

  return (
    <>
      <header className={`${styles.glassNavbar} ${className || ""}`}>
        <div className={styles.navInner}>
          {/* LEFT — LOGO */}
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <img src={logo.src} alt={logo.alt} />
            </div>
            {logo.text && <span className={styles.logoText}>{logo.text}</span>}
          </div>

          {/* Center — NAV ITEMS (DESKTOP ONLY) */}
          <nav className={`${styles.navCenter} ${styles.navMenu}`}>
            {navItems.map((item, index) => (
              <a
                key={`nav-${index}-${item.label}`}
                href={item.href}
                className={`${styles.navItem} ${styles.navLink}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.navRight}>
            {/* Social Links */}
            <div className={styles.socialRight}>
              {finalSocialLinks.map((social, index) => (
                <a
                  key={`social-${index}-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialCircle}
                  aria-label={social.label}
                >
                  <img src={social.icon} alt={social.label} className={styles.socialIcon} />
                </a>
              ))}
            </div>

            {/* HAMBURGER */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={`${styles.line} ${styles.line1}`} />
              <span className={`${styles.line} ${styles.line2}`} />
              <span className={`${styles.line} ${styles.line3}`} />
            </button>
          </div>
        </div>
      
      {/* MOBILE MODAL MENU */}
      {/* {menuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)}>
          <div
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.menuHeader}>
              <span className={styles.menuTitle}>Menu</span>
              <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <div className={styles.menuItems}>
              {items.map((item, index) => (
                <a key={index} href={item.href} className={styles.menuItem}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )} */}

      {menuOpen && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownMenu}>
            {/* Menu items */}
            {navItems.map((item, index) => (
              <a
                key={`dropdown-${index}-${item.label}`}
                href={item.href}
                className={styles.dropdownItem}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className={styles.dropdownDivider}></div>

            {/* Social items */}
            <div className={styles.dropdownSocialsRow}>
              {finalSocialLinks.map((social, i) => (
                <a
                  key={`dropdown-social-${i}-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.socialCircle} ${styles.openSocialItem}`}
                  aria-label={social.label}
                >
                  <img src={social.icon} alt={social.label} className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      
    </header>
    </>
  );
};

export default NavBar;
