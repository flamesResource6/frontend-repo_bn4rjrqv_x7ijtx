import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! Your message has been sent.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-violet-600 text-white shadow-sm">
              <Mail className="size-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight">Get in touch</h3>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" required placeholder="Your name" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" />
              <input type="email" required placeholder="Email address" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <textarea required placeholder="Message" rows={4} className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500" />
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-violet-600 text-white px-5 py-2.5 font-medium shadow hover:bg-violet-700 transition-colors">
              <Send className="size-4" /> Send message
            </button>
            {status && <p className="text-sm text-green-600 dark:text-green-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
