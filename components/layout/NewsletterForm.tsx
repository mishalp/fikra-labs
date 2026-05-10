"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = `mailto:hello@fikralabs.com?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(email)}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-2 sm:mx-0 sm:max-w-none md:flex-row md:items-stretch"
    >
      <label htmlFor="footer-email" className="sr-only">
        Work email
      </label>
      <input
        id="footer-email"
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Work email"
        className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm text-white shadow-none outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-zinc-500 focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)] sm:flex-1"
      />
      <button
        type="submit"
        className="min-h-11 shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 text-sm font-semibold text-white shadow-[0_0_24px_-8px_rgba(139,92,246,0.45)] transition-[transform,opacity] hover:opacity-95 active:scale-[0.98] md:px-6"
      >
        Subscribe
      </button>
    </form>
  );
}
