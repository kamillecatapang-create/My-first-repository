import React from 'react';
import { useResume } from '../context/ResumeContext';

const Experience: React.FC = () => {
  const { data, updateData, isEditing } = useResume();

  const handleJobUpdate = (index: number, field: string, value: any) => {
    const newExperience = [...data.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    updateData({ ...data, experience: newExperience });
  };

  const handleDescriptionUpdate = (jobIndex: number, descIndex: number, value: string) => {
    const newExperience = [...data.experience];
    const newDescription = [...newExperience[jobIndex].description];
    newDescription[descIndex] = value;
    newExperience[jobIndex].description = newDescription;
    updateData({ ...data, experience: newExperience });
  };

  return (
    <div className="h-full w-full overflow-y-auto px-4 md:px-0">
      <div className="max-w-4xl mx-auto py-12 md:py-20">
        <div className="text-center mb-12 sticky top-0 bg-white/95 backdrop-blur-sm py-4 z-10 border-b border-sage-100">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">Experience</h2>
          <p className="text-sage-600 tracking-wider text-sm uppercase">My Professional Journey</p>
        </div>

        <div className="space-y-12 pb-24">
          {data.experience.map((job, index) => (
            <div 
              key={job.id} 
              className="relative pl-8 md:pl-0 group"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2 group-last:h-full"></div>
              
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 w-4 h-4 rounded-full bg-sage-500 border-4 border-white transform -translate-x-1/2 z-10 shadow-sm"></div>

              {/* Mobile Border */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
              <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-sage-500 transform -translate-x-[5px]"></div>

              <div className={`md:flex justify-between items-start gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date & Company (Side A) */}
                <div className={`md:w-1/2 mb-2 md:mb-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                   {isEditing ? (
                     <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                        <input
                          type="text"
                          value={job.period}
                          onChange={(e) => handleJobUpdate(index, 'period', e.target.value)}
                          className="px-3 py-1 bg-sage-50 text-sage-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-2 border-b border-dashed border-sage-400 w-auto text-center"
                        />
                        <input 
                          type="text"
                          value={job.company}
                          onChange={(e) => handleJobUpdate(index, 'company', e.target.value)}
                          className={`font-bold text-lg text-slate-800 bg-transparent border-b border-dashed border-sage-400 w-full ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                        />
                     </div>
                   ) : (
                     <>
                        <span className="inline-block px-3 py-1 bg-sage-50 text-sage-700 text-xs font-semibold tracking-wider uppercase rounded-full mb-2 shadow-sm border border-sage-100">
                          {job.period}
                        </span>
                        <h3 className="font-bold text-lg text-slate-800">{job.company}</h3>
                     </>
                   )}
                </div>

                {/* Role & Description (Side B) */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={job.role}
                      onChange={(e) => handleJobUpdate(index, 'role', e.target.value)}
                      className={`font-serif text-xl font-medium text-sage-700 mb-3 bg-transparent border-b border-dashed border-sage-400 w-full ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    />
                  ) : (
                    <h4 className="font-serif text-xl font-medium text-sage-700 mb-3">{job.role}</h4>
                  )}
                  
                  <ul className={`space-y-2 text-slate-600 text-sm leading-relaxed ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-2 w-full">
                        {isEditing ? (
                          <textarea
                            value={item}
                            onChange={(e) => handleDescriptionUpdate(index, i, e.target.value)}
                            rows={2}
                            className={`w-full bg-slate-50 border border-dashed border-sage-300 p-1 text-xs rounded ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                          />
                        ) : (
                          <span className="opacity-80">{item}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;