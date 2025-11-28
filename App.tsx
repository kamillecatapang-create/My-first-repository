import React, { useState, useEffect, useCallback } from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import EditToggle from './components/EditToggle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { id: 'about', label: 'About', component: Hero },
  { id: 'experience', label: 'Experience', component: Experience },
  { id: 'skills', label: 'Skills', component: Skills },
  { id: 'contact', label: 'Contact', component: Contact },
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const ActiveComponent = SLIDES[currentSlide].component;

  return (
    <ResumeProvider>
      <div className="h-screen w-screen bg-sage-50 overflow-hidden relative font-sans text-slate-800">
        
        {/* Navigation Header */}
        <Navigation 
          currentSlide={currentSlide} 
          setCurrentSlide={setCurrentSlide}
          slides={SLIDES} 
        />

        {/* Main Content Area */}
        <main className="absolute inset-0 pt-20 pb-16 flex items-center justify-center transition-opacity duration-300">
          <div className="w-full h-full relative animate-in fade-in zoom-in-95 duration-500">
             {/* Pass specific props if needed, e.g., onNext for Hero */}
             <ActiveComponent onNext={nextSlide} />
          </div>
        </main>

        {/* Navigation Controls (Floating Arrows) */}
        <div className="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full bg-white/80 backdrop-blur shadow-lg text-sage-800 pointer-events-auto transition-all transform hover:scale-110 hover:bg-white disabled:opacity-0 ${currentSlide === 0 ? 'invisible' : ''}`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
          <button
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className={`p-3 rounded-full bg-white/80 backdrop-blur shadow-lg text-sage-800 pointer-events-auto transition-all transform hover:scale-110 hover:bg-white disabled:opacity-0 ${currentSlide === SLIDES.length - 1 ? 'invisible' : ''}`}
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3 z-30">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-sage-600' : 'w-2 bg-sage-300 hover:bg-sage-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <EditToggle />
      </div>
    </ResumeProvider>
  );
};

export default App;