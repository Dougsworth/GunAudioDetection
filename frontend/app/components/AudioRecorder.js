"use client";

import { useState, useRef } from "react";
import JamaicaMap from "./JamaicaMap";
import { Dialog } from "@headlessui/react";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectionResult, setDetectionResult] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const canvasRef = useRef(null); // Initialize canvasRef

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        setIsProcessing(true);
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const formData = new FormData();
        formData.append("audio", audioBlob, "audio.wav");

        const response = await fetch("http://localhost:5001/detect-gunshot", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        setDetectionResult(result);

        // Shorter delay before resetting processing state
        setTimeout(() => {
          setIsProcessing(false);
          if (result.message === "Gunshot detected!") {
            setIsMapOpen(true);
          }
        }, 5000); // 2 seconds delay for processing
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);

      setTimeout(() => {
        stopRecording();
      }, 10000); // Stop recording automatically after 10 seconds
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop(); // Stop recording and trigger data processing
    }
  };

    return (
      <div className="flex flex-col items-center">
        {isRecording && (
          <h3 className="mt-4 text-lg font-semibold">Recording in Progress...</h3>
        )}

        {isProcessing && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Processing audio...</h3>
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}

        <canvas
        ref={canvasRef} // Use canvasRef here
        width={300}
        height={100}
        className="mt-4"
      ></canvas>

      {!isProcessing && (
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out mt-2 mb-16" // Added bottom margin
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
      )}

      {detectionResult && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Detection Result</h3>
          <p>Message: {detectionResult.message}</p>
          <p>File: {detectionResult.filename}</p>
        </div>
      )}

      {/* Modal for displaying the map */}
      <Dialog
        open={isMapOpen}
        onClose={() => {
          setIsMapOpen(false);
          setDetectionResult(null); // Reset the detection result
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-gray-900 rounded-lg shadow-lg p-4 max-w-4xl w-full">
            <Dialog.Title className="text-xl font-bold text-white mb-4">
              Gunshot Detected
            </Dialog.Title>
            <div className="h-[500px] w-full">
              <JamaicaMap gunshotLocation={{ lat: 18.0, lng: -77.0 }} />
            </div>
            <button
              onClick={() => {
                setIsMapOpen(false);
                setDetectionResult(null); // Reset the detection result
              }}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AudioRecorder;
