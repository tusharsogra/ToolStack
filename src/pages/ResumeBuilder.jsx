import { useState } from "react";
import jsPDF from "jspdf";

export default function ModernResumeBuilder() {
  const [resume, setResume] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    skills: "",
    experience: "",
    projects: "",
    education: "",
  });

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  /* ===== ATS FRIENDLY PDF DOWNLOAD ===== */
  const downloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    let y = 20;

    const section = (title, text) => {
      if (!text) return;
      pdf.setFont("helvetica", "bold");
      pdf.text(title.toUpperCase(), 20, y);
      y += 6;
      pdf.setFont("helvetica", "normal");
      pdf.text(text, 20, y, { maxWidth: 170 });
      y += 10;
    };

    pdf.setFontSize(18);
    if (resume.name) {
      pdf.text(resume.name, 20, y);
      y += 8;
    }

    pdf.setFontSize(12);
    if (resume.title) {
      pdf.text(resume.title, 20, y);
      y += 6;
    }

    pdf.setFontSize(10);
    const contact = [resume.email, resume.phone, resume.location]
      .filter(Boolean)
      .join(" | ");
    if (contact) {
      pdf.text(contact, 20, y);
      y += 12;
    }

    section("Summary", resume.summary);
    section("Skills", resume.skills);
    section("Experience", resume.experience);
    section("Projects", resume.projects);
    section("Education", resume.education);

    pdf.save("Resume.pdf");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Resume Builder
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* ===== FORM ===== */}
        <div className="space-y-4">
          {Object.keys(resume).map((field) => (
            <div key={field}>
              <label className="text-sm text-gray-400 capitalize">
                {field}
              </label>
              <textarea
                name={field}
                value={resume[field]}
                onChange={handleChange}
                rows={field === "summary" ? 3 : 2}
                placeholder={`Enter your ${field}`}
                className="w-full mt-1 p-3 bg-[#111] border border-gray-700 rounded-lg focus:outline-none focus:border-white"
              />
            </div>
          ))}

          <button
            onClick={downloadPDF}
            className="w-full mt-4 bg-white text-black py-3 rounded-lg cursor-pointer font-semibold hover:opacity-70 transition"
          >
            Download Resume (PDF)
          </button>
        </div>

        {/* ===== LIVE PREVIEW ===== */}
        <div className="bg-white text-black rounded-xl p-8 shadow-2xl">
          {resume.name && (
            <h2 className="text-2xl font-bold">{resume.name}</h2>
          )}
          {resume.title && (
            <p className="text-sm font-medium">{resume.title}</p>
          )}

          {(resume.email || resume.phone || resume.location) && (
            <p className="text-xs text-gray-600 mt-1">
              {[resume.email, resume.phone, resume.location]
                .filter(Boolean)
                .join(" | ")}
            </p>
          )}

          <Divider />
          <Preview title="Summary" content={resume.summary} />
          <Preview title="Skills" content={resume.skills} />
          <Preview title="Experience" content={resume.experience} />
          <Preview title="Projects" content={resume.projects} />
          <Preview title="Education" content={resume.education} />
        </div>
      </div>
    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */

function Divider() {
  return <hr className="my-4 border-gray-300" />;
}

function Preview({ title, content }) {
  if (!content) return null;
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold uppercase border-b mb-1">
        {title}
      </h3>
      <p className="text-sm whitespace-pre-line">{content}</p>
    </div>
  );
}
