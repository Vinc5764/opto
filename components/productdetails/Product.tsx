'use client';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import useProductDetailsStore from '@/store';
import { useStore } from '@/store';
import { Expand, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import opto from '@/public/product1.webp'


interface ProductDetails {
  id: number;
  color: string;
  quantity: number;
  image: StaticImageData;
  name: string;
  originalPrice: number;
  salePrice: number;
  outOfStock: boolean;
  product_image: StaticImageData | string;
  product_image_shades: (StaticImageData | string)[];
  product_description: string;
  product_properties: object[] | string[];
  product_return_policy: string;
}

export default function Product() {
  const { productDetails, setProductDetails } = useProductDetailsStore();
   const { addToCart } = useStore();
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>();

  useEffect(() => {
  // Fetch product details from Zustand store
  const fetchData = () => {
    const productString = localStorage.getItem('selectedProduct');
    
    // Check if the retrieved string is not null before parsing
    if (productString) {
      const product = JSON.parse(productString);
      setProductDetails(product);

      if (product?.product_image) {
        setSelectedImage(product.product_image);
      }
    } else {
      // Optionally handle the case where there's no product in localStorage
      console.error('No product found in localStorage');
    }
  };
  
  fetchData();
}, [setProductDetails]);


  if (!productDetails) return <div>Loading...</div>; // Handle loading state

  const { outOfStock, product_image_shades, product_description, product_properties, product_return_policy } = productDetails;
  
  const handleAddToCart = (product: ProductDetails) => {
    if (!outOfStock) {
      addToCart(product); // Pass the product instead of productDetails
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
  src={selectedImage || opto} // Fallback to placeholder if selectedImage is undefined
  alt="Product Image"
  layout="fill"
  objectFit="cover"
  className="rounded-lg"
/>
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
              <Expand className="w-5 h-5" />
            </button>
          </div>
          <div className="flex space-x-4">
            {product_image_shades.map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(src)}
                className="relative w-20 h-20 border rounded-md overflow-hidden"
              >
                <Image src={src} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{productDetails.name}</h1>
          <Heart className="w-6 h-6" />
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary">{productDetails.salePrice}</span>
            <span className="text-sm text-muted-foreground line-through">{productDetails.originalPrice}</span>
          </div>
          <p className="text-muted-foreground">{product_description}</p>
          <div className="space-y-4">
            {product_properties.map((property, index) => (
              <div key={index}>
                <Label>{property.label}</Label>
                <div className="font-medium">{property.value}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <Label>Return Policy</Label>
            <p>{product_return_policy}</p>
          </div>
          <Button 
            className="w-full" 
            disabled={outOfStock} 
            onClick={() => handleAddToCart(productDetails)} // Pass productDetails as product
          >
            {outOfStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}
