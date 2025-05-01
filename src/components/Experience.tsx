
import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Business Owner",
    company: "NaturalSaltLamp.Shop",
    period: "2023 – Present",
    description: "Managing e-commerce, product listings, marketing, and customer service."
  },
  {
    role: "Data Operator",
    company: "Mohsin E Azam Travel & Tours",
    period: "2023 – Present",
    description: "Handling passports, visa applications, and social media."
  },
  {
    role: "Lab Assistant & Data Coordinator",
    company: "Iqra College of Technology",
    period: "2022 – 2023",
    description: "Maintaining student records and providing lab support."
  },
  {
    role: "Digital Marketing and Data Coordinator",
    company: "Earnet Pakistan",
    period: "2020 – 2022",
    description: "Managing digital marketing and data systems."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-brand-light">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Experience</h2>
        <p className="section-subtitle text-center mx-auto">
          My professional journey across different roles and industries
        </p>
        
        <div className="max-w-3xl mx-auto mt-16">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item animate-slideRight" 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="p-2 rounded-full bg-brand-blue text-white">
                    <Briefcase size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-blue">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
