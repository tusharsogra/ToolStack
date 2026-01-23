const features = [
  {
    title: "No Signup Required",
    desc: "Use all tools instantly without creating an account.",
  },
  {
    title: "Fast & Secure",
    desc: "All processing happens in your browser. Your data stays private.",
  },
  {
    title: "All-in-One Platform",
    desc: "PDF, Image, Text, and Developer tools in one place.",
  },
  {
    title: "Mobile Friendly",
    desc: "Optimized for desktop, tablet, and mobile devices.",
  },
  {
    title: "Modern UI",
    desc: "Clean, dark-themed interface with smooth animations.",
  },
  {
    title: "Free to Use",
    desc: "No hidden charges. Completely free tools for everyone.",
  },
];

const Feature = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Powerful <span className="text-orange-500">Features</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-black/50 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feature;
