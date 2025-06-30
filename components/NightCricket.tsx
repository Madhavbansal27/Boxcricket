
import { Clock, Trophy, Shield, Zap } from "lucide-react";
export function NightCricket() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm text-yellow-400 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold mb-4 sm:mb-6">
            <Zap className="h-4 w-4" />
            <span>Premium Night Cricket</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Cricket Under the Stars
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Experience the thrill of night cricket with our state-of-the-art
            floodlit facility. Professional lighting ensures perfect visibility
            for competitive matches.
          </p>
        </div>

        {/* Image + Overlay Content */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12 sm:mb-16">
          <img
            src="/nightturf.png"
            alt="Night Cricket Facility"
            className="w-full h-[700px] sm:h-[800px] md:h-[900px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Overlay */}
          <div className="absolute inset-0 overflow-y-auto flex flex-col justify-end sm:items-end pt-6 pb-3">
            <div className="w-full p-6 sm:p-10 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                {/* Left Side: Text Content */}
                <div className="text-white text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Professional Night Cricket
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                    Experience cricket the way it's meant to be played, even
                    after sunset.
                  </p>

                  {/* Feature Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      [
                        "LED Floodlights",
                        <Zap className="h-5 w-5 text-white" />,
                        "bg-green-500",
                      ],
                      [
                        "Safety First",
                        <Shield className="h-5 w-5 text-white" />,
                        "bg-blue-500",
                      ],
                      [
                        "Match Quality",
                        <Trophy className="h-5 w-5 text-white" />,
                        "bg-purple-500",
                      ],
                      [
                        "Till 12 PM",
                        <Clock className="h-5 w-5 text-white" />,
                        "bg-orange-500",
                      ],
                    ].map(([label, icon, bg], i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${bg}`}>{icon}</div>
                        <span className="text-white font-medium text-sm sm:text-base">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Pricing Card */}
                <div className="text-center lg:text-right mt-10 mt-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 mb-6">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Night Slot Special
                    </h4>
                    <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                      ₹1400/hr
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 mb-2">
                      Same great price, enhanced experience
                    </p>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Available 6 PM - 12 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Night Cricket Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Perfect Lighting",
              desc: "Professional LED floodlights provide uniform illumination across the entire playing surface, ensuring optimal visibility for all players.",
              icon: <Zap className="h-8 w-8 text-white" />,
              bg: "from-yellow-500 to-orange-500",
            },
            {
              title: "Extended Hours",
              desc: "Play until 11 PM. Perfect for working professionals and evening teams.",
              icon: <Clock className="h-8 w-8 text-white" />,
              bg: "from-blue-500 to-purple-500",
            },
            {
              title: "Tournament Ready",
              desc: "Host night tournaments and special events with our professional-grade facility that meets all competitive cricket standards.",
              icon: <Trophy className="h-8 w-8 text-white" />,
              bg: "from-green-500 to-green-900",
            }
          ].map(({ title, desc, icon, bg }, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <div
                className={`bg-gradient-to-r ${bg} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                {icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
