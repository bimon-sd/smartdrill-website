"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('about.title')}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Existing About Component */}
        <About />

        {/* Additional Content */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Range */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-6">{t('about.productRange')}</h3>
                <ul className="space-y-3">
                  {[
                    "Steering Tool (Probe)",
                    "Beacon Tracking System (BTS)",
                    "Mini Beacon",
                    "Wireless Remote Control (WRC)",
                    "Guide Wire Tracking",
                    "PWD (Pressure While Drilling)",
                    "Intersect Tracking System",
                    "SmartCross Guidance Software"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/70">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-6">{t('about.applications')}</h3>
                <ul className="space-y-3">
                  {[
                    { key: 'river', text: t('about.appItems.river') },
                    { key: 'mountain', text: t('about.appItems.mountain') },
                    { key: 'highway', text: t('about.appItems.highway') },
                    { key: 'urban', text: t('about.appItems.urban') },
                    { key: 'oilGas', text: t('about.appItems.oilGas') },
                    { key: 'water', text: t('about.appItems.water') },
                    { key: 'telecom', text: t('about.appItems.telecom') },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/70">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
