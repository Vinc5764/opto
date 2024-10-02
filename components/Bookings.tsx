'use client';
import React, { useState, useEffect } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const [loading, setLoading] = useState(false); // Loading state for submission
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Mock list of unavailable dates (in 'YYYY-MM-DD' format)
  const unavailableDates = ['2024-10-10', '2024-10-15', '2024-10-20'];

  // State to hold available dates
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    // Mock: Load unavailable dates from an API (can replace with a real API call)
    setAvailableDates(unavailableDates);
  }, []);

  // Helper to check if a date is unavailable
  const isDateUnavailable = (date) => {
    return unavailableDates.includes(date);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset the error message before a new request.
    setLoading(true); // Show loading state

    try {
      // Simulate sending data to the backend
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false); // Stop loading

      if (!response.ok) {
        // If response is not OK, show an error message
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
        return;
      }

      // If successful, show the success modal
      setShowSuccessModal(true);
    } catch (error) {
      // Handle any errors during the fetch request
      setLoading(false);
      setErrorMessage('There was an error processing your request. Please try again.');
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#36accb] text-center mb-6">Book Your Appointment</h2>

        {/* Error Message at the top */}
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email address"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your phone number"
              required
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Choose a service</option>
              <optgroup label="General Eyecare">
                <option value="General Eyecare">General Eyecare</option>
              </optgroup>
              <optgroup label="Optometry">
                <option value="Pediatric Optometry">Pediatric Optometry</option>
                <option value="Geriatric Optometry">Geriatric Optometry</option>
              </optgroup>
              <optgroup label="Diagnostic Testing">
                <option value="OCT/VFT">OCT/VFT</option>
              </optgroup>
              <optgroup label="Lens Fitting">
                <option value="Contact Lens Fitting">Contact Lens Fitting</option>
              </optgroup>
              <optgroup label="Specialist Consultation">
                <option value="Low Vision">Low Vision</option>
                <option value="Binocular Vision">Binocular Vision</option>
              </optgroup>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              min={new Date().toISOString().split('T')[0]} // Disallow past dates
              onInput={(e) => {
                if (isDateUnavailable(e.target.value)) {
                  alert('This date is unavailable. Please choose another date.');
                  e.target.value = '';
                }
              }}
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#daf7fe] text-[#36accb] font-bold py-2 px-4 rounded-md shadow-sm transition-colors w-full"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center text-green-600">Appointment Confirmed!</h3>
            <p className="text-gray-700 text-center mb-4">
              Your appointment has been successfully booked.
            </p>
            <button
              onClick={closeSuccessModal}
              className="bg-[#36accb] text-white font-bold py-2 px-4 rounded-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
