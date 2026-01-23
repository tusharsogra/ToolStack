import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"></div>

        <div className="text-center max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            One Platform. <br />
            <span className="text-orange-500">All Your Daily Tools</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Convert, analyze, generate, and optimize files directly in your browser.
            No signup. No limits. Fully secure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/tools"
              className="px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Explore Tools
            </NavLink>

            <NavLink
              to="/how-it-works"
              className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
            >
              How It Works
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Trusted for Productivity & Simplicity
          </h2>
          <p className="mt-4 text-gray-400">
            Designed for students, developers, creators, and professionals.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
            <div>
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm mt-1">Tools</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm mt-1">Browser Based</p>
            </div>
            <div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-sm mt-1">Signup Required</p>
            </div>
            <div>
              <p className="text-3xl font-bold">Fast</p>
              <p className="text-sm mt-1">Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE GRID ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Choose <span className="text-orange-500">Our Tools</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Privacy First", "Your files never leave your device."],
              ["Lightning Fast", "Optimized for instant results."],
              ["Modern UI", "Clean, minimal, and distraction-free."],
              ["Mobile Friendly", "Works perfectly on any device."],
              ["All-in-One", "PDF, Image, Text & Dev tools together."],
              ["Free Forever", "No hidden costs or limitations."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-black/60 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS PREVIEW ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Simple. <span className="text-orange-500">Fast. Secure.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Choose Tool",
              "Upload / Input",
              "Process Instantly",
              "Download Result",
            ].map((step, i) => (
              <div
                key={i}
                className="text-center rounded-xl border border-white/10 p-6 bg-black/50"
              >
                <p className="text-4xl font-bold text-gray-500">{i + 1}</p>
                <p className="mt-3 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Boost <span className="text-orange-500">Your Productivity?</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Start using powerful tools instantly — no signup required.
          </p>

          <NavLink
            to="/tools"
            className="inline-block mt-10 px-10 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Get Started
          </NavLink>
        </div>
      </section>

    </main>
  );
};

export default Home;
