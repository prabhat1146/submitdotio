import React from "react";
import { useThemeContext } from "../context/ThemeContextProvider";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useThemeContext();
  const isLight = theme === "light";

  return (
    <footer
      className={`${
        isLight ? "bg-background text-primary" : "bg-background-primary text-primary"
      } py-12 border-t ${isLight ? "border-gray-200" : "border-gray-700"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Info */}
        <div>
          <Link to="/" className="text-2xl font-bold text-accent">
            SubmitDotIO
          </Link>
          <p className="mt-4 text-secondary text-sm leading-relaxed">
            SubmitDotIO is a modern platform for managing forms and workflow automation — helping you collect, analyze, and act on data with ease.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li><Link to="/features" className="hover:text-accent">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-accent">Pricing</Link></li>
            <li><Link to="/demo" className="hover:text-accent">Request a Demo</Link></li>
            <li><Link to="/integrations" className="hover:text-accent">Integrations</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li><Link to="/help" className="hover:text-accent">Help Center</Link></li>
            <li><Link to="/docs" className="hover:text-accent">Documentation</Link></li>
            <li><Link to="/status" className="hover:text-accent">System Status</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li><Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-accent">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-accent">Disclaimer</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-accent">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-secondary px-4 sm:px-6 lg:px-8">
        <p>&copy; 2025 SubmitDotIO. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://github.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://facebook.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
