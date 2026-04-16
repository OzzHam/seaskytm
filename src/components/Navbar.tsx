import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Sea Sky Thaimassage logotyp" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:0763019288" className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-gold-dark transition-colors">
            📞 Boka tid
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Meny">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-5 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block font-body text-sm text-muted-foreground py-2">
              {l.label}
            </a>
          ))}
          <a href="tel:0763019288" className="block text-center px-5 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm">
            Boka tid
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
