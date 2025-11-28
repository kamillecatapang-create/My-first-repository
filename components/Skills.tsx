import React from 'react';
import { useResume } from '../context/ResumeContext';
import { CheckCircle2, GraduationCap, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const { data, updateData, isEditing } = useResume();

  const handleEducationUpdate = (field: string, value: string) => {
    updateData({
      ...data,
      education: { ...data.education, [field]: value }
    });
  };

  const handleSkillUpdate = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    updateData({ ...data, skills: newSkills });
  };

  return (
    <div className="h-full w-full flex items-center justify-center overflow-y-auto bg-sage-50/50">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* Education Column */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-sage-100/50 border border-sage-100">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b pb-4 border-sage-50">
              <GraduationCap className="text-sage-500" />
              Education
            </h3>
            <div className="pl-4 border-l-4 border-sage-500 py-2">
              {isEditing ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={data.education.degree}
                    onChange={(e) => handleEducationUpdate('degree', e.target.value)}
                    className="text-xl font-bold text-slate-800 bg-transparent border-b border-dashed border-sage-300 w-full"
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    value={data.education.school}
                    onChange={(e) => handleEducationUpdate('school', e.target.value)}
                    className="text-sage-700 font-medium bg-transparent border-b border-dashed border-sage-300 w-full"
                    placeholder="School"
                  />
                  <input
                    type="text"
                    value={data.education.year}
                    onChange={(e) => handleEducationUpdate('year', e.target.value)}
                    className="text-slate-500 text-sm bg-transparent border-b border-dashed border-sage-300 w-full"
                    placeholder="Year"
                  />
                </div>
              ) : (
                <>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{data.education.degree}</h4>
                  <p className="text-sage-700 font-medium mb-1">{data.education.school}</p>
                  <p className="text-slate-500 text-sm">{data.education.year}</p>
                </>
              )}
            </div>
          </div>

          {/* Skills Column */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-sage-100/50 border border-sage-100">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b pb-4 border-sage-50">
              <Wrench className="text-sage-500" />
              Skills & Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-sage-50/50 rounded-lg hover:bg-sage-100 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillUpdate(index, e.target.value)}
                      className="text-slate-700 text-sm w-full bg-transparent border-b border-dashed border-sage-300 focus:outline-none"
                    />
                  ) : (
                    <span className="text-slate-700 text-sm font-medium">{skill}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;