
export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  linkedin: string;
}

export interface ResumeData {
  name: string;
  role: string;
  about: string;
  contact: ContactInfo;
  education: Education;
  skills: string[];
  experience: Job[];
}
