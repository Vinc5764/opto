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
    const fetchData = () => {
      const productString = localStorage.getItem('selectedProduct');
      
      if (productString) {
        const product = JSON.parse(productString);
        setProductDetails(product);

        if (product?.product_image) {
          setSelectedImage(product.product_image);
        }
      } else {
        console.error('No product found in localStorage');
      }
    };
    
    fetchData();
  }, [setProductDetails]);

  if (!productDetails) return <div>Loading...</div>;

  const { outOfStock, product_image_shades, product_description, product_properties, product_return_policy } = productDetails;
  
  const handleAddToCart = (product: ProductDetails) => {
    if (!outOfStock) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={selectedImage || opto}
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
              <Expand className="w-5 h-5" />
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {product_image_shades.map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(src)}
                className="relative w-20 h-20 border rounded-md overflow-hidden flex-shrink-0"
              >
                <Image src={src} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{productDetails.name}</h1>
            <Heart className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary">${productDetails.salePrice.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground line-through">${productDetails.originalPrice.toFixed(2)}</span>
          </div>
          <p className="text-muted-foreground">{product_description}</p>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200 bg-gradient-to-r from-[#e0f7fa] to-[#b2ebf2]">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-300 text-left">Property</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {product_properties.map((property, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b border-gray-200 font-medium">
                      {property.label}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">{property.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 bg-gradient-to-r from-[#e0f7fa] to-[#b2ebf2] p-4 rounded-lg">
            <Label className="text-lg font-semibold">Return Policy</Label>
            <p className="text-sm text-gray-600">{product_return_policy}</p>
          </div>
          <Button 
            className="w-full bg-gradient-to-r from-[#e0f7fa] to-[#b2ebf2] text-gray-800 hover:from-[#b2ebf2] hover:to-[#e0f7fa]" 
            disabled={outOfStock} 
            onClick={() => handleAddToCart(productDetails)}
          >
            {outOfStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}