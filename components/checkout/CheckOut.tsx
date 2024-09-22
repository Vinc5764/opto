'use client'

import { useState } from 'react'
import { useStore } from '@/store'
import { CreditCard } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'
import momo from '@/public/momo.svg'

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState('pickup')
  const [billingAddress, setBillingAddress] = useState('same')

  const cartItems = useStore((state) => state.cartItems)
  const subtotalPrice = useStore((state) => state.totalPrice)

  // Define shipping fee based on selected method
  const shippingFees = {
    pickup: 0,
    accra: 15,
    kasoa: 45,
    'tema-delivery': 45,
    'outside-accra': 70,
  }

  const shippingFee = shippingFees[shippingMethod] || 0
  const totalPrice = subtotalPrice() + shippingFee

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <Input type="text" placeholder="Email or mobile phone number" className="mb-4" />
        <Checkbox id="email-updates" className="mb-4">
          <span className="ml-2">Email me with news and offers</span>
        </Checkbox>

        <h2 className="text-2xl font-bold mb-4">Delivery</h2>
        <Select>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Country/Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ghana">Ghana</SelectItem>
          </SelectContent>
        </Select>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input placeholder="First name (optional)" />
          <Input placeholder="Last name" />
        </div>
        <Input placeholder="Address" className="mb-4" />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input placeholder="City" />
          <Input placeholder="Postal code (optional)" />
        </div>
        <Input placeholder="Phone (optional)" className="mb-4" />
        <Checkbox id="save-info" className="mb-4">
          <span className="ml-2">Save this information for next time</span>
        </Checkbox>

        <h2 className="text-2xl font-bold mb-4">Shipping method</h2>
        <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
          {[
            { value: 'pickup', label: 'Pick up at Branch', price: 'FREE' },
            { value: 'accra', label: 'Delivery within Accra', price: '₵15.00' },
            { value: 'kasoa', label: 'Delivery to Kasoa & Environs', price: '₵45.00' },
            { value: 'tema-delivery', label: 'Delivery to Tema', price: '₵45.00' },
            { value: 'outside-accra', label: 'Delivery outside Accra', price: '₵70.00' },
          ].map((option) => (
            <div key={option.value} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex justify-between w-full">
                <span>{option.label}</span>
                <span>{option.price}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <h2 className="text-2xl font-bold my-4">Payment</h2>
        <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="mr-2" />
                <span>Paystack</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image width={200} height={200} src={momo} alt="Mobile Money" className="h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Billing address</h2>
        <RadioGroup value={billingAddress} onValueChange={setBillingAddress}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="same" id="same-address" />
            <Label htmlFor="same-address">Same as shipping address</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="different" id="different-address" />
            <Label htmlFor="different-address">Use a different billing address</Label>
          </div>
        </RadioGroup>

        <Button className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white">Pay now</Button>
      </div>

      <div className="w-full lg:w-1/3">
        <Card>
          <CardContent className="p-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image
                  width={item.image.width}
                  height={item.image.height}
                  src={item.image.src}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">₵{item.salePrice}</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₵{subtotalPrice()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>₵{shippingFee === 0 ? 'FREE' : shippingFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₵{totalPrice}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
