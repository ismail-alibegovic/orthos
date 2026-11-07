import type { ComponentProps, ReactNode } from "react";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ---------- Icons (inline, no icon library) ---------- */

type IconProps = ComponentProps<"svg">;

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

/* ---------- Section label: "• O nama" ---------- */

export function SectionLabel({
  children,
  className,
  light,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cx(
        "inline-flex items-center gap-2 text-[13px] font-medium",
        light ? "text-white/80" : "text-ink-soft",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ---------- Pill button with circular arrow (reference CTA) ---------- */

type PillProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "light" | "outline";
  size?: "sm" | "md";
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

export function PillButton({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
  external,
  icon,
}: PillProps) {
  const styles = {
    solid: "bg-brand text-white hover:bg-brand-deep shadow-[0_8px_24px_-10px_rgba(22,136,201,0.8)]",
    light: "bg-white text-ink hover:bg-sky",
    outline: "bg-transparent text-ink ring-1 ring-inset ring-line hover:ring-brand/40 hover:bg-sky/60",
  }[variant];
  const circle = {
    solid: "bg-white text-brand",
    light: "bg-brand text-white",
    outline: "bg-brand text-white",
  }[variant];
  const sizes =
    size === "sm"
      ? "h-10 pl-4 pr-1 text-[13px] gap-3"
      : "h-12 pl-5 pr-1.5 text-sm gap-4";
  const circleSize = size === "sm" ? "size-8" : "size-9";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cx(
        "group inline-flex shrink-0 items-center rounded-full font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        styles,
        sizes,
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cx(
          "grid place-items-center rounded-full transition-transform duration-500 ease-out group-hover:rotate-45",
          circle,
          circleSize,
        )}
      >
        {icon ?? <ArrowUpRight className="size-4" />}
      </span>
    </a>
  );
}
