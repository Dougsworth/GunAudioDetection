"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi"; // Example icon from react-icons

const CaseStudy = () => {
  // Motion animation variants for hoverable icon
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.3, rotate: 360 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
          Case Study: GunDetection Audio
        </h1>
        <p className="text-xl text-gray-400">
          Exploring innovative solutions in real-time gunshot detection
          technology.
        </p>
      </motion.header>

      {/* Interactive Icon */}
      <motion.div
        className="text-indigo-500 text-5xl mb-12 cursor-pointer"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FiTarget />
      </motion.div>

      <motion.section
        className="w-full max-w-4xl mb-12 bg-white bg-opacity-5 p-8 rounded-xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-indigo-400 hover:text-purple-500 transition-colors duration-300">
          Project Overview
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          GunDetection Audio is a cutting-edge system designed to accurately
          detect gunshot sounds using advanced audio processing technologies.
        </p>
      </motion.section>

      <motion.section
        className="w-full max-w-4xl mb-12 bg-white bg-opacity-5 p-8 rounded-xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-indigo-400 hover:text-purple-500 transition-colors duration-300">
          Challenges
        </h2>
        <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed">
          <li>
            High accuracy in differentiating gunshots from other noises in
            various environments.
          </li>
          <li>Real-time analysis and alerting of potential threats.</li>
          <li>Ensuring privacy and security of user data.</li>
        </ul>
      </motion.section>

      <motion.section
        className="w-full max-w-4xl mb-12 bg-white bg-opacity-5 p-8 rounded-xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-indigo-400 hover:text-purple-500 transition-colors duration-300">
          Innovative Solutions
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Our team employed machine learning algorithms to enhance sound
          classification, coupled with robust data protection protocols to
          maintain user confidentiality.
        </p>
      </motion.section>

      <motion.section
        className="w-full max-w-4xl mb-12 bg-white bg-opacity-5 p-8 rounded-xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-indigo-400 hover:text-purple-500 transition-colors duration-300">
          Results
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          The implementation of GunDetection Audio achieved a 95% detection
          accuracy rate, significantly improving response times for emergency
          services.
        </p>
      </motion.section>
    </div>
  );
};

export default CaseStudy;
