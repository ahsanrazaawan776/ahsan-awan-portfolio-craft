
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-brand-light to-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 animate-fadeIn">
            <h2 className="text-xl font-medium text-brand-blue mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6">Ahsan Raza Awan</h1>
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Digital Marketer | Graphic Designer | Business Owner
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Crafting unique visuals and strategies to elevate businesses
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
              <Button variant="ghost" size="icon" className="ml-2">
                <a href="#about" className="flex items-center">
                  <ArrowDownCircle size={24} />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fadeIn">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* Replace with actual photo when uploaded */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue/70 flex items-center justify-center text-white">
                <p className="text-center px-4">Upload your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
