export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About SmartDrill Technologies</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                SmartDrill Technologies is a leading provider of magnetic guidance systems for horizontal directional drilling (HDD). Based in Qingdao, China, we serve HDD contractors worldwide with precision tracking solutions.
              </p>
              <p>
                Our SmartDrill Guided System combines advanced magnetic sensor technology with intuitive software, enabling operators to achieve precise bore paths in challenging ground conditions.
              </p>
              <p>
                With years of field experience and continuous innovation, we understand the real-world challenges of HDD operations. Our system is designed to be reliable, accurate, and easy to operate in any environment.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">100+</div>
                <div className="text-white/50 text-sm mt-1">Projects Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">10+</div>
                <div className="text-white/50 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">24/7</div>
                <div className="text-white/50 text-sm mt-1">Technical Support</div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-xl font-semibold text-white mb-6">Our Expertise</h3>
            <ul className="space-y-4">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const expertise = [
  "Magnetic guidance technology for HDD drilling",
  "Real-time bore path tracking and visualization",
  "Soil condition adaptation and calibration",
  "Professional training and on-site support",
  "Custom solutions for challenging projects",
  "Lifetime software updates and maintenance"
];
