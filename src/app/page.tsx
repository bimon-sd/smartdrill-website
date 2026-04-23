"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/caseStudies";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const previewCases = caseStudies.slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              {t('home.hero.title')} <span className="text-blue-500">{t('home.hero.subtitle')}</span>
              <br />{t('home.hero.subtitle')}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/features"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                {t('home.hero.exploreProducts')}
              </Link>
              <Link
                href="/case-studies"
                className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white/5"
              >
                {t('home.hero.viewCaseStudies')}
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* System Overview Section */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('home.systemDelivered.title')}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {t('home.systemDelivered.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm text-center">{t('home.systemDelivered.crate1')}</p>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm text-center">{t('home.systemDelivered.crate2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('home.featuredProjects.title')}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {t('home.featuredProjects.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewCases.map((caseStudy, index) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} priority={index < 3} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors"
              >
                {t('home.featuredProjects.viewAll')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose SmartDrill - Condensed */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('home.whyChoose.title')}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {t('home.whyChoose.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('home.whyChoose.items.realTime')}</h3>
                <p className="text-white/60 text-sm">{t('home.whyChoose.items.realTimeDesc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('home.whyChoose.items.highPrecision')}</h3>
                <p className="text-white/60 text-sm">{t('home.whyChoose.items.highPrecisionDesc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('home.whyChoose.items.easyOperation')}</h3>
                <p className="text-white/60 text-sm">{t('home.whyChoose.items.easyOperationDesc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('home.whyChoose.items.allWeather')}</h3>
                <p className="text-white/60 text-sm">{t('home.whyChoose.items.allWeatherDesc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('home.whyChoose.items.support')}</h3>
                <p className="text-white/60 text-sm">{t('home.whyChoose.items.supportDesc')}</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-2">{t('home.whyChoose.items.costEffective')}</h3>
                <p className="text-white/60 text-sm">{t('home.whyChoose.items.costEffectiveDesc')}</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                {t('home.whyChoose.viewAllProducts')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Videos Preview */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('home.videos.title')}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {t('home.videos.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                  <svg className="w-12 h-12 text-white/80 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">{t('videos.undergroundEquipment')}</h3>
                  <p className="text-white/50 text-sm">4:05</p>
                </div>
              </div>
              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                  <svg className="w-12 h-12 text-white/80 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">{t('videos.groundEquipment')}</h3>
                  <p className="text-white/50 text-sm">1:12</p>
                </div>
              </div>
              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                  <svg className="w-12 h-12 text-white/80 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">{t('videos.softwareInterface')}</h3>
                  <p className="text-white/50 text-sm">2:33</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors"
              >
                {t('home.videos.viewAll')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
