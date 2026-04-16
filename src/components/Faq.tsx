import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vad händer vid första besöket?",
    a: "Vid ditt första besök går vi igenom dina önskemål och eventuella besvär. Sedan anpassar vi behandlingen efter dina behov för bästa möjliga upplevelse.",
  },
  {
    q: "Hur går en thaimassage till?",
    a: "Thaimassage utförs på en bekväm madrass. Terapeuten använder tryck, stretching och akupressur för att lösa upp spänningar och förbättra rörligheten.",
  },
  {
    q: "Gör thaimassage ont?",
    a: "Thaimassage ska inte göra ont. Trycket anpassas efter din komfortnivå. Säg gärna till under behandlingen om du vill ha mer eller mindre tryck.",
  },
  {
    q: "Vad är skillnaden mellan thaimassage och oljemassage?",
    a: "Thaimassage är en torrmassage med stretching och akupressur. Oljemassage utförs med olja och har mer glidande rörelser – perfekt för djup avkoppling.",
  },
  {
    q: "Hur ofta bör man gå på massage?",
    a: "För bästa resultat rekommenderar vi regelbunden massage varannan till var fjärde vecka. Vid akuta besvär kan tätare behandlingar vara fördelaktigt.",
  },
  {
    q: "Är thaimassage bra för ryggont?",
    a: "Ja, thaimassage kan vara mycket effektivt för ryggbesvär. Stretchingen och akupressuren hjälper till att lösa muskelspänningar och förbättra hållningen.",
  },
];

const Faq = () => (
  <section id="faq" className="section-padding bg-sand">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground text-center mb-12">
        Vanliga frågor
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-sm px-6 border-none">
            <AccordionTrigger className="font-body font-medium text-foreground text-left py-5 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Faq;
