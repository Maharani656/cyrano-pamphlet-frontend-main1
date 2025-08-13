import React from 'react';

export default function AndroidAppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            GET THE ANDROID APP
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Download our Android app for the best mobile experience.
          </p>
          <div className="mt-8">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
