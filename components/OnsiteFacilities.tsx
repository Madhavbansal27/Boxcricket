import {
  ShoppingBag,
  Gamepad2,
  CheckCircle,
  Coffee,
  Users,
  Car,
} from "lucide-react";
export function OnsiteFacilities() {
  return (
    <>
      {/* Onsite Facilities Section */}
      <section className="py-15 bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-6 py-3 text-sm font-bold mb-6">
              <ShoppingBag className="h-4 w-4" />
              <span>Onsite Facilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From equipment to refreshments, we've got you covered. Focus on
              your game while we handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Equipment */}
            <div className="flex flex-col justify-center items-center group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-center font-bold text-gray-900 mb-4">
                  Cricket Equipment
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Plastic & wooden bats available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Old tennis balls included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>New balls available (chargeable)</span>
                </li>
              </ul>
            </div>

            {/* Shop & Refreshments */}
            <div className="flex flex-col justify-center items-center group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-center items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Shop & Refreshments
              </h3>
                </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Packed beverages available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Sports equipment shop</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Energy drinks</span>
                </li>
              </ul>
            </div>

            {/* Comfort & Convenience */}
            <div className="flex flex-col justify-center items-center group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-center items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Comfort & Convenience
              </h3>
                </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Comfortable waiting area</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Spectator seating available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Lift access to 4th floor</span>
                </li>
              </ul>
            </div>

            {/* Parking */}
            <div className="flex flex-col justify-center items-center group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1">
                <div className="flex justify-center items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parking Solutions
              </h3>
                </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Paid secure parking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Free roadside parking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>CCTV monitored area</span>
                </li>
              </ul>
            </div>

            
            
          </div>
        </div>
      </section>
    </>
  );
}
