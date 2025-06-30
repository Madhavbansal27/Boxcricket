import React, { useState } from 'react';
import { Clock, Users, MapPin } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import Calendar from '../components/Calender';
import BookingModal from '../components/BookingModal';
import Navbar from '../components/Navbar';

const Booking: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const { bookedSlots } = useBooking();

    const timeSlots = [
        '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
        '18:00', '19:00', '20:00', '21:00', '22:00'
    ];

    const getSlotPrice = (time: string) => {
        const hour = parseInt(time.split(':')[0]);
        const selectedDateObj = new Date(selectedDate);
        const dayOfWeek = selectedDateObj.getDay(); // 0 = Sunday, 1 = Monday, etc.
        
        // Sunday pricing
        if (dayOfWeek === 0) {
        return 1500;
        }
        
        // Saturday pricing
        if (dayOfWeek === 6) {
        return hour >= 18 ? 1400 : 1300;
        }
        
        // Monday-Friday pricing
        return hour >= 18 ? 1300 : 1200;
    };

    const handleSlotSelect = (time: string) => {
        const slotId = `${selectedDate}-${time}`;
        if (bookedSlots.includes(slotId)) return;

        setSelectedSlots(prev => 
        prev.includes(time) 
            ? prev.filter(slot => slot !== time)
            : [...prev, time]
        );
    };

    const getSlotStatus = (time: string) => {
        const slotId = `${selectedDate}-${time}`;
        if (bookedSlots.includes(slotId)) return 'booked';
        if (selectedSlots.includes(time)) return 'selected';
        return 'available';
    };

    const totalAmount = selectedSlots.reduce((total, time) => {
        return total + getSlotPrice(time);
    }, 0);

    const handleBooking = () => {
        if (selectedSlots.length > 0) {
        setShowModal(true);
        }
    };

    const handleBookingSuccess = () => {
        setSelectedSlots([]);
        setShowModal(false);
    };

    const getSelectedDateDisplay = () => {
        const date = new Date(selectedDate);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
        return 'Today';
        } else if (date.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
        } else {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
        }
    };

    const getDayName = () => {
        const date = new Date(selectedDate);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar></Navbar>
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Date Selection */}
            <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                {/* Select Date Section */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center mr-3">
                        <span className="text-white text-sm">📅</span>
                    </div>
                    Select Date
                    </h2>
                    <Calendar
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    />
                </div>

                {/* Legend */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Legend</h3>
                    <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-200 rounded"></div>
                        <span className="text-sm text-gray-600">Available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-200 rounded"></div>
                        <span className="text-sm text-gray-600">Booked</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-blue-200 rounded"></div>
                        <span className="text-sm text-gray-600">Selected</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Center - Available Slots */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center mb-6">
                    <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center mr-3">
                    <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Available Slots - {getSelectedDateDisplay()} ({getDayName()})
                    </h2>
                    <p className="text-sm text-gray-600">
                        Click on available slots to select. Each slot is 1 hour. You can select multiple slots.
                    </p>
                    </div>
                </div>

                {/* Time Slots Grid */}
                <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => {
                    const status = getSlotStatus(time);
                    const price = getSlotPrice(time);
                    const endTime = String(parseInt(time.split(':')[0]) + 1).padStart(2, '0') + ':00';
                    
                    return (
                        <button
                        key={time}
                        onClick={() => handleSlotSelect(time)}
                        disabled={status === 'booked'}
                        className={`
                            p-4 rounded-lg border-2 text-center transition-all duration-200 font-medium
                            ${status === 'available' 
                            ? 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100 hover:border-green-300' 
                            : status === 'booked'
                            ? 'bg-red-50 border-red-200 text-red-600 cursor-not-allowed'
                            : 'bg-blue-50 border-blue-300 text-blue-800 ring-2 ring-blue-200'
                            }
                        `}
                        >
                        <div className="text-sm font-bold">
                            {time} - {endTime}
                        </div>
                        <div className="text-xs mt-1">
                            {status === 'booked' ? 'Booked' : `₹${price}`}
                        </div>
                        </button>
                    );
                    })}
                </div>
                </div>
            </div>

            {/* Right Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
                <div className="sticky top-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-white" />
                    </div>
                    Booking Summary
                    </h2>

                    <div className="space-y-4">
                    {/* Selected Date */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Selected Date</h3>
                        <div className="text-lg font-medium text-gray-800">
                        {getSelectedDateDisplay()}
                        </div>
                        <div className="text-sm text-gray-600">{getDayName()}</div>
                    </div>

                    {/* Selected Slots */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Selected Slots</h3>
                        {selectedSlots.length === 0 ? (
                        <div className="text-sm text-gray-500">No slots selected</div>
                        ) : (
                        <div className="space-y-2">
                            {selectedSlots.map((time, index) => {
                            const endTime = String(parseInt(time.split(':')[0]) + 1).padStart(2, '0') + ':00';
                            const price = getSlotPrice(time);
                            return (
                                <div key={index} className="flex justify-between items-center text-sm">
                                <span className="text-gray-700">{time} - {endTime}</span>
                                <span className="font-medium text-gray-900">₹{price}</span>
                                </div>
                            );
                            })}
                        </div>
                        )}
                    </div>

                    {/* Total Amount */}
                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-green-600">₹{totalAmount}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                        {selectedSlots.length} slot(s) × ₹{selectedSlots.length > 0 ? Math.round(totalAmount / selectedSlots.length) : 0} each
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <button
                        onClick={handleBooking}
                        disabled={selectedSlots.length === 0}
                        className={`
                        w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200
                        ${selectedSlots.length > 0
                            ? 'bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg'
                            : 'bg-gray-300 cursor-not-allowed'
                        }
                        `}
                    >
                        {selectedSlots.length > 0 ? 'Confirm Booking' : 'Select slots to continue'}
                    </button>
                    </div>
                </div>

                {/* Facility Info */}
                <div className="mt-6 bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Facility Information</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>4th Floor, Sports Complex</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>1 Hour per slot</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Up to 22 players</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Booking Modal */}
        {showModal && (
            <BookingModal
            selectedDate={selectedDate}
            selectedSlots={selectedSlots}
            totalAmount={totalAmount}
            onClose={() => setShowModal(false)}
            onSuccess={handleBookingSuccess}
            />
        )}
        </div>
  );
};

export default Booking;