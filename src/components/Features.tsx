const features = [
  {
    title: "Real-Time Tracking",
    description: "Continuous magnetic field monitoring provides instant position updates during drilling operations."
  },
  {
    title: "High Precision",
    description: "Achieves millimeter-level accuracy in challenging soil conditions and deep installations."
  },
  {
    title: "Easy Operation",
    description: "Intuitive software interface reduces learning curve and enables rapid deployment on site."
  },
  {
    title: "All-Weather Performance",
    description: "Reliable operation in various environmental conditions, from deserts to coastal areas."
  },
  {
    title: "Comprehensive Support",
    description: "Technical training, on-site installation guidance, and lifetime software updates included."
  },
  {
    title: "Cost Effective",
    description: "Competitive pricing with no hidden costs, offering excellent value for HDD contractors."
  }
];

export function Features() {
  return (
    <section id="products" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose SmartDrill?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Trusted by HDD contractors worldwide for precision, reliability, and performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
