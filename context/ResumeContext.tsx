
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ResumeData } from '../types';
import { RESUME_DATA as INITIAL_DATA } from '../constants';

interface ResumeContextType {
  data: ResumeData;
  updateData: (newData: ResumeData) => void;
  isEditing: boolean;
  toggleEditing: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ResumeData>(INITIAL_DATA);
  const [isEditing, setIsEditing] = useState(false);

  const updateData = (newData: ResumeData) => {
    setData(newData);
  };

  const toggleEditing = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <ResumeContext.Provider value={{ data, updateData, isEditing, toggleEditing }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
