import React from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';

const JobFilters = ({ query, setQuery, location, setLocation, onReset }) => {
  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roles (e.g., Quantum, Frontend)"
            className="w-full rounded-lg border border-white/10 bg-black/30 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:border-emerald-400/50 focus:outline-none"
          />
        </div>
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (Remote, SF, Boston)"
            className="w-full rounded-lg border border-white/10 bg-black/30 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:border-emerald-400/50 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/80">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </span>
          <button
            className="ml-auto rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
