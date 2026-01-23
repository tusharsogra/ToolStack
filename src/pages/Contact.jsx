const Contact = () => {
  return (
    <section className="bg-black text-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-center text-gray-400 mt-4">
          Have questions, feedback, or feature requests? We’d love to hear from you.
        </p>

        <form className="mt-12 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30"
          ></textarea>

          <button
            type="button"
            className="w-full rounded-full border border-white/20 py-3 hover:bg-white hover:text-black transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
