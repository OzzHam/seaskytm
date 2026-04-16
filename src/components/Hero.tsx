import logo from "@/assets/logo.png";
import { Phone, Calendar } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-sand to-background">
    <div className="relative z-10 container mx-auto px-5 md:px-8 text-center">
      <img
        src={logo}
        alt="Sae Sky Thaimassage logotyp"
        className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-8 animate-fade-in object-contain"
      />
      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
        Thaimassage i Kungälv
      </h1>
      <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/30 text-foreground font-body font-medium tracking-wide rounded-sm hover:bg-foreground/5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Ring nu
        </a>
      </div>
      <p className="mt-6 text-muted-foreground text-sm font-body animate-fade-in" style={{ animationDelay: "0.6s" }}>
        Lediga tider idag – boka nu
      </p>
    </div>
  </section>
);

export default Hero;
