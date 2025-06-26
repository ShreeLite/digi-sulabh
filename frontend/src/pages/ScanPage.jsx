import React from 'react'
import { FaQrcode } from 'react-icons/fa';

const ScanPage = () => {
   return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">QR Scanner</h1>
        <p className="text-gray-400 text-lg">
          Scan toilet QR codes for instant information and actions
        </p>
      </div>

      {/* Mode Switch */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
          User Mode
        </button>
        <button className="bg-neutral-800 px-5 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
          Cleaner Mode
        </button>
      </div>

      {/* QR Scanner Container */}
      <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl max-w-xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold mb-1">Scan Toilet QR Code</h2>
        <p className="text-sm text-gray-400 mb-4">
          Point your camera at the QR code on the toilet
        </p>

        {/* Camera Placeholder */}
        <div className="w-full h-64 border border-dashed border-gray-500 rounded-xl flex items-center justify-center text-gray-500 mb-6">
          <div className="flex flex-col items-center">
            <FaQrcode className="text-4xl mb-2" />
            <span className="text-sm">Camera view will appear here</span>
          </div>
        </div>

        {/* Start Scan Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
          🔍 Start Scan
        </button>
      </div>

      {/* How to Use Section */}
      <div className="bg-neutral-800 text-center mt-14 p-6 rounded-xl max-w-4xl mx-auto">
        <FaQrcode className="text-3xl mx-auto mb-2 text-gray-400" />
        <h3 className="text-lg font-semibold mb-3">How to Use QR Scanner</h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Look for QR codes posted near toilet entrances</li>
          <li>• Ensure good lighting for accurate scanning</li>
          <li>• Hold your device steady while scanning</li>
        </ul>
      </div>
    </div>
  );
}

export default ScanPage
