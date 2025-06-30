import {Gift,Coins, CheckCircle, ArrowDown} from 'lucide-react'
import { Link } from 'react-router-dom'
export function LoyaltyReward(){
    return(
        <>
        {/* Loyalty Rewards Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loyalty Rewards Program
            </h2>
            <p className="text-xl text-gray-600">
              Collect points with every booking and earn exciting rewards
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Steps */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Book & Earn</h3>
                      <p className="text-gray-600 mb-3">Book for 1 hour and get 100 points coupon instantly</p>
                      <div className="flex items-center space-x-2">
                        <Coins className="h-5 w-5 text-purple-500" />
                        <span className="text-purple-600 font-semibold">100 Points per Hour</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowDown className="h-8 w-8 text-purple-400 animate-bounce" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Collect Points</h3>
                      <p className="text-gray-600 mb-3">Accumulate 1000 points within 45 days</p>
                      <div className="bg-purple-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-purple-700">Progress to Reward</span>
                          <span className="text-sm font-bold text-purple-700">1000 Points</span>
                        </div>
                        <div className="w-full bg-purple-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{width: '70%'}}></div>
                        </div>
                        <p className="text-xs text-purple-600 mt-2">10 hours = 1000 points</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowDown className="h-8 w-8 text-purple-400 animate-bounce" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Redeem Reward</h3>
                      <p className="text-gray-600 mb-3">Exchange your points for cash rewards</p>
                      <div className="flex items-center space-x-2">
                        <Gift className="h-5 w-5 text-green-500" />
                        <span className="text-green-600 font-semibold">Instant Cash Reward</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reward Highlight */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Gift className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">₹1,000</h3>
                  <p className="text-xl opacity-90">Cash Reward</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Instant redemption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>No expiry on rewards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>45-day collection period</span>
                  </div>
                </div>
                <Link to={"/booking"}>
                <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:cursor-pointer transition-colors shadow-lg">
                  Start Earning Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}