"use client";

import { useState } from "react";
import { SignInModal } from "./SignInModal";

export function SignInButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-full bg-black dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-black transition-transform active:scale-95"
      >
        Sign In
      </button>
      <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
