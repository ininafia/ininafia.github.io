import { useState, useCallback } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useScrollPosition, useActiveSection } from "../hooks/useScrollEffects";

const navItems = [
  { id: "projects", label: "WORK" },
  { id: "skills", label: "WHAT I CAN DO" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "trainings", label: "TRAININGS" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { scrolled } = useScrollPosition();
  const activeSection = useActiveSection(["home", ...navItems.map((n) => n.id)]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback((id: string) => {
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 75;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Navigasi utama">
      <div className="navbar-inner">
        {/* Brand / Logo (matching reference: icon badge + uppercase tracked name) */}
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          aria-label="Kembali ke beranda"
        >
          <div className="nav-brand-badge">
            <span className="brand-monogram">NM</span>
          </div>
          <span className="nav-brand-name">NAFIATUL</span>
        </a>

        {/* Desktop nav links */}
        <ul className="nav-links" role="menubar">
          {navItems
            .filter((item) => item.id !== "contact")
            .map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} role="none" className="nav-item-wrap">
                  <a
                    href={`#${item.id}`}
                    role="menuitem"
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="nav-active-bar"
                        layoutId="activeNavUnderline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
        </ul>

        {/* Actions (Theme toggle + Pill Hire Me CTA + Mobile toggle) */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Beralih ke mode ${theme === "light" ? "gelap" : "terang"}`}
            title={`Mode ${theme === "light" ? "Gelap" : "Terang"}`}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Hire Me
          </a>

          {/* Hamburger (mobile) */}
          <button
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu navigasi"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            role="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#home"
              role="menuitem"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
            >
              HOME
            </a>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                role="menuitem"
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
