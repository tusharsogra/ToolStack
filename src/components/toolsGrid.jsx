import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

/* ================= INTEGRATED TOOL DATA ================= */

const toolSections = [
  {
    title: "Document & Office Tools",
    desc: "Professional tools to reduce manual document work.",
    tools: [
      {
        name: "Resume Builder",
        route: "/resume-builder",
        description: "Build ATS-friendly resumes with live preview.",
      },
      {
        name: "PDF Toolkit",
        route: "/pdf-toolkit",
        description: "Merge, split, reorder and preview PDF files.",
      },
      {
        name: "CSV Viewer",
        route: "/csv-viewer",
        description: "View, filter and sort CSV files instantly.",
      },
    ],
  },
  {
    title: "Developer Utilities",
    desc: "Frontend utilities used daily by developers.",
    tools: [
      {
        name: "JSON Formatter",
        route: "/json-formatter",
        description: "Validate, format and minify JSON data.",
      },
      {
        name: "Regex Tester",
        route: "/regex-tester",
        description: "Test regex patterns with real-time matching.",
      },
      {
        name: "API Request Builder",
        route: "/api-request-builder",
        description: "Postman-like API request simulator.",
      },
    ],
  },
  {
    title: "Text & Productivity Tools",
    desc: "Improve writing, security and daily planning.",
    tools: [
      {
        name: "Text Analyzer",
        route: "/text-analyzer",
        description: "Word count, readability & keyword density.",
      },
      {
        name: "Password Strength Checker",
        route: "/password-strength",
        description: "Analyze password strength instantly.",
      },
      {
        name: "Task Planner",
        route: "/task-planner",
        description: "Organize daily tasks efficiently.",
      },
    ],
  },
  {
    title: "Design & UI Tools",
    desc: "Frontend-focused design utilities.",
    tools: [
      {
        name: "Color Palette Generator",
        route: "/color-palette",
        description: "Generate accessible UI color palettes.",
      },
      {
        name: "Tailwind UI Playground",
        route: "/tailwind-playground",
        description: "Experiment with Tailwind UI components.",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

const ToolsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            ToolStack <span className="text-gray-400">Platform</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Industrial frontend tools to improve productivity.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-16 space-y-6">
          {toolSections.map((section, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={section.title}
                className="rounded-2xl border border-white/10 bg-black/40"
              >
                {/* Header */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6"
                >
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">
                      {section.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {section.desc}
                    </p>
                  </div>

                  <span
                    className={`text-2xl transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Content */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  }}
                  className="overflow-hidden transition-all duration-500"
                >
                  <div className="p-6 pt-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.tools.map((tool) => (
                      <NavLink
                        key={tool.route}
                        to={tool.route}
                        className="group"
                      >
                        <div className="rounded-xl border border-white/10 p-6 bg-black/70 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                          <h4 className="text-lg font-medium">
                            {tool.name}
                          </h4>
                          <p className="mt-2 text-sm text-gray-400">
                            {tool.description}
                          </p>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ToolsGrid;
