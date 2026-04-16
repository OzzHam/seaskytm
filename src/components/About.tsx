import portrait from "@/assets/portrait.png";

const About = () => (
  <section id="om-oss" className="section-padding bg-warm-white">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-72 md:w-80">
            <div className="absolute -inset-3 bg-sand rounded-sm" />
            <img
              src={portrait}
              alt="massage kungälv salong"
              className="relative rounded-sm w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-8">
            Om Sae Sky Thaimassage
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mb-4">
            Välkommen till Sae Sky Thaimassage i Kungälv – en plats där kropp och sinne får återhämta sig.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mb-4">
            Vi erbjuder traditionell thailändsk massage och oljemassage som hjälper till att minska stress och spänningar. Våra behandlingar utförs med omsorg och fokus på kvalitet.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg">
            Hos oss får du en personlig behandling anpassad efter dina behov.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
