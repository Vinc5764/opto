import Header from '@/components/NavBar'
import Breadcrumb from '@/components/BreadCrumb'
import OpticalFramesProducts from '@/components/opticalproducts/OpticalFramesProducts'


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
    </div>
  )
}

export default page