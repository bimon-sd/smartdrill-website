export function VideoSection() {
  return (
    <section id="videos" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Product Videos</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Watch our comprehensive tutorials covering system setup, operation, and data analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoList.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all"
            >
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                <svg className="w-16 h-16 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">{video.title}</h3>
                <p className="text-white/50 text-sm">{video.duration}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm">More videos available on our YouTube channel</p>
        </div>
      </div>
    </section>
  );
}

const videoList = [
  { title: "Underground Equipment Connection", duration: "4:05", url: "https://youtube.com" },
  { title: "Ground Equipment Setup", duration: "1:12", url: "https://youtube.com" },
  { title: "Software Interface Guide", duration: "2:33", url: "https://youtube.com" },
  { title: "Data Acquisition Tutorial", duration: "2:42", url: "https://youtube.com" },
  { title: "Key Concepts Explained", duration: "2:31", url: "https://youtube.com" },
  { title: "Plan Data Workflow", duration: "2:46", url: "https://youtube.com" },
];
