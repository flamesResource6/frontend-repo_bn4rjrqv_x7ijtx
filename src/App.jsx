import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoGallery from "./components/VideoGallery";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <VideoGallery />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} mon9uu • All rights reserved</p>
          <p>
            Built for gamers. Watch on <a href="https://www.youtube.com/@mon9uu" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-violet-600">YouTube</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
