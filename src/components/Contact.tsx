
import React from 'react';
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Label 
} from "@/components/ui/label";
import { 
  Input 
} from "@/components/ui/input";
import { 
  Textarea 
} from "@/components/ui/textarea";
import { 
  Button 
} from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Facebook,
  Send 
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission with a backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center mx-auto">
          Let's discuss how I can help with your next project
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="w-full lg:w-1/2 animate-slideUp">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-light p-3 rounded-full">
                      <Mail className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a 
                        href="mailto:b.ahsanraza@gmail.com" 
                        className="text-muted-foreground hover:text-brand-blue transition-colors"
                      >
                        b.ahsanraza@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-light p-3 rounded-full">
                      <Linkedin className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/ahsan-raza-awan-/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-brand-blue transition-colors"
                      >
                        linkedin.com/in/ahsan-raza-awan-
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-light p-3 rounded-full">
                      <Facebook className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Facebook</h4>
                      <a 
                        href="https://www.facebook.com/ahsanrazaawan6/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-brand-blue transition-colors"
                      >
                        facebook.com/ahsanrazaawan6
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slideUp" style={{animationDelay: "0.2s"}}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can I help you?" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send size={18} className="mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
