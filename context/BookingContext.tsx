import React, { createContext, useContext, useState, useEffect } from 'react';

interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
}

interface BookingContextType {
  bookedSlots: string[];
  bookSlots: (slotIds: string[], customerInfo: CustomerInfo) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  // Load booked slots from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('bookedSlots');
    if (savedBookings) {
      setBookedSlots(JSON.parse(savedBookings));
    } else {
      // Add some demo booked slots for demonstration
      const demoBookedSlots = [
        `${new Date().toISOString().split('T')[0]}-09:00`,
        `${new Date().toISOString().split('T')[0]}-15:00`,
        `${new Date().toISOString().split('T')[0]}-18:00`,
      ];
      setBookedSlots(demoBookedSlots);
      localStorage.setItem('bookedSlots', JSON.stringify(demoBookedSlots));
    }
  }, []);

  const bookSlots = (slotIds: string[], customerInfo: CustomerInfo) => {
    const newBookedSlots = [...bookedSlots, ...slotIds];
    setBookedSlots(newBookedSlots);
    localStorage.setItem('bookedSlots', JSON.stringify(newBookedSlots));
    
    // Save booking details (in real app, this would go to a database)
    const bookingDetails = {
      id: Date.now().toString(),
      slotIds,
      customerInfo,
      bookingDate: new Date().toISOString(),
      totalAmount: slotIds.length * 500
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('bookingDetails') || '[]');
    existingBookings.push(bookingDetails);
    localStorage.setItem('bookingDetails', JSON.stringify(existingBookings));
  };

  return (
    <BookingContext.Provider value={{ bookedSlots, bookSlots }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};