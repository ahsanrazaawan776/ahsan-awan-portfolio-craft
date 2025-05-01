
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-brand-blue">AR</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-brand-blue transition-colors">About</a>
          <a href="#experience" className="text-sm font-medium hover:text-brand-blue transition-colors">Experience</a>
          <a href="#skills" className="text-sm font-medium hover:text-brand-blue transition-colors">Skills</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-brand-blue transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-blue transition-colors">Contact</a>
          <Button size="sm" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 absolute w-full shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button size="sm" className="w-full" asChild onClick={() => setIsMenuOpen(false)}>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
