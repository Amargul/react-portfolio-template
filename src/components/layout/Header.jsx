import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import ThemeToggle from "../ui/ThemeToggle";
import { siteConfig } from "../../config/site.config";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);
  const name = siteConfig.personal?.name ?? '';
  const nameParts = name.split(' ');
  const nameFirst = nameParts[0] ?? '';
  const nameRest = nameParts.slice(1).join(' ');

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-md shadow-soft py-3 border-b border-light-borderLight/10 dark:border-dark-borderLight/10"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold font-heading text-light-primary dark:text-dark-primary tracking-tight"
          onClick={closeMenu}
        >
          {nameFirst}<span className="text-light-textPrimary dark:text-dark-textPrimary">{nameRest}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-light-primary dark:hover:text-dark-primary ${location.pathname === link.path
                  ? "text-light-primary dark:text-dark-primary"
                  : "text-light-textSecondary dark:text-dark-textSecondary"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Links */}
          <div className="flex items-center gap-3 pl-4 border-l border-light-borderLight/20 dark:border-dark-borderLight/20">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <div className="pl-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Resume & CTA */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2.5 text-light-secondary dark:text-dark-secondary border border-light-secondary/50 dark:border-dark-secondary/50 text-sm font-semibold rounded-lg hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 transition-colors flex items-center gap-2"
            >
              <FaDownload size={14} />
              Resume
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-light-primary dark:bg-dark-primary text-white text-sm font-semibold rounded-lg hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 transition-colors shadow-glow"
            >
              Hire Me
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-light-textPrimary dark:text-dark-textPrimary text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-light-surface dark:bg-dark-surface shadow-lg py-6 px-4 flex flex-col gap-4 md:hidden border-t border-light-borderLight/20 dark:border-dark-borderLight/20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-light-primary dark:hover:text-dark-primary ${location.pathname === link.path
                    ? "text-light-primary dark:text-dark-primary"
                    : "text-light-textSecondary dark:text-dark-textSecondary"
                  }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center gap-3 py-3 border-y border-light-borderLight/20 dark:border-dark-borderLight/20">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            {/* Mobile Resume & CTA */}
            <a
              href="/resume.pdf"
              download
              className="w-full text-center px-5 py-3 text-light-secondary dark:text-dark-secondary border border-light-secondary/50 dark:border-dark-secondary/50 font-semibold rounded-lg hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 flex items-center justify-center gap-2"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
            <Link
              to="/contact"
              className="mt-2 w-full text-center px-5 py-3 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-lg hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 shadow-glow"
              onClick={closeMenu}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
