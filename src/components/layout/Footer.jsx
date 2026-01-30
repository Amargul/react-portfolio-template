import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { siteConfig } from "../../config/site.config";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const name = siteConfig.personal?.name ?? '';
  const nameParts = name.split(' ');
  const nameFirst = nameParts[0] ?? '';
  const nameRest = nameParts.slice(1).join(' ');

  return (
    <footer className="bg-light-surface dark:bg-dark-surface pt-16 pb-8 border-t border-light-borderLight dark:border-dark-borderLight mt-auto">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="text-2xl font-bold font-heading text-light-primary dark:text-dark-primary tracking-tight mb-4 block"
            >
              {nameFirst}<span className="text-light-textPrimary dark:text-dark-textPrimary">{nameRest}</span>
            </Link>
            <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm leading-relaxed mb-6">
              {siteConfig.personal?.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${siteConfig.contact?.email}`}
                className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors text-xl"
              >
                <FaEnvelope />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-light-textSecondary dark:text-dark-textSecondary">
              <li>
                <Link
                  to="/about"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-light-textSecondary dark:text-dark-textSecondary">
              <li>Web Application Development</li>
              <li>Headless E-commerce</li>
              <li>Performance Optimization</li>
              <li>UI/UX Engineering</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 text-xs text-light-textSecondary dark:text-dark-textSecondary">
              <span className="px-3 py-1 bg-light-surface dark:bg-dark-surface border border-light-borderLight dark:border-dark-borderLight rounded-full">
                ReactJS
              </span>
              <span className="px-3 py-1 bg-light-surface dark:bg-dark-surface border border-light-borderLight dark:border-dark-borderLight rounded-full">
                remix
              </span>
              <span className="px-3 py-1 bg-light-surface dark:bg-dark-surface border border-light-borderLight dark:border-dark-borderLight rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-light-surface dark:bg-dark-surface border border-light-borderLight dark:border-dark-borderLight rounded-full">
                Redux
              </span>
              <span className="px-3 py-1 bg-light-surface dark:bg-dark-surface border border-light-borderLight dark:border-dark-borderLight rounded-full">
                Tailwind
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-light-borderLight dark:border-dark-borderLight pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
            © {currentYear} {siteConfig.personal?.name ?? ''}. Made with ❤️ • All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-light-textSecondary dark:text-dark-textSecondary">
            <span className="text-light-textSecondary dark:text-dark-textSecondary">{siteConfig.contact?.location}</span>
            {showScroll && (
              <button
                onClick={scrollToTop}
                className="text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent transition-colors flex items-center gap-1 font-semibold"
                aria-label="Back to top"
              >
                Back to top <FaArrowUp size={12} />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
