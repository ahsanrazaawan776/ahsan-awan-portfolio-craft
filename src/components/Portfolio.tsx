
import React, { useState } from 'react';
import { 
  AspectRatio 
} from "@/components/ui/aspect-ratio";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Maximize2, X } from 'lucide-react';

// Using placeholder images - to be replaced with real portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Logo Design",
    category: "Graphic Design",
    description: "Custom logo design for a brand",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Product Photography",
    category: "Photography",
    description: "Salt lamp product photography",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description: "Social media posts and strategy",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Packaging Design",
    category: "Graphic Design",
    description: "Salt lamp product packaging",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "Branding",
    description: "Complete brand identity design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "E-commerce Website",
    category: "Web Design",
    description: "Online store for salt lamp products",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);
  
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-brand-light">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Portfolio</h2>
        <p className="section-subtitle text-center mx-auto">
          Showcasing my creative work and design projects
        </p>
        
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slideUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative group">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-brand-blue bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-white text-brand-blue hover:bg-brand-light"
                    onClick={() => setSelectedItem(item)}
                  >
                    <Eye size={20} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-2">{item.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for viewing project details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 flex justify-between items-center border-b">
              <h3 className="text-2xl font-semibold">{selectedItem.title}</h3>
              <Button variant="ghost" size="icon" onClick={() => setSelectedItem(null)}>
                <X size={24} />
              </Button>
            </div>
            <div className="p-6">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-auto rounded-lg mb-6"
              />
              <Badge className="mb-4">{selectedItem.category}</Badge>
              <h4 className="text-xl font-semibold mb-2">Project Details</h4>
              <p className="text-muted-foreground mb-6">
                {selectedItem.description}. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus a quam repellat mollitia, nemo aut iste expedita inventore minus voluptate 
                doloremque unde, rem quae perspiciatis dolorum! Porro, ducimus? Assumenda, quis.
              </p>
              <div className="flex justify-end">
                <Button onClick={() => setSelectedItem(null)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
