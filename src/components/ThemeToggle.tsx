"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, toggleTheme, isTransitioning } = useTheme();

    const handleClick = () => {
        if (isTransitioning) return; // Prevent clicks during transition
        toggleTheme();
    };

    const isDark = theme === "dark";

    return (
        <button
            onClick={handleClick}
            className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-zinc-600 cursor-pointer overflow-hidden"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            type="button"
            disabled={isTransitioning}
        >
            {/* Sliding knob */}
            <motion.div
                className="absolute top-0.5 w-6 h-6 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-lg"
                initial={false}
                animate={{
                    x: isDark ? 28 : 2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.8
                }}
                style={{ left: 0 }}
            >
                {isDark ? (
                    <Moon size={12} className="text-black" />
                ) : (
                    <Sun size={12} className="text-white" />
                )}
            </motion.div>
        </button>
    );
}
