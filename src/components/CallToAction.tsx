
import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, Download, Eye } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-brand-blue py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Let's collaborate on your next project and create something exceptional
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="#contact">
              <Briefcase size={20} />
              Hire Me
            </a>
          </Button>
          
          <Button size="lg" variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-brand-blue" asChild>
            <a href="#">
              <Download size={20} />
              Download CV
            </a>
          </Button>
          
          <Button size="lg" variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-brand-blue" asChild>
            <a href="#portfolio">
              <Eye size={20} />
              View Portfolio
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
