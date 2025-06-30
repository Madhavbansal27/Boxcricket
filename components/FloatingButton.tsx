import {Link} from "react-router-dom"
import { Calendar } from "lucide-react"
export function FloatingButton({ showOrNot }: { showOrNot: boolean }){
    return(
        <>
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        showOrNot
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
      }`}>
        <Link
          to="/booking"
          className="group flex items-center justify-center px-4 space-x-2 font-semibold h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        >
          <Calendar className="h-7 w-7 group-hover:scale-110 transition-transform duration-200"></Calendar>
          <span>Book Now</span>
        </Link>
        </div>
        </>
    )
}