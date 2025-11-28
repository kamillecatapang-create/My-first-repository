import React from 'react';
import { useResume } from '../context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { data, updateData, isEditing } = useResume();

  const handlePhoneUpdate = (index: number, value: string) => {
    const newPhone = [...data.contact.phone];
    newPhone[index] = value;
    updateData({
      ...data,
      contact: { ...data.contact, phone: newPhone }
    });
  };

  const handleContactUpdate = (field: string, value: string) => {
    updateData({
      ...data,
      contact: { ...data.contact, [field]: value }
    });
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-slate-900 text-slate-300">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 text-center py-12 overflow-y-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
          I am currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 backdrop-blur-sm group">
            <div className="w-16 h-16 bg-sage-500/20 text-sage-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone size={28} />
            </div>
            <h3 className="text-white font-medium mb-2 text-lg">Phone</h3>
            {data.contact.phone.map((num, index) => (
              <div key={index} className="w-full">
                {isEditing ? (
                  <input
                    type="text"
                    value={num}
                    onChange={(e) => handlePhoneUpdate(index, e.target.value)}
                    className="text-sm text-center bg-transparent border-b border-dashed border-slate-600 text-white w-full mb-1"
                  />
                ) : (
                  <p className="text-slate-300">{num}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 backdrop-blur-sm group">
            <div className="w-16 h-16 bg-sage-500/20 text-sage-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail size={28} />
            </div>
            <h3 className="text-white font-medium mb-2 text-lg">Email</h3>
            {isEditing ? (
              <input
                type="text"
                value={data.contact.email}
                onChange={(e) => handleContactUpdate('email', e.target.value)}
                className="text-sm text-center bg-transparent border-b border-dashed border-slate-600 text-white w-full"
              />
            ) : (
              <a href={`mailto:${data.contact.email}`} className="text-slate-300 hover:text-white transition-colors">
                {data.contact.email}
              </a>
            )}
          </div>

          <div className="flex flex-col items-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 backdrop-blur-sm group">
            <div className="w-16 h-16 bg-sage-500/20 text-sage-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={28} />
            </div>
            <h3 className="text-white font-medium mb-2 text-lg">Address</h3>
             {isEditing ? (
              <input
                type="text"
                value={data.contact.address}
                onChange={(e) => handleContactUpdate('address', e.target.value)}
                className="text-sm text-center bg-transparent border-b border-dashed border-slate-600 text-white w-full"
              />
            ) : (
              <p className="text-slate-300 max-w-[200px]">{data.contact.address}</p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
             {isEditing ? (
              <div className="flex items-center gap-2">
                 <Linkedin size={20} className="text-slate-500" />
                 <input
                   type="text"
                   value={data.contact.linkedin}
                   onChange={(e) => handleContactUpdate('linkedin', e.target.value)}
                   className="text-sm bg-transparent border-b border-dashed border-slate-600 text-slate-500 w-48 focus:outline-none focus:border-white transition-colors"
                   placeholder="LinkedIn URL"
                 />
              </div>
            ) : (
             <a 
               href={data.contact.linkedin} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-full border border-slate-700 hover:border-sage-500 hover:shadow-lg hover:shadow-sage-500/20 hover:-translate-y-1"
               aria-label="LinkedIn"
             >
               <Linkedin size={18} className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
               <span className="text-sm font-medium">LinkedIn Profile</span>
             </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;