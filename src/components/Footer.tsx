const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 font-body text-sm py-10 px-5 md:px-8 pb-24 md:pb-10">
    <div className="container mx-auto max-w-4xl text-center space-y-2">
      <p className="text-primary-foreground font-heading text-lg font-semibold">Sea Sky Thaimassage</p>
      <p>Komministergatan 18, 442 30 Kungälv</p>
      <p>
        <a href="tel:0763019288" className="hover:text-primary-foreground transition-colors">076-301 92 88</a>
      </p>
      <p className="pt-4 text-primary-foreground/40">© {new Date().getFullYear()} Sea Sky Thaimassage. Alla rättigheter förbehållna.</p>
    </div>
  </footer>
);

export default Footer;
