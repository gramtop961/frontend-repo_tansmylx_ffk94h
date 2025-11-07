import React from 'react';
import { ShieldCheck, Layers, Zap } from 'lucide-react';

const steps = [
  {
    icon: ShieldCheck,
    title: 'Apply securely',
    desc: 'Submit your background. We evaluate experience across academia and industry.',
  },
  {
    icon: Layers,
    title: 'Complete an assignment',
    desc: 'Hands-on challenge aligned to the role. Realistic, scoped, and time-bounded.',
  },
  {
    icon: Zap,
    title: 'Meet the team',
    desc: 'Discuss your approach, tradeoffs, and impact with peers across bloq.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">How we hire</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            A streamlined path that respects your time and highlights your strengths.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <Icon className="h-6 w-6 text-emerald-400" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
