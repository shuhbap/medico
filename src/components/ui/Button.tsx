import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn"; // we'll add a tiny cn helper

type Variant = "primary" | "secondary" | "ghost" | "emergency" | "outline";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  full?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-glow active:scale-[0.98]",
  secondary:
    "bg-white text-ink border border-ink/10 hover:border-brand-500 hover:text-brand-600 shadow-soft",
  ghost: "text-ink hover:bg-ink/5",
  outline: "border border-brand-500 text-brand-600 hover:bg-brand-50",
  emergency:
    "bg-emergency text-white hover:bg-emergency-dark shadow-[0_8px_32px_rgba(230,57,70,0.28)] active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 h-9",
  md: "text-sm px-5 h-11",
  lg: "text-base px-7 h-13 py-3.5",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", size = "md", full, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "btn-base",
        variants[variant],
        sizes[size],
        full && "w-full",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
