"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { contact, navLinks } from "@/lib/content";
import { PhoneIcon, PillButton, cx } from "./ui";

function Logo({ white, className }: { white?: boolean; className?: string }) {
  return (
    <a href="#pocetna" aria-label="Poliklinika ORTHOS — početak stranice" className={cx("shrink-0", className)}>
      <Image
        src={white ? "/images/orthos-logo-white.png" : "/images/orthos-logo-color.png"}
        alt="Poliklinika ORTHOS"
        width={665}
        height={208}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </a>
  );
}

function MenuButton({ open, onClick, light, controls }: { open: boolean; onClick: () => void; light?: boolean; controls: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Zatvori meni" : "Otvori meni"}
      className={cx(
        "relative grid size-11 place-items-center rounded-full transition-colors lg:hidden",
        light ? "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md hover:bg-white/25" : "bg-mist text-ink hover:bg-sky",
      )}
    >
      <span className="sr-only">Meni</span>
      <span className={cx("absolute h-[1.5px] w-5 rounded bg-current transition-transform duration-300", open ? "rotate-45" : "-translate-y-[5px]")} />
      <span className={cx("absolute h-[1.5px] w-5 rounded bg-current transition-transform duration-300", open ? "-rotate-45" : "translate-y-[5px]")} />
    </button>
  );
}

function MobileMenu({ id, open, onClose }: { id: string; open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id={id}
      className={cx(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cx("absolute inset-0 bg-night/40 backdrop-blur-sm transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
      />
      <nav
        aria-label="Mobilna navigacija"
        className={cx(
          "absolute inset-x-3 top-3 max-h-[calc(100svh-24px)] overflow-y-auto rounded-[24px] bg-white p-5 shadow-2xl transition-all duration-400 ease-out",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <MenuButton open onClick={onClose} controls={id} />
        </div>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-between py-3.5 text-lg font-medium text-ink"
              >
                {l.label}
                <span className="text-muted">→</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 grid gap-3">
          <a
            href={contact.mobile.href}
            tabIndex={open ? 0 : -1}
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-medium text-white"
          >
            <PhoneIcon className="size-4" /> Pozovite {contact.mobile.label}
          </a>
          <a
            href={`mailto:${contact.email}`}
            tabIndex={open ? 0 : -1}
            className="flex h-12 items-center justify-center rounded-full bg-mist text-sm font-medium text-ink"
          >
            {contact.email}
          </a>
        </div>
      </nav>
    </div>
  );
}

/** Navigacija unutar hero sekcije (bijela, preko fotografije) */
export function HeroNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="relative z-20 flex items-center justify-between gap-6">
        <Logo white />
        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <PillButton href="#kontakt" size="sm">
              Zakažite pregled
            </PillButton>
          </span>
          <MenuButton open={open} onClick={() => setOpen((v) => !v)} light controls="mobilni-meni-hero" />
        </div>
      </header>
      <MobileMenu id="mobilni-meni-hero" open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/** Plutajuća navigacija koja se pojavi nakon skrolanja preko hero sekcije */
export function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={cx(
          "fixed inset-x-0 top-3 z-50 px-3 transition-all duration-500 ease-out sm:top-4",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0",
        )}
        aria-hidden={!visible}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-full bg-white/85 py-2 pr-2 pl-5 shadow-[0_12px_40px_-12px_rgba(15,27,45,0.25)] ring-1 ring-black/5 backdrop-blur-xl">
          <Logo className="[&_img]:h-8 sm:[&_img]:h-8" />
          <nav aria-label="Navigacija" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    tabIndex={visible ? 0 : -1}
                    className="rounded-full px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-mist hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <PillButton href="#kontakt" size="sm">
                Zakažite pregled
              </PillButton>
            </span>
            <MenuButton open={open} onClick={() => setOpen((v) => !v)} controls="mobilni-meni" />
          </div>
        </div>
      </div>
      <MobileMenu id="mobilni-meni" open={open} onClose={() => setOpen(false)} />
    </>
  );
}
