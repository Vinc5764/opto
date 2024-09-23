import Header from '@/components/NavBar'
import Breadcrumb from '@/components/BreadCrumb'
import React from 'react'
import LenseProducts from '@/components/lensesproducts/LenseProducts';
import Footer from '@/components/Footer';

const page = () => {
    const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Optical Frames', href: '/optical-frames' },
    { label: 'Robert and Sons Limited Ghana' }
  ];
  return (
    <div>
      <Header />
      <Breadcrumb title='Contact Lenses' breadcrumbs={breadcrumbs} />
      <LenseProducts />
      <Footer />
    </div>
  )
}

export default page