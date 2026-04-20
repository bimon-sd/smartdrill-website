import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real-world projects demonstrating SmartDrill precision guidance solutions
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.slug}
                  caseStudy={caseStudy}
                  priority={index < 3}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
                <div className="text-white/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">3,000m+</div>
                <div className="text-white/60">Longest Crossing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
                <div className="text-white/60">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">0.5m</div>
                <div className="text-white/60">Encounter Accuracy</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
