import { useState } from 'react'
import { ChevronDown, CreditCard } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState('pickup')
  const [billingAddress, setBillingAddress] = useState('same')

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
            { value: 'pickup', label: 'Pick up at Adabraka Branch', price: 'FREE' },
            { value: 'adenta', label: 'Pick up at Adenta Branch', price: 'FREE' },
            { value: 'dansoman', label: 'Pick up at Dansoman Circle Branch', price: 'FREE' },
            { value: 'eastlegon', label: 'Pick up at East Legon Branch', price: 'FREE' },
            { value: 'kotobabi', label: 'Pick up at Kotobabi Branch', price: 'FREE' },
            { value: 'kumasi', label: 'Pick up at Kumasi Branch', price: 'FREE' },
            { value: 'tema', label: 'Pick up at Tema Community 1 Branch', price: 'FREE' },
            { value: 'weija', label: 'Pick up at Weija Branch', price: 'FREE' },
            { value: 'accra', label: 'Delivery within Accra', price: '₵15.00' },
            { value: 'kasoa', label: 'Delivery to Kasoa, Weija & Environs', price: '₵45.00' },
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
                <img src="/visa.svg" alt="Visa" className="h-6" />
                <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
                <img src="/momo.svg" alt="Mobile Money" className="h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        <p className="text-sm text-gray-500 my-4">After clicking "Pay now", you will be redirected to Paystack to complete your purchase securely.</p>

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
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Niagara Mat" className="w-16 h-16 object-cover mr-4" />
              <div>
                <h3 className="font-bold">Niagara Mat</h3>
                <p className="text-sm text-gray-500">₵305.99</p>
              </div>
            </div>
            <Input placeholder="Discount code" className="mb-2" />
            <Button variant="outline" className="w-full mb-4">Apply</Button>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₵305.99</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span className="text-green-500">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>USD $305.99</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}