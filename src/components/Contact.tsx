import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <section id="kontakt" className="section-padding bg-warm-white">
    <div className="container mx-auto max-w-4xl">
      <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground text-center mb-12">
        Kontakta oss
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="font-body text-foreground">
              <p className="font-medium">Sae Sky Thaimassage</p>
              <p className="text-muted-foreground">Komministergatan 18</p>
              <p className="text-muted-foreground">442 30 Kungälv, Sverige</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="font-body">
              <a href="tel:0763019288" className="text-foreground font-medium hover:text-primary transition-colors">
                076-301 92 88
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="font-body text-foreground">
              <p className="font-medium">Öppettider</p>
              <p className="text-muted-foreground">10:00 – 21:00, alla dagar</p>
            </div>
          </div>
          <a
            href="tel:0763019288"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wide rounded-sm hover:bg-gold-dark transition-colors mt-4"
          >
            <Phone className="w-5 h-5" />
            Ring nu
          </a>
        </div>
        <div className="rounded-sm overflow-hidden shadow-sm h-72 md:h-auto min-h-[280px]">
          <iframe
            title="Sae Sky Thaimassage karta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2119.5!2d11.9726!3d57.8711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDUyJzE2LjAiTiAxMcKwNTgnMjEuNCJF!5e0!3m2!1ssv!2sse!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
