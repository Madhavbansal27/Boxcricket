import {Users} from "lucide-react"
import {Link} from "react-router-dom"
export function Footer(){
    return(
        <>
            <section className="py-15 bg-gradient-to-r from-green-600 via-emerald-700 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Experience Cricket Excellence?
          </h2>
          <p className="text-xl text-green-100 mb-6 leading-relaxed">
            Join the community of cricket enthusiasts who trust TurfBox for their game. 
            Book your slot now and step onto the field of champions.
          </p>
          <div className="flex justify-center items-center mb-10 space-x-5">
            <Link to={"https://www.instagram.com/nyboxcricket/?hl=en"}>
                <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl">
                <img src="/instagram.png" className="h-full w-full" alt="" />
                </div>
            </Link>
            <span className="text-xl text-white">Follow Us On Instagram</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              <Users className="h-5 w-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
        </>
    )
}