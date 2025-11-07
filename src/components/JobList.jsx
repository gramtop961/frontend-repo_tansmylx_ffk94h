import React, { useMemo, useState } from 'react';
import { ArrowRight, FileCheck2, Building2, Clock } from 'lucide-react';

const jobsSeed = [
  {
    id: 'quantum-researcher',
    title: 'Quantum Research Scientist',
    team: 'Research',
    location: 'Boston, MA',
    type: 'Full-time',
    assignment: {
      title: 'Quantum Algorithm Deep Dive',
      description:
        'Analyze a near-term algorithm (e.g., VQE/QAOA) and propose an optimization strategy. Provide a brief write-up and a prototype in Python/Qiskit or Cirq.',
      deliverables: [
        '2–3 page brief with references',
        'Prototype notebook or script',
        'Tradeoff analysis and expected speedups',
      ],
    },
  },
  {
    id: 'quantum-software',
    title: 'Quantum Software Engineer',
    team: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    assignment: {
        title: 'Circuit Compiler Challenge',
        description:
          'Build a pass that reduces depth on random circuits under realistic hardware constraints. Use any framework and explain heuristics.',
        deliverables: [
          'CLI tool with before/after metrics',
          'Unit tests on provided circuits',
          'Doc explaining approach and complexity',
        ],
      },
  },
  {
    id: 'frontend',
    title: 'Senior Frontend Engineer',
    team: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    assignment: {
      title: 'Design-to-React Implementation',
      description:
        'Recreate a provided design spec with pixel-perfect, accessible React components using a modern stack. Include state management and API integration mocks.',
      deliverables: [
        'Deployed preview link',
        'Component library decisions rationale',
        'A11y checklist',
      ],
    },
  },
  {
    id: 'devrel',
    title: 'Developer Relations Engineer',
    team: 'Community',
    location: 'Remote',
    type: 'Contract',
    assignment: {
      title: 'Tutorial + Sample App',
      description:
        'Create a concise tutorial and sample repo showing how to use our SDK with a basic quantum/classical workflow. Focus on clarity and DX.',
      deliverables: [
        'Step-by-step guide',
        'Sample repository',
        'Short demo video (optional)',
      ],
    },
  },
];

const JobCard = ({ job, onSelect }) => {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4" /> {job.team}</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {job.type}</span>
            <span>{job.location}</span>
          </div>
        </div>
        <button
          onClick={() => onSelect(job)}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          View assignment
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const AssignmentModal = ({ open, onClose, job }) => {
  if (!open || !job) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl rounded-t-2xl border border-white/10 bg-neutral-950 p-6 text-white shadow-2xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{job.assignment.title}</h3>
            <p className="mt-2 text-white/80">{job.assignment.description}</p>
          </div>
          <button onClick={onClose} className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/70 hover:bg-white/10">Close</button>
        </div>
        <div className="mt-6">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/70">Deliverables</h4>
          <ul className="space-y-2">
            {job.assignment.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <FileCheck2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          <a
            href="#apply"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
            onClick={onClose}
          >
            Apply later
          </a>
          <a
            href="#apply"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400"
            onClick={onClose}
          >
            Start application
          </a>
        </div>
      </div>
    </div>
  );
};

const JobList = ({ query, location }) => {
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return jobsSeed.filter((job) => {
      const matchesQuery = job.title.toLowerCase().includes(query.toLowerCase()) || job.team.toLowerCase().includes(query.toLowerCase());
      const matchesLocation = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
      return matchesQuery && matchesLocation;
    });
  }, [query, location]);

  return (
    <div className="space-y-4">
      {filtered.map((job) => (
        <JobCard key={job.id} job={job} onSelect={setSelected} />
      ))}
      <AssignmentModal open={!!selected} job={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default JobList;
