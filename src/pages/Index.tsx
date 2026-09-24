import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import ProfessionalAreas from "@/components/ProfessionalAreas";
import Services from "@/components/Services";
import Education from "@/components/Education";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return <div className="min-h-screen overflow-x-hidden"><Header /><main><Hero /><About /><Experience /><Skills /><Services /><Portfolio /><ProfessionalAreas /><Education /><CallToAction /><Contact /></main><Footer /></div>;
}