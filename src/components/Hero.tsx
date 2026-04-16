import portrait from "@/assets/portrait.png";
import { Phone, Calendar, Clock, MapPin } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "#F7F3EF" }}>
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

    {/* Subtle decorative circles */}
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-[0.04]" style={{ background: "#C8A96A" }} />
    <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full opacity-[0.03]" style={{ background: "#C8A96A" }} />
    <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-[0.02]" style={{ background: "#6B4F3A" }} />

    <div className="relative z-10 container mx-auto px-5 md:px-8 pt-24 pb-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
        
        {/* Left – Text */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="text-sm tracking-[0.25em] uppercase font-body text-muted-foreground mb-4 animate-fade-in"
            style={{ color: "#C8A96A" }}
          >
            Thaimassage i Kungälv
          </p>

          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground mb-6 animate-fade-in leading-tight"
            style={{ animationDelay: "0.15s" }}
          >
            Avkoppling för kropp och sinne
          </h1>

          <p
            className="text-muted-foreground font-body text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Upplev traditionell thaimassage i en lugn och harmonisk miljö – mitt i Kungälv
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="tel:0763019288"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-medium tracking-wide rounded-full text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "#C8A96A" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B89A5A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8A96A")}
            >
              <Calendar className="w-5 h-5" />
              Boka tid
            </a>
            <a
              href="tel:0763019288"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-foreground/5"
              style={{ border: "1.5px solid #6B4F3A", color: "#6B4F3A" }}
            >
              <Phone className="w-5 h-5" />
              Ring nu
            </a>
          </div>

          {/* Trust + urgency */}
          <div
            className="mt-8 space-y-2 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-sm font-body font-medium" style={{ color: "#C8A96A" }}>
              Lediga tider idag
            </p>
            <p className="text-xs font-body text-muted-foreground flex items-center justify-center md:justify-start gap-4">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Öppet alla dagar 10–21
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Centralt i Kungälv
              </span>
            </p>
          </div>
        </div>

        {/* Right – Portrait */}
        <div
          className="flex-1 flex justify-center animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            {/* Soft glow behind image */}
            <div
              className="absolute inset-0 rounded-full blur-3xl scale-90 opacity-30"
              style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }}
            />
            <img
              src={portrait}
              alt="thaimassage kungälv"
              className="relative z-10 w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
