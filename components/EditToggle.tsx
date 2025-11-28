
import React from 'react';
import { Pencil, Check } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

const EditToggle: React.FC = () => {
  const { isEditing, toggleEditing } = useResume();

  return (
    <button
      onClick={toggleEditing}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
        isEditing 
          ? 'bg-sage-600 text-white hover:bg-sage-700 rotate-0' 
          : 'bg-white text-sage-600 hover:bg-sage-50 hover:text-sage-800 -rotate-12'
      }`}
      aria-label={isEditing ? "Save changes" : "Edit portfolio"}
    >
      {isEditing ? <Check size={24} /> : <Pencil size={24} />}
    </button>
  );
};

export default EditToggle;
