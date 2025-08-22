"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-50 to-pink-100 px-6">
      {/* Animated 404 */}
      <motion.h1
        className="text-9xl font-extrabold text-red-500"
        initial={{ scale: 0 }}
        animate={{ rotate: [0, 10, -10, 0], scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        404
      </motion.h1>

      {/* Text */}
      <motion.p
        className="mt-4 text-xl sm:text-2xl text-gray-700 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Oops! Page not found.
      </motion.p>
      {/* Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link href="/" className="btn  bg-indigo-600 px-6 py-3 rounded-lg">
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
