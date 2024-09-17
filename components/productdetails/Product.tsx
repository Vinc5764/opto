'use client';
import { useState } from 'react'
import Image from 'next/image'
import { Expand, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import opto from '@/public/product1.webp'

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(opto)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={selectedImage}
              alt="Everest Peak Glasses"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
              Out of Stock
            </span>
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
              <Expand className="w-5 h-5" />
            </button>
          </div>
          <div className="flex space-x-4">
            {['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'].map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(src)}
                className="relative w-20 h-20 border rounded-md overflow-hidden"
              >
                <Image src={opto} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">Everest Peak</h1>
            <Heart className="w-6 h-6" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary">GH₵305.99</span>
            <span className="text-sm text-muted-foreground line-through">GH₵397.99</span>
          </div>
          <p className="text-muted-foreground">
            Discover the perfect blend of style and functionality with this Optical Frame, meticulously designed to fit any face shape and complement any style. This versatile eyeglass frame is the ideal choice for anyone seeking a blend of elegance, durability, and comfort.
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>PD/Size</Label>
                <div className="font-medium">74mm</div>
              </div>
              <div>
                <Label>Colour</Label>
                <div className="font-medium">Clear</div>
              </div>
              <div>
                <Label>Gender</Label>
                <div className="font-medium">Men</div>
              </div>
              <div>
                <Label>Material</Label>
                <div className="font-medium">Plastic</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Label>Prescription Type</Label>
            <RadioGroup defaultValue="single" className="flex flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="single" id="single" />
                <Label htmlFor="single">Single Vision</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bifocal" id="bifocal" />
                <Label htmlFor="bifocal">Bifocal Lens</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="progressive" id="progressive" />
                <Label htmlFor="progressive">Progressive Lens</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no-prescription" id="no-prescription" />
                <Label htmlFor="no-prescription">No Prescription</Label>
              </div>
            </RadioGroup>
          </div>
          <Button className="w-full" disabled>Out of Stock</Button>
          <div className="text-sm text-muted-foreground">
            Guaranteed secure checkout
            <div className="flex space-x-2 mt-2">
              <Image src="/placeholder.svg" alt="Mastercard" width={40} height={24} />
              <Image src="/placeholder.svg" alt="Visa" width={40} height={24} />
              <Image src="/placeholder.svg" alt="MTN Mobile Money" width={40} height={24} />
              <Image src="/placeholder.svg" alt="Airtel Tigo" width={40} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}