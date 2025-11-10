import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-violet-600 text-white shadow-sm">
              <User className="size-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight">About @mon9uu</h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Hey! I'm <span className="font-semibold">@mon9uu</span>, a gamer and content creator. I post gameplay highlights, tutorials, and stream moments.
            If you're into clutch plays and learning tips that actually help you improve, you're in the right place.
            Make sure to subscribe and join the community — new uploads drop weekly!
          </p>
        </div>
      </div>
    </section>
  );
}
