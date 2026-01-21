import React, { useState } from "react";

export default function RegexTexter() {
  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");
  const [matches, setMatches] = useState([]);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, "g");
      const result = text.match(regex) || [];
      setMatches(result);
    } catch (e) {
      setMatches(["Invalid regex pattern"]);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-black text-white p-6 flex justify-center items-start">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold">Regex Tester</h2>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Enter regex pattern..."
          className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to match..."
          className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={testRegex}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Test Regex
        </button>
        {matches.length > 0 && (
          <div className="bg-gray-800 p-4 rounded-lg text-gray-200">
            <h3 className="font-semibold mb-2">Matches:</h3>
            <ul className="list-disc pl-5">
              {matches.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
