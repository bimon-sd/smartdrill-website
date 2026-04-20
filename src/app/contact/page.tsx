import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Get in touch for product information, pricing, or project consultation
            </p>
          </div>
        </section>

        {/* Existing Contact Component */}
        <Contact />

        {/* FAQ Section */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "What is the maximum tracking depth?",
                  a: "Our guide wire tracking system can achieve up to 300m depth with large coil configuration. BTS offers up to 180m range."
                },
                {
                  q: "Can the system work in all soil conditions?",
                  a: "SmartDrill systems are designed to work in various formations including clay, sand, sandstone, granite, and limestone. Some conditions may require specific tracking methods."
                },
                {
                  q: "Do you provide technical training?",
                  a: "Yes, we provide comprehensive technical training and on-site installation guidance for all our products."
                },
                {
                  q: "What support do you offer?",
                  a: "We offer 24/7 technical support, lifetime software updates, and professional consultation for your HDD projects."
                }
              ].map((item, index) => (
                <div key={index} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-white font-medium mb-2">{item.q}</h3>
                  <p className="text-white/60 text-sm">{item.a}</p>
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
