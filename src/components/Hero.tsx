import logo from "@/assets/logo.png";
import { Phone, Clock, MapPin, Sparkles } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col overflow-hidden" style={{ background: "#F7F3EF" }}>
    {/* Main content */}
    <div className="relative z-10 container mx-auto px-5 md:px-8 flex-1 flex flex-col">
      
      {/* Logo area */}
      <div className="pt-24 pb-4 md:pb-0 flex items-center gap-3 animate-fade-in">
        <img src={logo} alt="Sea Sky Thaimassage logotyp" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
        <div>
          <p className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: "#6B4F3A" }}>
            Sea Sky
          </p>
          <p className="text-xs tracking-[0.2em] uppercase font-body" style={{ color: "#C8A96A" }}>
            Thaimassage
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex-1 flex flex-col md:flex-row items-center">
        
        {/* Left – Text */}
        <div className="flex-1 text-center md:text-left py-8 md:py-0 z-10">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body mb-4 animate-fade-in"
            style={{ color: "#C8A96A", animationDelay: "0.15s" }}
          >
            Thaimassage i Kungälv
          </p>

          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6 animate-fade-in"
            style={{ color: "#3D2E1F", animationDelay: "0.25s" }}
          >
            Avkoppling för
            <br />
            kropp och sinne
          </h1>

          {/* Small decorative divider */}
          <div className="flex items-center gap-2 justify-center md:justify-start mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-px" style={{ background: "#C8A96A" }} />
            <Sparkles className="w-4 h-4" style={{ color: "#C8A96A" }} />
            <div className="w-12 h-px" style={{ background: "#C8A96A" }} />
          </div>

          <p
            className="font-body text-base md:text-lg max-w-md mx-auto md:mx-0 mb-10 font-light leading-relaxed animate-fade-in"
            style={{ color: "#7A6B5D", animationDelay: "0.35s" }}
          >
            Upplev traditionell thaimassage i en lugn
            <br className="hidden md:block" />
            och harmonisk miljö – mitt i Kungälv
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="tel:0763019288"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-medium tracking-wider text-sm uppercase rounded-full text-white transition-all duration-300 hover:shadow-lg hover:brightness-95"
              style={{ backgroundColor: "#C8A96A" }}
            >
              <Phone className="w-4 h-4" /> Boka tid
            </a>
          </div>
        </div>

        {/* Right – Portrait with golden arc */}
        <div className="flex-1 flex justify-center md:justify-end relative mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Golden circle arc */}
          <div
            className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              border: "2px solid rgba(200, 169, 106, 0.3)",
              background: "radial-gradient(circle, rgba(200, 169, 106, 0.08) 0%, transparent 70%)",
            }}
          />
          {/* Subtle inner glow */}
          <div
            className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-20"
            style={{ background: "#C8A96A" }}
          />
          <img
            src={logo}
            alt="Sea Sky Thaimassage logotyp"
            className="relative z-10 w-64 md:w-80 lg:w-[360px] h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>

    {/* Bottom trust bar */}
    <div className="relative z-10">
      {/* Curved gold accent */}
      <div className="absolute bottom-full left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 48h1440V24C1200 0 240 0 0 24v24z" fill="rgba(200,169,106,0.08)" />
        </svg>
      </div>
      <div className="py-5 px-5 md:px-8" style={{ background: "rgba(200, 169, 106, 0.06)" }}>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-sm font-body" style={{ color: "#6B4F3A" }}>
            <Clock className="w-4 h-4" style={{ color: "#C8A96A" }} />
            <div>
              <p className="font-medium">Öppet alla dagar</p>
              <p className="text-xs opacity-70">10:00 – 21:00</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8" style={{ background: "rgba(200,169,106,0.3)" }} />
          <div className="flex items-center gap-2 text-sm font-body" style={{ color: "#6B4F3A" }}>
            <MapPin className="w-4 h-4" style={{ color: "#C8A96A" }} />
            <div>
              <p className="font-medium">Centralt i Kungälv</p>
              <p className="text-xs opacity-70">Komministergatan 18</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8" style={{ background: "rgba(200,169,106,0.3)" }} />
          <div className="flex items-center gap-2 text-sm font-body" style={{ color: "#6B4F3A" }}>
            <Sparkles className="w-4 h-4" style={{ color: "#C8A96A" }} />
            <div>
              <p className="font-medium">Lediga tider idag</p>
              <p className="text-xs opacity-70">Boka din stund</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
