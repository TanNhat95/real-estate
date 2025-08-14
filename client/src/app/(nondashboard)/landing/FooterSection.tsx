import Link from "next/link";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

const socialLinks = [
  { icon: faFacebook, label: "Facebook", href: "#" },
  { icon: faInstagram, label: "Instagram", href: "#" },
  { icon: faTwitter, label: "Twitter", href: "#" },
  { icon: faLinkedin, label: "Linkedin", href: "#" },
  { icon: faYoutube, label: "Youtube", href: "#" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-4">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={social.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
          {policyLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
