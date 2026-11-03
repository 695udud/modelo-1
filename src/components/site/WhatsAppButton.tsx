import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function WhatsAppButton({ label = "Fale pelo WhatsApp", variant = "solid", className }: { label?: string; variant?: "solid" | "outline"; className?: string }) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
        variant === "solid"
          ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_var(--color-primary)] hover:bg-primary/90"
          : "border border-foreground/20 text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
