import AboutUs from '@/components/AboutUs'
import FlexibleAppointmentSection from '@/components/Appointment'
// import BlogSection from '@/components/BlogSection'
import AppointmentBooking from '@/components/Booking'
import EyeCareExperts from '@/components/EyeCare'
import Footer from '@/components/Footer'
import Header from '@/components/NavBar'
import NewsletterSubscription from '@/components/Newsletter'
import PrecisionCare from '@/components/PrecisionCare'
import EyeCareServicesGrid from '@/components/Services'
import TestimonialsReviews from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <PrecisionCare />
      <AboutUs />
      <FlexibleAppointmentSection />
      <EyeCareServicesGrid />
      <WhyChooseUs />
      <EyeCareExperts />
      <TestimonialsReviews />
      <AppointmentBooking />
      {/* <BlogSection /> */}
      <NewsletterSubscription />
      <Footer /> 
    </div>
  )
}

export default page