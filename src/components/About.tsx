
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 animate-slideUp">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a Digital Marketing and Data Coordinator with a strong passion for graphic design. 
                  I blend creative design with business strategy, running a successful Himalayan salt lamp business 
                  where I design product visuals, manage digital campaigns, and provide complete branding solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With expertise spanning across multiple disciplines, I help businesses establish their online 
                  presence, create compelling visual identities, and implement effective marketing strategies 
                  that drive growth and engagement.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slideUp" style={{animationDelay: "0.2s"}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-light rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-brand-blue mb-2">5+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="bg-brand-light rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-brand-blue mb-2">30+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-brand-light rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-brand-blue mb-2">20+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-brand-light rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-brand-blue mb-2">3+</div>
                <div className="text-muted-foreground">Business Ventures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
