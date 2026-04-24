"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import uploadedVideos from "@/lib/uploaded_videos.json";

const videos = uploadedVideos.map((v) => ({
  titleKey: v.title,
  duration: "",
  description: v.description,
  youtubeId: v.youtubeId,
  youtubeUrl: v.youtubeUrl,
  fileName: v.fileName,
}));

export default function VideosPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('videos.title')}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('videos.subtitle')}
            </p>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all group"
                >
                  {video.youtubeId ? (
                    <div className="aspect-video bg-zinc-800">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.titleKey}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                      <svg className="w-16 h-16 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white/60">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-1">{video.titleKey}</h3>
                    <p className="text-white/50 text-sm">{video.description}</p>
                    {video.youtubeUrl && (
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-blue-400 hover:text-blue-300 text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        Watch on YouTube
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Full Product Demonstration</h2>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Watch the complete SmartDrill system in action with our comprehensive English product video.
                  The full demonstration covers all aspects of system operation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.youtube.com/playlist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    Watch Full Video
                  </a>
                  <a
                    href="mailto:bimongl@gmail.com?subject=SmartDrill Video Request"
                    className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Request Video Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
