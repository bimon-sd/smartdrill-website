import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/caseStudies";
import Link from "next/link";

export default function Home() {
  // Get first 6 case studies for preview
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
              Precision <span className="text-blue-500">HDD Intersection</span>
              <br />Magnetic Guidance System
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              SmartDrill provides real-time magnetic tracking for horizontal directional drilling,
              enabling precise pipeline installations across challenging terrains worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/features"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Explore Products
              </Link>
              <Link
                href="/case-studies"
                className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white/5"
              >
                View Case Studies
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Complete System Delivered</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Full System · Ready to Deploy · 2-Crate Export Packaging
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm text-center">Crate 1 - Main Equipment</p>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm text-center">Crate 2 - Accessories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Real-world HDD projects completed with SmartDrill guidance systems
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
                View All Case Studies
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose SmartDrill?</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Trusted by HDD contractors worldwide for precision, reliability, and performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Real-Time Tracking", desc: "Continuous magnetic field monitoring provides instant position updates" },
                { title: "High Precision", desc: "Millimeter-level accuracy in challenging soil conditions" },
                { title: "Easy Operation", desc: "Intuitive software interface reduces learning curve" },
                { title: "All-Weather", desc: "Reliable operation in various environmental conditions" },
                { title: "Comprehensive Support", desc: "Technical training and lifetime software updates" },
                { title: "Cost Effective", desc: "Competitive pricing with no hidden costs" }
              ].map((item, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View All Products
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Product Videos</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Watch comprehensive tutorials covering system setup and operation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Underground Equipment Connection", duration: "4:05" },
                { title: "Ground Equipment Setup", duration: "1:12" },
                { title: "Software Interface Guide", duration: "2:33" }
              ].map((video, index) => (
                <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                  <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                    <svg className="w-12 h-12 text-white/80 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-1">{video.title}</h3>
                    <p className="text-white/50 text-sm">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors"
              >
                View All Videos
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
