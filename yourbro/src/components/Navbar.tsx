"use client";
import Link from "next/link";
import { useState } from "react";
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Prices", href: "/pricing" },
  { name: "Profile", href: "/profile" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <FaDumbbell className="text-cyan-400" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
            YourBro
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-t border-gray-800">
          <div className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
