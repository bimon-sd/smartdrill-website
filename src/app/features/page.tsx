import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, magneticGuidanceSystem } from "@/lib/products";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Product Features</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive magnetic guidance solutions for horizontal directional drilling
            </p>
          </div>
        </section>

        {/* Magnetic Guidance System Overview */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{magneticGuidanceSystem.title}</h2>
              <p className="text-white/60 text-lg">{magneticGuidanceSystem.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {magneticGuidanceSystem.components.map((comp, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{comp.name}</h3>
                  <p className="text-white/60 text-sm">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  id={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="text-blue-500 text-sm font-medium uppercase tracking-wider">
                      {product.subtitle}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-2 mb-4">{product.name}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{product.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-white font-medium mb-2 text-sm uppercase tracking-wider text-blue-400">
                          Specifications
                        </h4>
                        <ul className="space-y-2">
                          {product.specs.map((spec, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                              <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-sm uppercase tracking-wider text-blue-400">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`bg-zinc-900 rounded-2xl p-8 border border-zinc-800 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="bg-zinc-800 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    {product.specsImage && (
                      <div className="mt-4 bg-zinc-800 rounded-xl p-4">
                        <p className="text-white/40 text-xs text-center mb-2">Specifications Diagram</p>
                        <div className="bg-zinc-700 rounded aspect-video flex items-center justify-center overflow-hidden">
                          <img
                            src={product.specsImage}
                            alt={`${product.name} specs`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
