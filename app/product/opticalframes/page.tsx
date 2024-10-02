import Header from '@/components/NavBar'
import Breadcrumb from '@/components/BreadCrumb'
import OpticalFramesProducts from '@/components/opticalproducts/OpticalFramesProducts'
import Footer from '@/components/Footer';


const page = () => {
     const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Optical Frames', href: '/product/opticalframes/' },
    { label: 'Kountry Eyecare Clinic' }
  ];
  return (
      <div>
          <Header />
          <Breadcrumb  title="Optical Frames" breadcrumbs={breadcrumbs} />
      <OpticalFramesProducts />
      <Footer />
    </div>
  )
}

export default page