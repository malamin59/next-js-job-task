"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaRocket } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 my-4 mb-12 ">
          
          {/* Left Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-snug">
              <FaRocket className="inline text-indigo-600 mr-2" />
              Manage Products <br />
              <span className="text-indigo-600">Faster & Smarter</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              A modern way to handle your items. Explore details, add products,
              and simplify your management system effortlessly.
            </p>

            {/* Features */}
            <div className="flex  sm:flex-row sm:justify-center lg:justify-start gap-4 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="text-green-500" />
                Easy to Use
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="text-green-500" />
                Secure & Fast
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="text-green-500" />
                Responsive
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex  sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/products"
                className="btn btn-primary flex  bg-indigo-600 items-center gap-2 px-6 py-3 rounded-lg shadow-md text-lg"
              >
                <MdOutlineExplore className="text-xl" />
                Explore
              </Link>
              <Link
                href="/login"
                className="btn btn-outline btn-secondary bg-indigo-600 flex items-center gap-2 px-6 py-3 rounded-lg text-lg"
              >
                <FaShoppingCart className="text-xl" />
                Manage
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              <Image
                src="/job-task.jpeg"
                alt="Job Task Hero"
                width={6000}
                height={6000}
                className="object-cover rounded-2xl shadow-xl w-full h-auto"
                priority
              />
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
