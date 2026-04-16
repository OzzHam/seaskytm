import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LocalSeo from "@/components/LocalSeo";
import Services from "@/components/Services";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import SeoText from "@/components/SeoText";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <LocalSeo />
      <Services />
      <About />
      <Faq />
      <Contact />
      <SeoText />
    </main>
    <Footer />
    <StickyBooking />
  </>
);

export default Index;
