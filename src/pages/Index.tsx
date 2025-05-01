
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
