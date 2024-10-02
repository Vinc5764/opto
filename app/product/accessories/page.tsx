import Header from '@/components/NavBar'
import Breadcrumb from '@/components/BreadCrumb'
import React from 'react'
import AccessoryProducts from '@/components/accesoryproducts/AcessoryProducts';
import Footer from '@/components/Footer';

const page = () => {
     const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Accessories', href: '/product/accessories/' },
    { label: 'Kountry Eyecare Clinic' }
  ];
  return (
      <div>
          <Header />
      <Breadcrumb title='Accessories' breadcrumbs={breadcrumbs} />
      <AccessoryProducts />
      <Footer />
    </div>
  )
}

export default page