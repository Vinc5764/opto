import Breadcrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/NavBar'
import Product from '@/components/productdetails/Product'
import React from 'react'

const page = () => {
     const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Product Details', href: '/product/' },
    { label: 'Kountry Eyecare Clinic' }
  ];
  return (
    <div>
      <Header />
      <Breadcrumb  title='Product Details' breadcrumbs={breadcrumbs}/>
      <Product />
      <Footer />
    </div>
  )
}

export default page