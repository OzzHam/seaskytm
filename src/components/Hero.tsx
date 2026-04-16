import heroImage from "@/assets/hero-massage.jpg";
import { Phone, Calendar } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="thaimassage kungälv"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/30" />
    </div>
    <div className="relative z-10 container mx-auto px-5 md:px-8 text-center">
      <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
        Sae Sky Thaimassage
      </p>
      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
        Thaimassage i Kungälv
      </h1>
      <p className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in" style={{ animationDelay: "0.3s" }}>
        Avkoppling, balans och återhämtning – traditionell thaimassage i en lugn miljö
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
        <a
          href="tel:0763019288"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wide rounded-sm hover:bg-gold-dark transition-colors"
        >
          <Calendar className="w-5 h-5" />
          Boka tid
        </a>
        <a
          href="tel:0763019288"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/60 text-primary-foreground font-body font-medium tracking-wide rounded-sm hover:bg-primary-foreground/10 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Ring nu
        </a>
      </div>
      <p className="mt-6 text-primary-foreground/70 text-sm font-body animate-fade-in" style={{ animationDelay: "0.6s" }}>
        Lediga tider idag – boka nu
      </p>
    </div>
  </section>
);

export default Hero;
