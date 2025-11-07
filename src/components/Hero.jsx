import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Cpu } from 'lucide-react';

const Hero = ({ onExplore }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs tracking-wide text-emerald-300 backdrop-blur">
          <Cpu className="h-3.5 w-3.5" />
          QUANTUM HIRING PORTAL
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
          Join bloq. Build the quantum future.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
          We’re assembling a world‑class team across research, engineering, and product to make
          quantum computing real. Explore roles and complete assignments to showcase your strengths.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            Explore openings
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Our process
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
