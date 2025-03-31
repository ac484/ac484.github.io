import { Navigation } from "../components/client/Navigation";
import { BackToTop } from "../components/client/BackToTop";
import { ContactForm } from "../components/client/ContactForm";
import { Hero } from "../components/server/sections/Hero";
import { Services } from "../components/server/sections/Services";
import { Projects } from "../components/server/sections/Projects";
import { About } from "../components/server/sections/About";
import { Contact } from "../components/server/sections/Contact";
import { Careers } from "../components/server/sections/Careers";
import { Footer } from "../components/server/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact>
        <ContactForm />
      </Contact>
      <Careers />
      <Footer />
      <BackToTop />
    </div>
  );
}
