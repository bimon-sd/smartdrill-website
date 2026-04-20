import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/lib/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  priority?: boolean;
}

export function CaseStudyCard({ caseStudy, priority = false }: CaseStudyCardProps) {
  const hasImages = caseStudy.images && caseStudy.images.length > 0;

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all hover:-translate-y-1"
    >
      <div className="aspect-video bg-zinc-800 relative overflow-hidden">
        {hasImages ? (
          <Image
            src={caseStudy.images[0]}
            alt={caseStudy.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={priority}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
            {caseStudy.title}
          </h3>
        </div>
      </div>
      <div className="p-4">
        {caseStudy.stats.length && (
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{caseStudy.stats.length}</span>
          </div>
        )}
        {caseStudy.location && (
          <p className="text-white/40 text-xs mt-2">{caseStudy.location}</p>
        )}
      </div>
    </Link>
  );
}
