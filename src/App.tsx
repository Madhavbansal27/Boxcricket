import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from "../pages/Booking"
import {Landing} from '../pages/Landing'
import { BookingProvider } from '../context/BookingContext';
import "./App.css"
function App() {
  return (
    <BookingProvider>
    <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/booking' element={<Booking/>}/>
        </Routes>
    </Router>
    </BookingProvider>
  )
}

export default App
