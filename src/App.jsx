import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import JobFilters from './components/JobFilters';
import JobList from './components/JobList';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  const listingsRef = useRef(null);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleExplore = () => {
    listingsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleReset = () => {
    setQuery('');
    setLocation('');
  };

  useEffect(() => {
    document.documentElement.classList.add('bg-black');
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Hero onExplore={handleExplore} />

      <main className="relative z-10 -mt-12 rounded-t-3xl bg-neutral-950/90 pb-20 pt-12">
        <section ref={listingsRef} className="mx-auto max-w-6xl px-6 text-white">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Open roles</h2>
              <p className="mt-1 text-white/70">Search by keyword or location, then preview the assignment for each role.</p>
            </div>
          </div>
          <JobFilters
            query={query}
            setQuery={setQuery}
            location={location}
            setLocation={setLocation}
            onReset={handleReset}
          />
          <div className="mt-6">
            <JobList query={query} location={location} />
          </div>
        </section>

        <Process />
      </main>

      <Footer />
    </div>
  );
}

export default App;
