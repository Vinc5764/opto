'use client'

import { useState, ChangeEvent } from 'react'
import { useStore } from '@/store'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'

export default function CheckoutPage() {
  const [deliveryDetails, setDeliveryDetails] = useState({
    country: 'ghana',
    firstName: '',
    lastName: '',
    address: '', 
    city: '',
    postalCode: '',
    phone: '',
    email: '', 
  })

  const [loading, setLoading] = useState(false) // Loading state

  const cartItems = useStore((state) => state.cartItems)
  const subtotalPrice = useStore((state) => state.totalPrice)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDeliveryDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    setLoading(true) // Start loading
    // Prepare data to send to backend
    const payload = {
      deliveryDetails,
      cartItems,
      subtotalPrice: subtotalPrice(),
    }

    try {
      const response = await fetch('https://kountryeyecare.vercel.app/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        const data = await response.json()

        // Check if the payment URL is available
        if (data?.paystackUrl) {
          window.location.href = data.paystackUrl // Redirect to Paystack
        } else {
          // Handle error when payment URL is not returned
          console.error('Payment URL not received.')
        }
      } else {
        console.error('Failed to place the order.')
      }
    } catch (error) {
      console.error('Error placing the order.', error)
    } finally {
      setLoading(false) // End loading
    }
  }

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <Input
          type="text"
          name="phone"
          placeholder="Mobile phone number"
          value={deliveryDetails.phone}
          onChange={handleInputChange}
          className="mb-4"
        />
        <Checkbox id="email-updates" className="mb-4">
          <span className="ml-2">Email me with news and offers</span>
        </Checkbox>

        <h2 className="text-2xl font-bold mb-4">Delivery</h2>
        <Select
          value={deliveryDetails.country}
          onValueChange={(value) =>
            setDeliveryDetails((prevState) => ({ ...prevState, country: value }))
          }
        >
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Country/Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ghana">Ghana</SelectItem>
          </SelectContent>
        </Select>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="First name (optional)"
            name="firstName"
            value={deliveryDetails.firstName}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Last name"
            name="lastName"
            value={deliveryDetails.lastName}
            onChange={handleInputChange}
          />
        </div>
        <Input
          placeholder="Address" 
          name="address"
          value={deliveryDetails.address}
          onChange={handleInputChange}
          className="mb-4"
        />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="City"
            name="city"
            value={deliveryDetails.city}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Postal code (optional)"
            name="postalCode"
            value={deliveryDetails.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={deliveryDetails.email}
          onChange={handleInputChange}
          className="mb-4"
        />

        <Button 
          className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white"
          onClick={handleSubmit}
          disabled={loading} // Disable button during loading
        >
          {loading ? 'Processing...' : 'Pay now'} {/* Show loading text */}
        </Button>
      </div>

      <div className="w-full lg:w-1/3">
        <Card>
          <CardContent className="p-4">
            {cartItems.map((item) => (
              <div key={item?.id} className="flex items-center mb-4">
                <Image
                  width={item?.image.width}
                  height={item?.image.height}
                  src={item?.image.src}
                  alt={item?.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{item?.name}</h3>
                  <p className="text-sm text-gray-500">₵{item?.salePrice}</p>
                  <p className="text-sm">Qty: {item?.quantity}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₵{subtotalPrice()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₵{subtotalPrice()}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
