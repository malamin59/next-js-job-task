"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">Login</h1>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google")}
          className="px-6 py-3  bg-indigo-600 text-white rounded-lg 
          hover:bg-blue-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
