import React, { useState } from 'react';
import { X, User, Phone, Mail, CheckCircle, Loader } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

interface BookingModalProps {
  selectedDate: string;
  selectedSlots: string[];
  totalAmount: number;
  onClose: () => void;
  onSuccess: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  selectedDate,
  selectedSlots,
  totalAmount,
  onClose,
  onSuccess
}) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { bookSlots } = useBooking();

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email) {
      return;
    }

    setIsLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      const slotIds = selectedSlots.map(time => `${selectedDate}-${time}`);
      bookSlots(slotIds, customerInfo);
      setIsLoading(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600">
              Your cricket slots have been successfully booked. You'll receive a confirmation email shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Complete Your Booking</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Summary */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h4>
            <div className="space-y-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium text-gray-900">
                  {new Date(selectedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time Slots:</span>
                <div className="text-right">
                  {selectedSlots.map((time, index) => (
                    <div key={index} className="font-medium text-gray-900 text-sm">
                      {time} - {String(parseInt(time.split(':')[0]) + 1).padStart(2, '0')}:00
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Number of Slots:</span>
                <span className="font-medium text-gray-900">{selectedSlots.length}</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                <span className="text-xl font-bold text-green-600">₹{totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Customer Information Form */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading || !customerInfo.name || !customerInfo.phone || !customerInfo.email}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Confirm & Pay ₹{totalAmount}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Your booking will be confirmed instantly upon payment completion. 
            You'll receive a confirmation email with booking details and facility information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;