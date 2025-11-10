import Spline from "@splinetool/react-spline";
import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5z3QEqkqH1cYq9qO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-sm shadow-sm mb-6">
          <Star className="size-4 text-yellow-500" />
          <span>New videos every week</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Welcome to <span className="bg-gradient-to-tr from-pink-500 to-violet-600 bg-clip-text text-transparent">@mon9uu</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Gameplay highlights, guides, and epic moments from your favorite titles. Join the community and level up together.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#videos"
            className="inline-flex items-center gap-2 rounded-md bg-violet-600 text-white px-5 py-2.5 font-medium shadow hover:bg-violet-700 transition-colors"
          >
            <Rocket className="size-4" /> Watch Highlights
          </a>
          <a
            href="https://www.youtube.com/@mon9uu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-2.5 font-medium shadow hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-neutral-900/40 dark:to-neutral-900" />
    </section>
  );
}
