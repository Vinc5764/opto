import Header from '@/components/NavBar'
import Breadcrumb from '@/components/BreadCrumb'
import OpticalFramesProducts from '@/components/opticalproducts/OpticalFramesProducts'
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
          <Breadcrumb  title="Optical Frames" breadcrumbs={breadcrumbs} />
      <OpticalFramesProducts />
      <Footer />
    </div>
  )
}

export default page