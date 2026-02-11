"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, GraduationCap } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  delay?: number;
}

function TestimonialCard({ name, role, image, content, rating, delay = 0 }: TestimonialCardProps) {
  // ... (Keep existing card logic same as before) ...
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: delay } },
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative rounded-xl border-4 border-black dark:border-white bg-white dark:bg-[#1D1D1D] p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[12px_12px_0px_0px_#fff]">
        <div className="relative z-10">
          <div className="mb-4">
            <Quote className="h-8 w-8 text-black dark:text-white fill-black dark:fill-white" />
          </div>
          <div className="mb-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${index < rating ? "text-black dark:text-white fill-black dark:fill-white" : "text-gray-300 dark:text-gray-600"}`}
              />
            ))}
          </div>
          <p className="mb-6 leading-relaxed font-medium text-black dark:text-white">&quot;{content}&quot;</p>
          <div className="flex items-center gap-3">
            <img src={image} alt={name} className="h-12 w-12 rounded-md border-2 border-black dark:border-white object-cover" />
            <div>
              <h4 className="font-bold text-black dark:text-white">{name}</h4>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    name: "Tanish Mundra",
    role: "Bennett University",
    image: "https://i.pravatar.cc/150?u=1",
    content: "NotexAi transformed my study routine. The concise notes helped me ace my backend exams.",
    rating: 5,
  },
  {
    name: "Piyush Garg",
    role: "Full Stack Engineer",
    image: "https://i.pravatar.cc/150?u=2",
    content: "The Markdown export is flawless. I can finally study without manually re-typing my textbook chapters.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Medical Student",
    image: "https://i.pravatar.cc/150?u=3",
    content: "I upload 50-page research papers and get the key points in seconds. It feels like magic.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white dark:bg-[#1D1D1D]">

      {/* --- DECORATIVE BACKGROUND ICONS --- */}

      {/* Graduation Cap (Top Right) */}
      <motion.div
        initial={{ opacity: 0, rotate: 15, y: -20 }}
        whileInView={{ opacity: 0.1, rotate: 15, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-10 hidden lg:block select-none pointer-events-none"
      >
        <GraduationCap className="w-40 h-40 text-black dark:text-white" strokeWidth={1} />
      </motion.div>

      {/* Quote Mark (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, rotate: -15, x: -20 }}
        whileInView={{ opacity: 0.05, rotate: -15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-10 hidden lg:block select-none pointer-events-none"
      >
        <Quote className="w-32 h-32 text-black dark:text-white fill-black dark:fill-white" />
      </motion.div>

      {/* --- END ICONS --- */}

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="mb-16 text-center md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mx-auto mb-6 max-w-4xl text-center text-4xl font-extrabold tracking-tighter text-black dark:text-white md:text-5xl lg:text-6xl">
            What Students Say
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-500 dark:text-gray-400 leading-relaxed md:text-xl">
            Join thousands of students who have transformed their learning experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}