'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Grid, List, Heart, RotateCcw, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import product1 from '@/public/product1.webp';
import Image, { StaticImageData } from 'next/image';
import { useStore } from '@/store';

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: StaticImageData; // Adjust based on how your images are imported
  outOfStock?: boolean;
  color: string;
  quantity: number;
  salePercentage?: number;
}

// Example products
const products: Product[] = [
  { id: 1, name: "Everest Peak", originalPrice: 397.99, salePrice: 305.99, image: product1, outOfStock: true, color: 'black', quantity: 1 },
  { id: 2, name: "Serengeti Sunset", originalPrice: 397.99, salePrice: 305.99, image: product1, salePercentage: 23, color: 'red', quantity: 1 },
  { id: 3, name: "Niagara Mist", originalPrice: 397.99, salePrice: 305.99, image: product1, salePercentage: 23, color: 'blue', quantity: 1 },
  { id: 4, name: "Savannah Breeze", originalPrice: 299.99, salePrice: 199.99, image: product1, salePercentage: 33, color: 'green', quantity: 1 },
  { id: 5, name: "Sahara Dunes", originalPrice: 450.00, salePrice: 400.00, image: product1, color: 'yellow', quantity: 1 },
  { id: 6, name: "Pacific Wave", originalPrice: 499.99, salePrice: 450.99, image: product1, color: 'blue', outOfStock: true, quantity: 1 },
  { id: 7, name: "Rainforest Glimmer", originalPrice: 350.99, salePrice: 300.99, image: product1, salePercentage: 14, color: 'green', quantity: 1 },
  { id: 12, name: "Golden Mirage", originalPrice: 320.99, salePrice: 280.99, image: product1, salePercentage: 15, color: 'gold', quantity: 1 }
];

export default function OpticalFramesProducts() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('price-low-high');
  const [itemsToShow, setItemsToShow] = useState<number>(12);
  const {  addToCart } = useStore(); // Access the global addToCart function

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
                  <Link href={`/product/${product.id}`}>
                    <Image width={200} height={200} src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md cursor-pointer" />
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
                    onClick={() => addToCart(product)} // Trigger addToCart with product
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
