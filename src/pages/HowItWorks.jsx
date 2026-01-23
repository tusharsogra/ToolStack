const steps = [
  {
    title: "Choose a Tool",
    desc: "Browse from our categorized tools like PDF, Image, Text, and Dev utilities.",
  },
  {
    title: "Upload or Input",
    desc: "Upload files or enter text depending on the tool you choose.",
  },
  {
    title: "Process Instantly",
    desc: "Our tools process everything directly in your browser.",
  },
  {
    title: "Download Result",
    desc: "Get your output instantly with no signup required.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How It <span className="text-orange-500">Works</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-black/50 p-6 hover:shadow-xl transition"
            >
              <span className="text-4xl font-bold text-gray-500">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
