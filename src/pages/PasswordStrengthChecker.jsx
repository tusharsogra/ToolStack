import React, { useState } from "react";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");

  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: "Empty", color: "bg-gray-400" };
    let score = 0;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (pwd.length >= 8) score++;
    switch (score) {
      case 0:
      case 1:
      case 2:
        return { label: "Weak", color: "bg-red-500" };
      case 3:
        return { label: "Medium", color: "bg-yellow-400" };
      case 4:
        return { label: "Strong", color: "bg-green-500" };
      case 5:
        return { label: "Very Strong", color: "bg-blue-500" };
      default:
        return { label: "Weak", color: "bg-red-500" };
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br py-25  text-white p-6 flex justify-center items-start">
      <div className="w-full max-w-xl border rounded-2xl p-4 space-y-6">
        <h2 className="text-2xl font-bold">Password Strength Checker</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password..."
          className="w-full p-4 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mt-4 flex items-center gap-4">
          <span className="font-semibold">Strength:</span>
          <div className={`px-4 py-2 rounded-full font-semibold ${getPasswordStrength(password).color}`}>
            {getPasswordStrength(password).label}
          </div>
        </div>
      </div>
    </div>
  );
}
