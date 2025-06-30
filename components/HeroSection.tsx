import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import { 
  Trophy, 
  Calendar,
  Clock,
  Target,
  Images
} from 'lucide-react';

export const HeroSection:React.FC = ()=>{
    return(
        <>
        <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <Navbar></Navbar>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23059669%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <Trophy className="h-4 w-4 mr-2" />
                Premium Cricket Experience
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Book Your
                  <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Cricket Turf
                  </span>
                  <span className="block">Experience</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Premium indoor cricket facility with professional-grade turf, 
                  complete equipment, and modern amenities for the ultimate cricket experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-green-500 hover:text-green-600 transition-all duration-300">
                  <Images className="h-5 w-5 mr-2" />
                  Virtual Tour
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4.9</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Cricket Field Visualization */}
            <div className="relative">
              {/* Main Cricket Field */}
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="bg-green-300 rounded-2xl p-6 relative overflow-hidden">
                  {/* Cricket Field Lines */}
                  <div className="absolute inset-0">
                    {/* Pitch */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-4 bg-yellow-200 rounded-full opacity-80"></div>
                    {/* Boundary Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white border-dashed rounded-full opacity-60"></div>
                    {/* Stumps */}
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-1 h-6 bg-yellow-400 rounded"></div>
                    <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-1 h-6 bg-yellow-400 rounded"></div>
                  </div>
                  
                  {/* Players */}
                  <div className="relative z-10 flex justify-between items-center h-32">
                    <div className="space-y-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-100"></div>
                    </div>
                    <div className="text-center text-white">
                      <Target className="h-8 w-8 mx-auto mb-2 animate-spin-slow" />
                      <div className="text-xs font-bold">LIVE MATCH</div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">₹1300/hr</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl p-3 shadow-lg transform rotate-12 animate-bounce-slow">
                <div className="text-center">
                  <Trophy className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-xs font-bold">BOOK NOW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}