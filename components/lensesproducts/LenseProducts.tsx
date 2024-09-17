'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Grid, List, Heart, RotateCcw, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import product1 from '@/public/product1.webp'
import Image from 'next/image'

const products = [
  { id: 1, name: "Everest Peak", originalPrice: 397.99, salePrice: 305.99, image: product1, outOfStock: true },
  { id: 2, name: "Serengeti Sunset", originalPrice: 397.99, salePrice: 305.99, image: product1, salePercentage: 23 },
  { id: 3, name: "Niagara Mist", originalPrice: 397.99, salePrice: 305.99, image: product1, salePercentage: 23 },
]

export default function LenseProducts() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Availability</h2>
              <Button variant="outline" className="w-full justify-between">
                In stock only <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Price</h2>
              <div className="flex items-center space-x-2">
                <Input type="number" placeholder="From" className="w-1/2" />
                <Input type="number" placeholder="To" className="w-1/2" />
              </div>
              <Button className="w-full mt-2">Filter</Button>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Color</h2>
              <Button variant="outline" className="w-full justify-between">
                Select colors <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">More filters</h2>
              <Button variant="outline" className="w-full justify-between">
                Select filters <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <span>Sort by:</span>
              <Select defaultValue="price-low-high">
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
              <span>Showing 1 - 12 of 158 results</span>
              <Select defaultValue="12">
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="Show" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" onClick={() => setViewMode('grid')}>
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => setViewMode('list')}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {products.map((product) => (
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
                <div className="flex items-center mt-1">
                  <span className="text-gray-500 line-through mr-2">GH₵{product.originalPrice.toFixed(2)}</span>
                  <span className="text-red-500 font-bold">GH₵{product.salePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}