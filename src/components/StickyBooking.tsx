import { Phone } from "lucide-react";

const StickyBooking = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-sm p-3 shadow-lg">
    <div className="flex gap-3">
      <a
        href="tel:0763019288"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-primary-foreground text-foreground font-body font-medium rounded-sm text-sm"
      >
        <Phone className="w-4 h-4" />
        Ring nu
      </a>
      <a
        href="tel:0763019288"
        className="flex-1 inline-flex items-center justify-center py-3 bg-gold-dark text-primary-foreground font-body font-medium rounded-sm text-sm"
      >
        Boka tid
      </a>
    </div>
  </div>
);

export default StickyBooking;
