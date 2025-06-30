import {
  Coins,
  Trophy,
  Zap,
  CheckCircle,
  Timer,
  EyeOff,
  Sun,
  CloudMoon
} from "lucide-react";

export function Pricing() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm text-green-400 rounded-full px-6 py-3 text-sm font-bold mb-6">
              <Coins className="h-4 w-4" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Fair Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect time slot that fits your schedule and budget.
              No hidden fees, just premium cricket experience.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="w-full grid grid-cols-3 place-items-center bg-gradient-to-r from-green-600 to-emerald-600 font-bold text-white py-6 text-md lg:text-lg">
               <div>Day</div>
               <div className="flex space-x-1 md:space-x-3 justify-center items-center">
                <Sun className="w-6 h-6"></Sun>
                <span>6 AM - 6 PM</span>
                </div>
               <div className="flex space-x-1 md:space-x-3 justify-center items-center">
                <CloudMoon className="w-5 h-5"></CloudMoon>
                <span>6 AM - 6 PM</span>
                </div>
            </div>
            <div className="w-full font-semibold border border-white/10   grid grid-cols-3 px-3 place-items-center items-center text-white py-7 px-4 text-md lg:text-lg hover:bg-white/5 transition-colors">
                <div className="flex justify-center justify-self-start items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span>Monday - Friday</span>
                </div> 
                <div className="flex flex-col justify-center items-center">
                    <div className="text-xl lg:text-3xl font-bold text-green-400">₹1200</div>
                    <div className="text-xs font-light text-gray-300"> per hour</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-xl lg:text-3xl font-bold text-orange-400">₹1300</div>
                    <div className="text-xs font-light text-gray-300"> per hour</div>
                    <div className="inline-flex items-center space-x-1 bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs mt-2">
                        <Zap className="h-3 w-3" />
                        <span>Prime Time</span>
                    </div>
                </div>
            </div>
            <div className="w-full font-semibold border border-white/10   grid grid-cols-3 px-3 place-items-center items-center text-white py-7 px-4 text-md lg:text-lg hover:bg-white/5 transition-colors">
                <div className="flex justify-center justify-self-start items-center space-x-2">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <span>Saturday</span>
                </div> 
                <div className="flex flex-col justify-center items-center">
                    <div className="text-xl lg:text-3xl font-bold text-green-400">₹1300</div>
                    <div className="text-xs font-light text-gray-300"> per hour</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-xl lg:text-3xl font-bold text-orange-400">₹1400</div>
                    <div className="text-xs font-light text-gray-300"> per hour</div>
                    <div className="inline-flex items-center space-x-1 bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs mt-2">
                        <Zap className="h-3 w-3" />
                        <span>Weekend</span>
                    </div>
                </div>
            </div>
            <div className="w-full font-semibold border border-white/10   grid grid-cols-3 px-3 place-items-center items-center text-white py-7 px-6 text-md lg:text-lg hover:bg-white/5 transition-colors">
                <div className="flex justify-center justify-self-start items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span>Sunday</span>
                </div> 
                <div className="flex flex-col col-span-2 justify-center items-center">
                    <div className="text-xl lg:text-3xl font-bold text-red-400">₹1500</div>
                    <div className="text-xs font-light text-gray-300"> per hour - All Day</div>
                    <div className="inline-flex items-center space-x-1 bg-red-500/20 text-red-300 px-3 py-1 mt-2 rounded-full text-sm">
                        <Trophy className="h-4 w-4" />
                        <span>Premium Sunday</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Pricing Features */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 mt-16">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-md lg:text-xl font-bold text-white mb-2">
                All Inclusive
              </h3>
              <p className="text-gray-400 text-sm">
                Equipment, lighting, and facilities included
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Timer className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-md lg:text-xl font-bold text-white mb-2">
                Flexible Booking
              </h3>
              <p className="text-gray-400 text-sm">
                Book single hours or multiple slots
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EyeOff className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-md lg:text-xl font-bold text-white mb-2">
                No Hidden Cost
              </h3>
              <p className="text-gray-400 text-sm">
                Transparent pricing with no hidden costs
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
