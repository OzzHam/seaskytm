import portrait from "@/assets/portrait.png";
import portrait2 from "@/assets/portrait2.png";
import portrait3 from "@/assets/portrait3.png";

const About = () => (
    <section id="om-oss" className="section-padding bg-warm-white">
        <div className="container mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="flex flex-col gap-4 items-center">
                                <div className="relative w-72 md:w-80">
                                            <div className="absolute -inset-3 bg-sand rounded-sm" />
                                            <img
                                                            src={portrait2}
                                                            alt="massage personal kungälv"
                                                            className="relative rounded-sm w-full h-auto object-cover"
                                                            loading="lazy"
                                                          />
                                </div>div>
                                <div className="relative w-72 md:w-80">
                                            <div className="absolute -inset-3 bg-sand rounded-sm" />
                                            <img
                                                            src={portrait3}
                                                            alt="massage personal kungälv"
                                                            className="relative rounded-sm w-full h-auto object-cover"
                                                            loading="lazy"
                                                          />
                                </div>div>
                                <div className="relative w-72 md:w-80">
                                            <div className="absolute -inset-3 bg-sand rounded-sm" />
                                            <img
                                                            src={portrait}
                                                            alt="massage kungälv salong"
                                                            className="relative rounded-sm w-full h-auto object-cover"
                                                            loading="lazy"
                                                          />
                                </div>div>
                      </div>div>
                      <div>
                                <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-8">
                                            Om Sea Sky Thaimassage
                                </h2>h2>
                                <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mb-4">
                                            Välkommen till Sea Sky Thaimassage i Kungälv – en plats där kropp och sinne får återhämta sig.
                                </p>p>
                                <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mb-4">
                                            Vi erbjuder traditionell thailändsk massage och oljemassage som hjälper till att minska stress och spänningar. Våra behandlingar utförs med omsorg och fokus på kvalitet.
                                </p>p>
                                <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg">
                                            Hos oss får du en personlig behandling anpassad efter dina behov.
                                </p>p>
                      </div>div>
              </div>div>
        </div>div>
    </section>section>
  );

export default About;</section>
