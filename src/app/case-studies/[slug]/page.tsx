import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { caseStudies, getCaseStudyBySlug, getAdjacentCaseStudies } from "@/lib/caseStudies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return { title: "Not Found" };
  return { title: `${caseStudy.title} | SmartDrill` };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { prev, next } = getAdjacentCaseStudies(slug);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Cover Image */}
        <section className="pt-20">
          <div className="h-[40vh] bg-zinc-900 relative overflow-hidden">
            {caseStudy.images && caseStudy.images.length > 0 ? (
              <Image
                src={caseStudy.images[0]}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {caseStudy.title}
              </h1>
              {caseStudy.location && (
                <p className="text-white/60 mt-2">{caseStudy.location}</p>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {caseStudy.stats.length && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{caseStudy.stats.length}</div>
                  <div className="text-white/40 text-sm mt-1">Length</div>
                </div>
              )}
              {caseStudy.stats.pipeSpec && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{caseStudy.stats.pipeSpec}</div>
                  <div className="text-white/40 text-sm mt-1">Pipe Spec</div>
                </div>
              )}
              {caseStudy.stats.elevation && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{caseStudy.stats.elevation}</div>
                  <div className="text-white/40 text-sm mt-1">Elevation</div>
                </div>
              )}
              {caseStudy.stats.formation && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 text-sm">{caseStudy.stats.formation}</div>
                  <div className="text-white/40 text-sm mt-1">Formation</div>
                </div>
              )}
              {caseStudy.stats.rigs && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 text-sm">{caseStudy.stats.rigs}</div>
                  <div className="text-white/40 text-sm mt-1">HDD Rigs</div>
                </div>
              )}
              {caseStudy.stats.guidance && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 text-sm">{caseStudy.stats.guidance}</div>
                  <div className="text-white/40 text-sm mt-1">Guidance</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Description Section */}
        {!caseStudy.isImageOnly && (
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-white mb-6">Project Description</h2>
                <div className="text-white/70 leading-relaxed whitespace-pre-line">
                  {caseStudy.description}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Image Gallery */}
        {caseStudy.images && caseStudy.images.length > 0 && (
          <section className="py-16 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                {caseStudy.isImageOnly ? "Project Images" : "Project Gallery"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudy.images.map((image, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 aspect-video relative"
                  >
                    <Image
                      src={image}
                      alt={`${caseStudy.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prev ? (
                <Link
                  href={`/case-studies/${prev.slug}`}
                  className="flex-1 bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="text-white/40 text-sm mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous Project
                  </div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {prev.title}
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  href={`/case-studies/${next.slug}`}
                  className="flex-1 bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-blue-500/50 transition-all group text-right"
                >
                  <div className="text-white/40 text-sm mb-2 flex items-center justify-end gap-2">
                    Next Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {next.title}
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
