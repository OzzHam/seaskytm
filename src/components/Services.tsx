const services = [
  {
    title: "Oljemassage",
    prices: [
      { duration: "30 min", price: "400 kr" },
      { duration: "45 min", price: "500 kr" },
      { duration: "60 min", price: "600 kr" },
      { duration: "90 min", price: "1 000 kr" },
    ],
  },
  {
    title: "Thaimassage",
    prices: [
      { duration: "30 min", price: "500 kr" },
      { duration: "45 min", price: "600 kr" },
      { duration: "60 min", price: "700 kr" },
      { duration: "90 min", price: "1 100 kr" },
    ],
  },
];

const Services = () => (
  <section id="tjanster" className="section-padding bg-sand">
    <div className="container mx-auto max-w-4xl">
      <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground text-center mb-12">
        Våra tjänster och priser
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-background rounded-sm p-8 md:p-10 shadow-sm"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
              {service.title}
            </h3>
            <ul className="space-y-4">
              {service.prices.map((item) => (
                <li
                  key={item.duration}
                  className="flex justify-between items-center font-body text-foreground border-b border-border pb-3 last:border-0"
                >
                  <span>{item.duration}</span>
                  <span className="font-medium text-gold-dark">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="tel:0763019288"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wide rounded-sm hover:bg-gold-dark transition-colors"
        >
          Boka tid nu
        </a>
      </div>
    </div>
  </section>
);

export default Services;
