"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton } from "@/components/auth/SignInButton";
import { ThemeToggle } from "../ThemeToggle";


export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:p-6 pointer-events-none">
        <motion.header
          className={`pointer-events-auto flex items-center justify-between gap-2 md:gap-6 px-3 py-2 md:px-6 md:py-3 rounded-full border transition-all duration-300 ${scrolled
            ? "bg-white/70 dark:bg-[#1D1D1D]/70 backdrop-blur-xl border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 w-full max-w-[95%] md:w-auto"
            : "bg-white/50 dark:bg-[#1D1D1D]/50 backdrop-blur-sm border-transparent w-full max-w-5xl"
            }`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 1. Logo (Left) */}
          <Link href="/" className="flex items-center gap-2 pr-1 md:pr-4">
            <div className="h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-bold text-lg shrink-0">
              N
            </div>
            {/* Show text on mobile but smaller */}
            <span className={`font-bold text-base md:text-lg tracking-tight text-black dark:text-white transition-opacity block`}>
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
          <div className="flex items-center gap-2 md:gap-3 pl-1 md:pl-4">
            {/* Theme Toggle */}
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>

            {/* Sign In Button */}
            <div className="pointer-events-auto">
              <div className="[&_button]:rounded-full [&_button]:px-3 [&_button]:md:px-5 [&_button]:py-2 [&_button]:md:py-2.5 [&_button]:text-xs [&_button]:md:text-sm [&_button]:font-semibold [&_button]:bg-black [&_button]:dark:bg-white [&_button]:text-white [&_button]:dark:text-black [&_button]:hover:scale-105 [&_button]:transition-transform">
                <SignInButton />
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </>
  );
}