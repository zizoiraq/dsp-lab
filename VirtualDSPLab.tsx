import React from 'react';

const VirtualDSPLab: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">🎛️ Virtual DSP Lab</h1>
        <p className="text-gray-700 mb-6">
          Welcome to the Virtual Digital Signal Processing Lab! 🚀
        </p>
        <p className="text-gray-600">
          Here you can simulate DSP experiments, visualize signals, and learn interactively.
        </p>
      </div>
    </div>
  );
};

export default VirtualDSPLab;
