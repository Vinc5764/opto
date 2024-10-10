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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type ProductProperty = {
  label: string;
  value: string | number;
};

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: StaticImageData;
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
    product_properties: [ { label: 'Brand', value: 'ADIDAS' }, { label: "Gender", value: "Unisex" },
  { label: "Color", value: "Black" },
  { label: "Frame Material", value: "Metal" },
  { label: "Bridge Width", value: 18 },
  { label: "Frame Width", value: 140 },
  { label: "Temples Length", value: 145 },
  { label: "Rim Style", value: "Half Rim" },
  { label: "Branded Frame", value: "No" },],
    product_return_policy: '30-day return policy.'
  },
  {
    id: 2,
    name: "Serengeti Sunset",
    originalPrice: 397.99,
    salePrice: 305.99,
    image: product4,
    salePercentage: 11,
    outOfStock: false,
    color: 'red',
    quantity: 1,
    product_image: product4,
    product_image_shades: [product4, product4a, product4b],
    product_description: 'Elegant, stylish frame perfect for evening wear. Enhances your unique features.',
    product_properties: [ { label: 'Brand', value: 'ADIDAS SPORT' },{ label: "Gender", value: "Men" },
  { label: "Color", value: "Blue" },
  { label: "Frame Material", value: "Plastic" },
  { label: "Bridge Width", value: 20 },
  { label: "Frame Width", value: 142 },
  { label: "Temples Length", value: 138 },
  { label: "Rim Style", value: "Full Rim" },
  { label: "Branded Frame", value: "Yes" },],
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
    product_properties: [ { label: 'Brand', value: 'TIMBERLAND' }, { label: "Gender", value: "Women" },
  { label: "Color", value: "Tortoise" },
  { label: "Frame Material", value: "Titanium" },
  { label: "Bridge Width", value: 16 },
  { label: "Frame Width", value: 138 },
  { label: "Temples Length", value: 135 },
  { label: "Rim Style", value: "Rimless" },
  { label: "Branded Frame", value: "Yes" },],
    product_return_policy: '20-day return policy.'
  },
  {
    id: 4,
    name: "Blue Lagoon",
    originalPrice: 299.99,
    salePrice: 199.99,
    image: product3,
    outOfStock: false,
    color: 'blue',
    quantity: 1,
    product_image: product3,
    product_image_shades: [product3, product3a, product3b],
    product_description: 'Stylish, durable, and eco-friendly frame with a touch of elegance for daily wear.',
    product_properties: [ { label: 'Brand', value: 'BMW' },{ label: "Gender", value: "Unisex" },
  { label: "Color", value: "Green" },
  { label: "Frame Material", value: "Acetate" },
  { label: "Bridge Width", value: 21 },
  { label: "Frame Width", value: 144 },
  { label: "Temples Length", value: 143 },
  { label: "Rim Style", value: "Full Rim" },
  { label: "Branded Frame", value: "No" },],
    product_return_policy: '30-day return policy.'
  },
  {
    id: 5,
    name: "Victoria Peak",
    originalPrice: 450.00,
    salePrice: 400.00,
    image: product5,
    outOfStock: true,
    color: 'white',
    quantity: 1,
    product_image: product5,
    product_image_shades: [product5, product5a, product5b],
    product_description: 'Bold, iconic design perfect for those seeking a statement piece.',
    product_properties:
  [{ label: 'Brand', value: 'BALLY' }, { label: "Gender", value: "Unisex" },
  { label: "Color", value: "Red" },
  { label: "Frame Material", value: "Acetate & Stainless Steel" },
  { label: "Bridge Width", value: 19 },
  { label: "Frame Width", value: 135 },
  { label: "Temples Length", value: 140 },
  { label: "Rim Style", value: "Full Rim" },
  { label: "Branded Frame", value: "Yes" },],
    product_return_policy: '30-day return policy.'
  },
];

interface FilterOption {
  label: string;
  count: number;
}

interface FilterSection {
  title: string
  options: FilterOption[]
}

const filterSections: FilterSection[] = [
  {
    title: "Color",
    options: [
      { label: "Black", count: 1 },
      { label: "Red", count: 0 },
      { label: "Blue", count: 2 },
      { label: "White", count: 1 },
    ],
  },
  {
    title: "Brand",
    options :[
  { label: "ADIDAS", count: 1 },
  { label: "ADIDAS SPORT", count: 1 },
  { label: "AIGNER", count: 0 },
  { label: "ATELIER SWAROVSKI", count: 0 },
  { label: "BALLY", count: 1 },
  { label: "BENETTON", count: 0 },
  { label: "BMW", count: 1 },
  { label: "BMW MOTORSPORT", count: 0 },
  { label: "BOSS", count: 0 },
  { label: "CAROLINA HERRERA", count: 0 },
  { label: "CARRERA", count: 0 },
  { label: "CHOPARD", count: 0 },
  { label: "CHRISTIAN LACROIX", count: 0 },
  { label: "DIESEL", count: 0 },
  { label: "DSQUARED2", count: 0 },
  { label: "DUCATI", count: 0 },
  { label: "EMILIO PUCCI", count: 0 },
  { label: "ERMENEGILDO ZEGNA", count: 0 },
  { label: "ESCADA", count: 0 },
  { label: "FILA", count: 0 },
  { label: "FURLA", count: 0 },
  { label: "GANT", count: 0 },
  { label: "GIANFRANCO FERRE", count: 0 },
  { label: "GREATER THAN INFINITY", count: 0 },
  { label: "GUESS", count: 0 },
  { label: "HACKETT", count: 0 },
  { label: "HACKETT BESPOKE", count: 0 },
  { label: "HALLY & SON", count: 0 },
  { label: "HARLEY-DAVIDSON", count: 0 },
  { label: "HELLY HANSON", count: 0 },
  { label: "HUGO", count: 0 },
  { label: "LIEBESKIND", count: 0 },
  { label: "LIPSY", count: 0 },
  { label: "LOCMAN", count: 0 },
  { label: "LONGINES", count: 0 },
  { label: "LOZZA", count: 0 },
  { label: "MAJE", count: 0 },
  { label: "MARCIANO BY GUESS", count: 0 },
  { label: "MAX & CO", count: 0 },
  { label: "MAZ MARA", count: 0 },
  { label: "MORE & MORE", count: 0 },
  { label: "NEW BALANCE", count: 0 },
  { label: "NINA RICCI", count: 0 },
  { label: "OMEGA", count: 0 },
  { label: "PEPE JEANS", count: 0 },
  { label: "PHILLIPP PLEIN", count: 0 },
  { label: "POLAROID", count: 0 },
  { label: "POLICE", count: 0 },
  { label: "QUICKSILVER", count: 0 },
  { label: "REEBOK", count: 0 },
  { label: "ROBERTO CAVALLI", count: 0 },
  { label: "ROST", count: 0 },
  { label: "ROXY", count: 0 },
  { label: "SANDRO", count: 0 },
  { label: "SCOTCH & SODA", count: 0 },
  { label: "SIGHT STATION", count: 0 },
  { label: "SKECHERS", count: 0 },
  { label: "SPORTMAX", count: 0 },
  { label: "STING", count: 0 },
  { label: "SUPERDRY", count: 0 },
  { label: "SWAROVSKI", count: 0 },
  { label: "TED BAKER", count: 0 },
  { label: "TIMBERLAND", count: 1 },
  { label: "TODS", count: 0 },
  { label: "TOMMY HILFIGER", count: 0 },
  { label: "TRUSSARDI", count: 0 },
  { label: "VALENTINO", count: 0 },
  { label: "WEB", count: 0 },
  { label: "YOHJI YAMAMOTO", count: 0 },
  { label: "ZAC POSEN", count: 0 },
  { label: "ZADIG & VOLTAIRE", count: 0 },
  { label: "ZEGNA COUTURE", count: 0 },
],
  },
]

export default function OpticalFramesProducts() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });
  // const [selectedColor, setSelectedColor] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('price-low-high');
  const [itemsToShow, setItemsToShow] = useState<number>(12);
  const { addToCart } = useStore();
  const { setProductDetails } = useProductDetailsStore();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  
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

  const handleFilterChange = (section: string, option: string) => {
    setSelectedFilters((prev) => {
      const sectionFilters = prev[section] || []
      if (sectionFilters.includes(option)) {
        return {
          ...prev,
          [section]: sectionFilters.filter((item) => item !== option),
        }
      } else {
        return {
          ...prev,
          [section]: [...sectionFilters, option],
        }
      }
    })
  }

  // Handle the filter logic
  const filteredProducts = products.filter(product => {
    const inStockFilter = !inStockOnly || !product.outOfStock;
    const priceFilter = product.salePrice >= priceRange.min && product.salePrice <= priceRange.max;
    // const colorFilter = !selectedColor || product.color === selectedColor;
    const accordionColorFilter = selectedFilters['Color']?.length 
      ? selectedFilters['Color'].includes(product.color.charAt(0).toUpperCase() + product.color.slice(1))
      : true;
    const frameTypeFilter = selectedFilters['Brand']?.length
  ? selectedFilters['Brand'].includes(
      String(product.product_properties.find(prop => prop.label === 'Brand')?.value || '')
    )
  : true;


    return inStockFilter && priceFilter  && accordionColorFilter && frameTypeFilter;
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
            {/* Accordion Filter */}
            <Accordion type="multiple" className="w-full">
              {filterSections.map((section) => (
                <AccordionItem value={section.title} key={section.title}>
                  <AccordionTrigger className="px-4 py-2 text-left">
                    <div>
                      <h2 className="text-lg font-semibold">{section.title}</h2>
                      <p className="text-sm text-gray-500">
                        {selectedFilters[section.title]?.length || 0} selected
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-4 py-2 h-24 space-y-2 overflow-y-scroll">
                      {section.options.map((option) => (
                        <div key={option.label} className="flex items-center">
                          <Checkbox
                            id={`${section.title}-${option.label}`}
                            checked={selectedFilters[section.title]?.includes(option.label)}
                            onCheckedChange={() => handleFilterChange(section.title, option.label)}
                          />
                          <Label
                            htmlFor={`${section.title}-${option.label}`}
                            className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option.label} ({option.count})
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

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