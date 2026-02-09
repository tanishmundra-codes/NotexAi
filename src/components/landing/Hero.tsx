"use client";

import { useState, useEffect } from "react";
// Import standard icons for the buttons
import { BookOpen, Star } from "lucide-react";
import Link from "next/link";
import Image from "@/public/logo.png"

// Updated phrases to focus on PDF/Document interaction
const PHRASES = [
    "my biology textbook.pdf...",
    "the lecture slides from week 3...",
    "this 50-page research paper...",
    "my handwritten class notes...",
    "the chemistry syllabus...",
];

export default function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % PHRASES.length;
            const fullText = PHRASES[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-40 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">

                {/* Headline: Clear Value Prop (PDF -> Notes) */}
                <div className="flex flex-col items-center mb-8 animate-fade-in-up">
                    <img
                        className="w-16 h-16 rounded-2xl shadow-sm mt-1 dark:brightness-100 dark:invert"
                        src="logo.png"
                        alt="Notex AI Logo"
                    />
                    <h1 className="max-w-xs sm:max-w-xl md:max-w-2xl text-4xl sm:text-5xl md:text-6xl font-black font-cal-sans tracking-tighter text-zinc-900 dark:text-zinc-100 mt-1">
                        PDF Summarizer
                    </h1>
                </div>

                {/* Subtext: Emphasize "Upload" over "Record" */}
                <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-16 animate-fade-in-up delay-100">
                    Stop manually summarizing slides and textbooks. Upload your course PDFs
                    and get perfectly formatted notes in seconds.
                </p>

                {/* Command Bar Visual */}
                <div className="max-w-3xl mx-auto animate-fade-in-up delay-200">
                    <div className="search-input-shadow rounded-2xl bg-white dark:bg-[#1D1D1D] border border-zinc-200 dark:border-zinc-700 p-6 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all cursor-text">
                        <div className="flex items-center gap-4">

                            {/* Document Icon instead of Search Icon to imply files */}
                            <svg
                                className="w-6 h-6 text-zinc-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>

                            {/* Input Text with Typewriter Effect */}
                            <div className="flex-1 text-left overflow-hidden whitespace-nowrap">
                                <span className="text-lg text-zinc-400 dark:text-zinc-500">
                                    Generate notes from{" "}
                                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                                        {text}
                                    </span>
                                </span>
                                <span className="cursor-blink inline-block w-0.5 h-5 bg-zinc-950 dark:bg-white ml-1 align-middle"></span>
                            </div>

                            {/* Upload Button Visual */}
                            <div className="hidden sm:flex items-center gap-2">
                                <span className="px-2 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded">
                                    Upload PDF
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions (PDF Focused) */}
                    <div className="flex items-center justify-center gap-3 mt-4 text-sm">
                        <span className="text-zinc-400 dark:text-zinc-500">Try:</span>
                        <button className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 transition-colors">
                            &quot;Summarize Chapter 4&quot;
                        </button>
                        <button className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 transition-colors">
                            &quot;Quiz me on this slide&quot;
                        </button>
                    </div>

                    {/* --- ADDED BUTTONS HERE (Closer & Smaller) --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in-up delay-300">

                        {/* Button 1: "View Notes" */}
                        <Link href="/notes" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold border-2 border-black dark:border-white bg-white dark:bg-[#1D1D1D] text-black dark:text-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] dark:hover:shadow-[2px_2px_0px_0px_#fff]">
                                View Notes
                                <BookOpen className="w-4 h-4" />
                            </button>
                        </Link>

                        {/* Button 2: "Get Started" */}
                        <Link href="/register" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] dark:hover:shadow-[2px_2px_0px_0px_#fff]">
                                Get Started Free
                                <Star className="w-4 h-4" />
                            </button>
                        </Link>

                    </div>
                    {/* --- END BUTTONS --- */}

                </div>

            </div>
        </section>
    );
}