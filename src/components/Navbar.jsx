import { Gamepad2, Youtube, Twitter, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 to-violet-600 text-white shadow-sm">
            <Gamepad2 className="size-5" />
          </span>
          <span className="tracking-tight">mon9uu</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#videos" className="hover:text-violet-600 transition-colors">Videos</a>
          <a href="#about" className="hover:text-violet-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-violet-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.youtube.com/@mon9uu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors shadow-sm"
          >
            <Youtube className="size-4" />
            <span className="hidden sm:inline">Subscribe</span>
          </a>
          <a
            href="https://twitter.com/intent/user?screen_name=mon9uu"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Twitter"
          >
            <Twitter className="size-5" />
          </a>
          <a
            href="https://instagram.com/mon9uu"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Instagram"
          >
            <Instagram className="size-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
