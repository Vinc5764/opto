'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Grid, List, Heart, RotateCcw, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import product1 from '@/public/product1.webp';
import product1a from '@/public/product1a.webp';
import product1b from '@/public/product1b.webp';
import product4 from '@/public/product4.webp';
import product4a from '@/public/product4a.webp';
import product4b from '@/public/product4b.webp';
import product2 from '@/public/aurorasky.webp';
import product2a from '@/public/aurorasky2.jpg';
import product2b from '@/public/aurorasky3.jpg';
import product2c from '@/public/aurorasky4.jpg';
import product3 from '@/public/bluelagoon.webp';
import product3a from '@/public/bluelagoon2.jpg';
import product3b from '@/public/bluelagoon3.jpg';
import product5 from '@/public/victoriapeak.webp';
import product5a from '@/public/victoriapeak2.jpg';
import product5b from '@/public/victoriapeak3.jpg';
import Image, { StaticImageData } from 'next/image';
import { useStore } from '@/store';
import useProductDetailsStore from '@/store';


type ProductProperty = {
  label: string;
  value: string;
};

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: StaticImageData; // Adjust based on how your images are imported
  outOfStock: boolean;
  color: string;
  quantity: number;
  salePercentage?: number;
  product_image: StaticImageData;
  product_image_shades: StaticImageData[];
  product_description: string;
  product_properties: ProductProperty[];
  product_return_policy: string;
}





// Example products
const products: Product[] = [
  {
    id: 1,
    name: "Everest Peak",
    originalPrice: 397.99,
    salePrice: 305.99,
    image: product1,
    outOfStock: true,
    color: 'black',
    quantity: 1,
    product_image: product1,
    product_image_shades: [product1, product1a, product1b],
    product_description: 'Discover the perfect blend of style and functionality with this Optical Frame, meticulously designed to fit any face shape and complement any style. This versatile eyeglass frame is the ideal choice for anyone seeking a blend of elegance, durability, and comfort.',
    product_properties: [{ label: 'Material', value: 'Plastic' }],
    product_return_policy: '30-day return policy.'
  },
  {
    id: 2,
    name: "Serengeti Sunset",
    originalPrice: 397.99,
    salePrice: 305.99,
    image: product4,
    salePercentage: 11,
    outOfStock:false,
    color: 'red',
    quantity: 1,
    product_image: product4,
    product_image_shades: [product4, product4a, product4b],
    product_description: 'Elegant, stylish frame perfect for evening wear. Enhances your unique features.',
    product_properties: [{ label: 'Material', value: 'Metal' }],
    product_return_policy: '15-day return policy.'
  },
  {
    id: 3,
    name: "Aurora Sky",
    originalPrice: 397.99,
    salePrice: 305.99,
    image: product2,
    outOfStock: false,
    color: 'blue',
    quantity: 1,
    product_image: product2,
    product_image_shades: [product2a, product2b, product2c],
    product_description: 'Lightweight, waterproof frame suitable for all occasions, inspired by nature.',
    product_properties: [{ label: 'Material', value: 'Titanium' }],
    product_return_policy: '20-day return policy.'
  },
  {
    id: 4,
    name: "Blue Lagoon",
    originalPrice: 299.99,
    salePrice: 199.99,
    image: product3,
    outOfStock: false,
    color:'blue',
    quantity: 1,
    product_image: product3,
    product_image_shades: [product3, product3a, product3b],
    product_description: 'Stylish, durable, and eco-friendly frame with a touch of elegance for daily wear.',
    product_properties: [{ label: 'Material', value: 'Wood' }],
    product_return_policy: '30-day return policy.'
  },
  {
    id: 5,
    name: "victoria peak",
    originalPrice: 450.00,
    salePrice: 400.00,
    image: product5,
    outOfStock: true,
    color: 'white',
    quantity: 1,
    product_image: product5,
    product_image_shades: [product5, product5a, product5b],
    product_description: 'Bold, iconic design perfect for those seeking a statement piece.',
    product_properties: [{ label: 'Material', value: 'Plastic' }],
    product_return_policy: '30-day return policy.'
  },
];


export default function OpticalFramesProducts() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('price-low-high');
  const [itemsToShow, setItemsToShow] = useState<number>(12);
  const { addToCart } = useStore();
  const { setProductDetails } = useProductDetailsStore();
    const [showPopup, setShowPopup] = useState<boolean>(false);
  
  
  // Access the global addToCart function

   const handleProductClick = (product:Product) => {
    setProductDetails(product);
    localStorage.setItem('selectedProduct', JSON.stringify(product)); // Save to localStorage if necessary
   };
  
   const handleAddToCart = (product: Product) => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };
  // Handle the sorting logic
  const handleSort = (productsToSort: Product[]): Product[] => {
    switch (sortBy) {
      case 'price-low-high':
        return productsToSort.sort((a, b) => a.salePrice - b.salePrice);
      case 'price-high-low':
        return productsToSort.sort((a, b) => b.salePrice - a.salePrice);
      case 'newest':
        return productsToSort.sort((a, b) => b.id - a.id);
      default:
        return productsToSort;
    }
  };

  // Handle the filter logic
  const filteredProducts = products.filter(product => {
    const inStockFilter = !inStockOnly || !product.outOfStock;
    const priceFilter = product.salePrice >= priceRange.min && product.salePrice <= priceRange.max;
    const colorFilter = !selectedColor || product.color === selectedColor;

    return inStockFilter && priceFilter && colorFilter;
  });

  // Sort and limit the filtered products based on the current itemsToShow count
  const sortedProducts = handleSort(filteredProducts).slice(0, itemsToShow);

  const loadMore = () => {
    setItemsToShow(prev => prev + 12); // Increase the number of items shown by 12
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showPopup && (
        <div className="fixed z-[100] top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md transition-all">
          <p>Added to cart successfully!</p>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="space-y-6">
            {/* Availability */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Availability</h2>
              <Select onValueChange={(value) => setInStockOnly(value === 'in-stock')}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="in-stock">In Stock Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Price</h2>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  placeholder="From"
                  className="w-1/2"
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) || 0 }))}
                />
                <Input
                  type="number"
                  placeholder="To"
                  className="w-1/2"
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) || Infinity }))}
                />
              </div>
              <Button className="w-full mt-2" onClick={() => console.log('Price filter applied')}>
                Filter
              </Button>
            </div>

            {/* Color Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Color</h2>
              <Select onValueChange={(value) => setSelectedColor(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All colors</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            {/* Sort and Display Options */}
            <div className="flex items-center space-x-4">
              <span>Sort by:</span>
              <Select onValueChange={(value) => setSortBy(value)} defaultValue="price-low-high">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low-high">Price, Low To High</SelectItem>
                  <SelectItem value="price-high-low">Price, High To Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-4">
              <span>Showing {sortedProducts.length} of {filteredProducts.length} results</span>
              <Button variant="outline" size="icon" onClick={() => setViewMode('grid')}>
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => setViewMode('list')}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                <div className="relative">
                  <Link href={`/product/`}>
                    <div onClick={() => handleProductClick(product)}>
                    <Image width={200} height={200} src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md cursor-pointer" />
                    </div>
                  </Link>
                  {product.outOfStock && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      OUT OF STOCK
                    </span>
                  )}
                  {product.salePercentage && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.salePercentage}%
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="text-lg font-bold">${product.salePrice}</span>
                </div>
                <div className="flex items-center justify-end mt-4 space-x-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleAddToCart(product)} // Trigger addToCart with product
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load more button */}
          {itemsToShow < filteredProducts.length && (
            <div className="text-center mt-8">
              <Button onClick={loadMore}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
