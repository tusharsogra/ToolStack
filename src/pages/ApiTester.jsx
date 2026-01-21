import React, { useState } from "react";

export default function APITester() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");

  const sendRequest = async () => {
    try {
      const options = { method };
      if (method !== "GET" && body) {
        options.headers = { "Content-Type": "application/json" };
        options.body = body;
      }
      const res = await fetch(url, options);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (e) {
      setResponse("Error: " + e.message);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-black text-white p-6 flex justify-center items-start">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold">API Tester</h2>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter API URL..."
          className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        {(method === "POST" || method === "PUT") && (
          <textarea
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter JSON body..."
            className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <button
          onClick={sendRequest}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Send Request
        </button>
        {response && (
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-200">
            {response}
          </pre>
        )}
      </div>
    </div>
  );
}
