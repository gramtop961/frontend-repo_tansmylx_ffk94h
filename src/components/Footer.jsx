import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div>
          <div className="text-xl font-semibold">bloq</div>
          <p className="mt-1 text-sm text-white/60">Building the quantum future.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/10" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/10" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/10" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
