
import React from 'react';
import { Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-light py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-brand-blue">Ahsan Raza Awan</h2>
            <p className="text-muted-foreground mt-2">Digital Marketer | Graphic Designer | Business Owner</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="mailto:b.ahsanraza@gmail.com" 
              className="bg-white p-3 rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ahsan-raza-awan-/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-3 rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.facebook.com/ahsanrazaawan6/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-3 rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ahsan Raza Awan. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
