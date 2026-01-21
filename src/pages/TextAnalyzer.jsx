import React, { useState } from "react";

export default function TextAnalyzer() {
  const [text, setText] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-linear-to-br py-30  text-white p-6 flex justify-center items-start">
      <div className="w-full max-w-2xl border rounded-2xl p-5 space-y-6">
        <h2 className="text-2xl font-bold">Text Analyzer</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full p-4 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={8}
        />
        <div className="flex flex-wrap gap-6 text-gray-300">
          <p>Words: <span className="font-semibold text-white">{wordCount}</span></p>
          <p>Characters: <span className="font-semibold text-white">{charCount}</span></p>
          <p>Sentences: <span className="font-semibold text-white">{sentenceCount}</span></p>
        </div>
      </div>
    </div>
  );
}
