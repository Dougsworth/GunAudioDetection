"use client";

import { motion } from "framer-motion";
import AudioRecorder from "./components/AudioRecorder";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-8">
      {/* Header */}
      <motion.header
        className="text-center mt-12 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 mb-4">
          GunDetection Audio
        </h1>
        <p className="text-lg text-gray-300 italic">
          Stay safe with real-time gunshot detection.
        </p>
      </motion.header>

      {/* Main Section */}
      <motion.main
        className="w-full max-w-2xl p-10 bg-gray-800 rounded-lg shadow-2xl backdrop-blur-md bg-opacity-60"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-1 text-center text-indigo-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Start Detection
        </motion.h2>

        {/* Audio Recorder */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AudioRecorder />
        </motion.div>

        <motion.p
          className="mt-4 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Click the button above to start recording audio. The system will
          analyze the sound in real-time to detect gunshot sounds.
        </motion.p>

        <motion.p
          className="mt-2 text-center text-gray-400 italic text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Disclaimer: The model is currently being tuned and may not perform
          accurately.
        </motion.p>
      </motion.main>
    </div>
  );
}
