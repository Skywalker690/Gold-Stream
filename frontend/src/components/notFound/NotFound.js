import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        {/* Large 404 */}
        <div className="relative">
          <h1 className="text-9xl font-black text-gray-800 select-none">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-9xl font-black">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 border border-gray-600 text-white rounded-xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-600 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  )
}

export default NotFound
