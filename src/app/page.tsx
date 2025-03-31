import { Navigation } from "../components/client/Navigation";
import { BackToTop } from "../components/client/BackToTop";
import { ContactForm } from "../components/client/ContactForm";
import { Hero, Footer } from "../components/server/sections/FrameSections";
import { Services, Projects, Contact } from "../components/server/sections/ContentSections";
import { About, Careers } from "../components/server/sections/InfoSections";

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
