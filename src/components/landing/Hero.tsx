"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Import standard icons for the buttons
import { BookOpen, Star, FileText, Sparkles, List, ArrowUp } from "lucide-react";

export default function Hero() {

    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

    return (
        <section className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-10 pb-4 md:pt-32 md:pb-8">
            <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">

                {/* Headline: Clear Value Prop (PDF -> Notes) */}
                <motion.div
                    className="flex flex-col items-center mb-5 md:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.6 }}
                >
                    <img
                        className="w-52 md:w-80 h-auto dark:brightness-100 dark:invert -mb-5 md:-mb-10 z-10 relative"
                        src="logo.png"
                        alt="Notex AI Logo"
                    />
                    <h1 className="max-w-xs sm:max-w-xl md:max-w-2xl text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-cal-sans tracking-tighter text-zinc-900 dark:text-zinc-100 mt-1.5">
                        Notes Simplified
                    </h1>
                </motion.div>

                {/* Subtext: Emphasize "Upload" over "Record" */}
                <motion.p
                    className="text-base md:text-base lg:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-8 md:mb-10 px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.7 }}
                >
                    Stop manually summarizing slides and textbooks. Upload your course PDFs
                    and get perfectly formatted notes in seconds.
                </motion.p>

                {/* Command Bar Visual */}
                {/* New Prompt Box (Chat Style) */}
                <div className="w-[90%] sm:w-full max-w-xl mx-auto">
                    {/* New Prompt Box (Chat Style) - User Requested Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.8 }}
                    >
                        <div
                            data-slot="input-group"
                            role="group"
                            className="group/input-group dark:bg-input/30 relative flex w-full items-center rounded-xl border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:hover:shadow-[1px_1px_0px_0px_#fff] outline-none min-w-0 has-[>textarea]:h-auto flex-col has-[>textarea]:pb-2 has-[>textarea]:pt-2 bg-white dark:bg-[#1D1D1D]"
                        >
                            <div className="contents">
                                <textarea
                                    data-slot="input-group-control"
                                    className="border-input placeholder:text-muted-foreground flex w-full text-base md:text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 flex-1 px-4 md:px-4 resize-none rounded-none border-0 bg-transparent py-2 shadow-none focus-visible:ring-0 dark:bg-transparent field-sizing-content max-h-36 min-h-[50px] md:min-h-[56px]"
                                    name="message"
                                    placeholder="What would you like to know?"
                                />
                            </div>
                            <div
                                role="group"
                                data-slot="input-group-addon"
                                data-align="block-end"
                                className="text-muted-foreground h-auto cursor-text items-center py-1 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50 order-last w-full px-2.5 pb-2 [.border-t]:pt-2 group-has-[>input]/input-group:pb-2 gap-1 flex justify-end"
                            >
                                <button className="p-1.5 md:p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition-opacity">
                                    <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Actions (Pill Buttons) */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.9 }}
                    >
                        <button className="flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-1.5 bg-white dark:bg-[#1D1D1D] border border-dashed border-zinc-500 dark:border-zinc-400 rounded-full text-sm md:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                            <FileText className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-500" />
                            Detailed summary
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-1.5 bg-white dark:bg-[#1D1D1D] border border-dashed border-zinc-500 dark:border-zinc-400 rounded-full text-sm md:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-500" />
                            Short summary
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-1.5 bg-white dark:bg-[#1D1D1D] border border-dashed border-zinc-500 dark:border-zinc-400 rounded-full text-sm md:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                            <List className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-500" />
                            Key points
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-1.5 bg-white dark:bg-[#1D1D1D] border border-dashed border-zinc-500 dark:border-zinc-400 rounded-full text-sm md:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                            <BookOpen className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-500" />
                            Create notes
                        </button>
                    </motion.div>
                </div>
                {/* --- CTA BUTTONS --- */}
                <motion.div
                    className="flex flex-row items-center justify-center gap-3 mt-8 md:mt-10 w-full px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 1.0 }}
                >

                    {/* Button 1: "View Notes" */}
                    <Link href="/notes" className="w-auto">
                        <button className="flex items-center justify-center gap-2 px-3 py-2 text-xs md:text-sm font-bold border-2 border-black dark:border-white bg-white dark:bg-[#1D1D1D] text-black dark:text-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:hover:shadow-[1px_1px_0px_0px_#fff] whitespace-nowrap">
                            View Notes
                            <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                    </Link>

                    {/* Button 2: "Get Started" */}
                    <Link href="/register" className="w-auto">
                        <button className="flex items-center justify-center gap-2 px-3 py-2 text-xs md:text-sm font-bold border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:hover:shadow-[1px_1px_0px_0px_#fff] whitespace-nowrap">
                            Get Started Free
                            <Star className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                    </Link>

                </motion.div>
                {/* --- END BUTTONS --- */}

            </div>
        </section >
    );
}