import Header from '@/components/NavBar'
import Breadcrumb from '@/components/BreadCrumb'
import React from 'react'
import LenseProducts from '@/components/lensesproducts/LenseProducts';

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
    </div>
  )
}

export default page