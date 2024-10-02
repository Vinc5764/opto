import AppointmentForm from '@/components/Bookings'
import Footer from '@/components/Footer'
import OpticsNavbar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
      <div>
          <OpticsNavbar/>
          <AppointmentForm />
          <Footer/>
    </div>
  )
}

export default page
