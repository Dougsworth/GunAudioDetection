"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-black via-gray-900 to-gray-800 text-white p-8">
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4 animate-pulse">
          About GunDetection Audio
        </h1>
        GunDetection Audio
        <p className="text-xl text-gray-400 animate-fadeInUp">
          Your partner in real-time gunshot detection technology.
        </p>
      </motion.header>

      <section className="w-full max-w-4xl mb-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-indigo-300">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300">
            Our mission is to enhance public safety by providing advanced audio
            detection systems that can accurately identify gunshots and alert
            authorities instantly.
          </p>
        </motion.div>
      </section>

      <section className="w-full max-w-4xl mb-12">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-indigo-300">
            Our Vision
          </h2>
          <p className="text-lg text-gray-300">
            We envision a world where communities can feel safe, with
            cutting-edge technology ensuring swift responses to dangerous
            situations.
          </p>
        </motion.div>
      </section>

      <section className="w-full max-w-4xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-indigo-300">Our Team</h2>
          <p className="text-lg text-gray-300">
            Our team comprises experienced engineers, data scientists, and
            safety experts committed to innovation and excellence in public
            safety technologies.
          </p>
        </motion.div>
      </section>

      <section className="w-full max-w-4xl mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-indigo-300">
            Get Involved
          </h2>
          <p className="text-lg text-gray-300">
            Join us in making the world a safer place. Contact us to learn more
            about our technology or partnership opportunities.
          </p>
        </motion.div>
      </section>

      {/* Add Call-to-Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          href="#"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default About;
