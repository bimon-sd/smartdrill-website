import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SmartDrill"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-white font-bold text-xl tracking-tight">SmartDrill</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
            <a href="#videos" className="text-white/80 hover:text-white transition-colors">Videos</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
