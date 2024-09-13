import FlexibleAppointmentSection from '@/components/Appointment'
import ContactUsHeader from '@/components/ConHeader'
import ContactForm from '@/components/Contact'
import ContactInfoSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Header from '@/components/NavBar'
import NewsletterSubscription from '@/components/Newsletter'
import React from 'react'

const page = () => {
  return (
      <div>
          <Header />
          <ContactUsHeader />
          <ContactInfoSection />
          <ContactForm />
          <FlexibleAppointmentSection />
          <NewsletterSubscription />
          <Footer />
    </div>
  )
}

export default page