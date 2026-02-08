"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SignInButton } from "@/components/auth/SignInButton";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Method", href: "#method" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* This is the "Floating" container. 
        It sits fixed at the top but adds padding so the bar doesn't touch the edge.
      */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.header
          className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-full border transition-all duration-300 ${scrolled
            ? "bg-white/70 dark:bg-[#1D1D1D]/70 backdrop-blur-xl border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 w-auto"
            : "bg-white/50 dark:bg-[#1D1D1D]/50 backdrop-blur-sm border-transparent w-full max-w-5xl"
            }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 1. Logo (Left) */}
          <Link href="/" className="flex items-center gap-2 pr-4">
            <div className="h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-bold text-lg">
              N
            </div>
            {/* Hide text on scroll to keep it super pill-like? Optional. */}
            <span className={`font-bold text-lg tracking-tight text-black dark:text-white transition-opacity ${scrolled ? 'hidden md:block' : 'block'}`}>
              Notex AI
            </span>
          </Link>

          {/* 2. Navigation (Center - Pill Style) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-[#2a2a2a] hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 3. Actions (Right) */}
          <div className="flex items-center gap-3 pl-4">
            {/* Theme Toggle */}
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>

            {/* Sign In Button */}
            <div className="pointer-events-auto">
              <div className="[&_button]:rounded-full [&_button]:px-5 [&_button]:py-2.5 [&_button]:text-sm [&_button]:font-semibold [&_button]:bg-black [&_button]:dark:bg-white [&_button]:text-white [&_button]:dark:text-black [&_button]:hover:scale-105 [&_button]:transition-transform">
                <SignInButton />
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-black dark:text-white ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu (Full Screen Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#1D1D1D] pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-medium">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-900 dark:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}