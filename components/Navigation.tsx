import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  slides: { id: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ currentSlide, setCurrentSlide, slides }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center z-50">
            <button 
              onClick={() => setCurrentSlide(0)}
              className="font-serif text-2xl font-bold tracking-tight text-sage-800 focus:outline-none"
            >
              KC.
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-sage-100">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 uppercase tracking-wider ${
                  currentSlide === index 
                    ? 'bg-sage-600 text-white shadow-md' 
                    : 'text-slate-500 hover:text-sage-600 hover:bg-sage-50'
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-sage-800 focus:outline-none bg-white/50 p-2 rounded-full backdrop-blur-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-sage-50/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentSlide(index);
                setIsOpen(false);
              }}
              className={`text-2xl font-serif font-medium transition-colors ${
                currentSlide === index ? 'text-sage-700 underline underline-offset-8' : 'text-slate-500'
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;