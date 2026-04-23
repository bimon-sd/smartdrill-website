"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/features", label: t('nav.products') },
    { href: "/videos", label: t('nav.videos') },
    { href: "/case-studies", label: t('nav.caseStudies') },
    { href: "/about", label: t('nav.about') },
    { href: "/contact", label: t('nav.contact') }
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SmartDrill"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-white font-bold text-xl tracking-tight">SmartDrill</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm lg:text-base ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              {t('nav.getQuote')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
