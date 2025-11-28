import React from 'react';
import { useResume } from '../context/ResumeContext';
import { ArrowRight, Mail } from 'lucide-react';

interface HeroProps {
  onNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNext }) => {
  const { data, updateData, isEditing } = useResume();

  return (
    <div className="h-full w-full flex items-center justify-center overflow-y-auto">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6 md:space-y-8 text-center md:text-left">
            <div>
              <p className="text-sage-600 font-medium tracking-widest uppercase mb-4 animate-fade-in-up">Hello, I am</p>
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => updateData({ ...data, name: e.target.value })}
                    className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-tight w-full bg-transparent border-b-2 border-dashed border-sage-300 focus:outline-none focus:border-sage-600"
                  />
                  <input
                    type="text"
                    value={data.role}
                    onChange={(e) => updateData({ ...data, role: e.target.value })}
                    className="text-xl md:text-2xl text-slate-500 font-light w-full bg-transparent border-b-2 border-dashed border-sage-300 focus:outline-none focus:border-sage-600"
                  />
                </div>
              ) : (
                <>
                  <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-4">
                    {data.name}
                  </h1>
                  <h2 className="text-xl md:text-2xl text-slate-500 font-light">
                    {data.role}
                  </h2>
                </>
              )}
            </div>
            
            {isEditing ? (
              <textarea
                value={data.about}
                onChange={(e) => updateData({ ...data, about: e.target.value })}
                rows={4}
                className="text-slate-600 text-lg leading-relaxed max-w-lg w-full bg-transparent border-2 border-dashed border-sage-300 p-2 rounded focus:outline-none focus:border-sage-600"
              />
            ) : (
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                {data.about}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button 
                onClick={onNext}
                className="inline-flex items-center justify-center px-8 py-3 bg-sage-700 text-white font-medium rounded-none hover:bg-sage-800 transition-colors shadow-lg shadow-sage-200 group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-sage-200 rounded-full blur-3xl opacity-30 transform translate-x-4 translate-y-4"></div>
              <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <img 
                   src="/profile.jpg" 
                   alt={data.name}
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              <div className="absolute bottom-4 -left-4 bg-white p-4 shadow-xl rounded-lg border-l-4 border-sage-500 hidden md:block">
                <p className="text-sm font-bold text-slate-800">9+ Years</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;