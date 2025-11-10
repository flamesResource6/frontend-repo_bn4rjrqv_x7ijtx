import { PlayCircle } from "lucide-react";

const videos = [
  {
    id: "1",
    title: "Insane Clutch | Ranked Highlights #12",
    thumb: "https://images.unsplash.com/photo-1606117330913-0282ba08ad94?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.youtube.com/@mon9uu",
  },
  {
    id: "2",
    title: "Pro Movement Guide (Master these 5 drills)",
    thumb: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.youtube.com/@mon9uu",
  },
  {
    id: "3",
    title: "Sensitivity + Settings for Precise Aim",
    thumb: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.youtube.com/@mon9uu",
  },
  {
    id: "4",
    title: "Funny Moments & Fails | Community Clips",
    thumb: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.youtube.com/@mon9uu",
  },
];

export default function VideoGallery() {
  return (
    <section id="videos" className="py-16 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Latest Highlights</h2>
            <p className="text-neutral-600 dark:text-neutral-300">Short, punchy clips you can binge.</p>
          </div>
          <a
            href="https://www.youtube.com/@mon9uu"
            target="_blank"
            rel="noreferrer"
            className="text-violet-600 hover:text-violet-700 font-medium"
          >
            Visit channel →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((v) => (
            <a key={v.id} href={v.url} target="_blank" rel="noreferrer" className="group relative rounded-xl overflow-hidden shadow-sm bg-neutral-900">
              <img src={v.thumb} alt={v.title} className="h-48 w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-neutral-900 text-sm font-medium shadow">
                  <PlayCircle className="size-4" /> Watch
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium truncate">{v.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
