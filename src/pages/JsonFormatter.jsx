import React, { useState } from "react";

export default function JSONFormatter() {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJSON, setFormattedJSON] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setFormattedJSON(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError("Invalid JSON");
      setFormattedJSON("");
    }
  };

  return (
    <div className="min-h-screen py-20 bg-black text-white p-6 flex justify-center items-start">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold">JSON Formatter</h2>
        <textarea
          rows={8}
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste JSON here..."
          className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={formatJSON}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Format JSON
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {formattedJSON && (
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-200">
            {formattedJSON}
          </pre>
        )}
      </div>
    </div>
  );
}
