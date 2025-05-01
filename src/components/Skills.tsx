
import React from 'react';
import { 
  TrendingUp, 
  PenTool, 
  Star, 
  ShoppingCart, 
  MessageSquare, 
  Database 
} from 'lucide-react';

const skillsData = [
  {
    name: "Digital Marketing",
    icon: TrendingUp,
    description: "SEO, SEM, Email Marketing, Analytics"
  },
  {
    name: "Graphic Design",
    icon: PenTool,
    description: "Logo Design, Packaging, Print Materials"
  },
  {
    name: "Branding",
    icon: Star,
    description: "Visual Identity, Brand Strategy, Guidelines"
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Store Management, Product Listings, Optimization"
  },
  {
    name: "Social Media Management",
    icon: MessageSquare,
    description: "Content Creation, Community Management, Ads"
  },
  {
    name: "Data Entry and Coordination",
    icon: Database,
    description: "Database Management, Data Analysis, Documentation"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="section-subtitle text-center mx-auto">
          The key areas where I excel and deliver exceptional results
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-brand-light rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] animate-slideUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex gap-4 items-start">
                <div className="bg-brand-blue p-3 rounded-md text-white">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          <span className="skill-tag">SEO</span>
          <span className="skill-tag">Social Media Marketing</span>
          <span className="skill-tag">Adobe Photoshop</span>
          <span className="skill-tag">Logo Design</span>
          <span className="skill-tag">Adobe Illustrator</span>
          <span className="skill-tag">Content Creation</span>
          <span className="skill-tag">Brand Identity</span>
          <span className="skill-tag">E-commerce Management</span>
          <span className="skill-tag">Customer Service</span>
          <span className="skill-tag">Data Analysis</span>
          <span className="skill-tag">Marketing Strategy</span>
          <span className="skill-tag">Email Marketing</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
