import AboutUs from '@/components/About'
import About from '@/components/AboutUs'
import FlexibleAppointmentSection from '@/components/Appointment'
import Footer from '@/components/Footer'
import Header from '@/components/NavBar'
import NewsletterSubscription from '@/components/Newsletter'
import TestimonialsReviews from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <About />
      <WhyChooseUs />
      <TestimonialsReviews />
      <FlexibleAppointmentSection />
      <NewsletterSubscription />
      <Footer />
    </div>
  )
}

export default page
