// OpticsNavbar.tsx
'use client';
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Minus, Plus, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import optologo from '@/public/logoOpto.jpg';
import { useStore } from '@/store'; // Adjust the import path if needed

export default function OpticsNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Zustand store hooks
  const { cartItems, updateQuantity, removeItem, totalItems, totalPrice } = useStore();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src={optologo} alt="Optics Logo" className="w-24" />
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="text-[#36accb] inline-flex items-center px-1 pt-1 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-[#36accb] inline-flex items-center px-1 pt-1 text-sm font-medium">
              About Us
            </Link>
            <Link href={`/product/opticalframes/`} className="text-[#36accb] inline-flex items-center px-1 pt-1 text-sm font-medium">
              Optical Frames
            </Link>
            <Link href={`/product/contactlenses`} className="text-[#36accb] inline-flex items-center px-1 pt-1 text-sm font-medium">
              Contact Lenses
            </Link>
            <Link href={`/product/sunglasses`} className="text-[#36accb] inline-flex items-center px-1 pt-1 text-sm font-medium">
              Sun glasses
            </Link>
            <Link href={`/product/accessories`} className="text-[#36accb] inline-flex items-center px-1 pt-1 text-sm font-medium">
              Accessories
            </Link>
            <Link href="/contact" className="text-[#36accb] inline-flex items-center px-1 pt-1 text-sm font-medium">
              Contact Us
            </Link>
          </div>

          {/* Cart icon and Hamburger menu */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative">
                  <ShoppingCart className="h-6 w-6 text-[#36accb]" />
                  {totalItems() > 0 && (
                    <Badge variant="destructive" className="absolute -top-2 -right-2">
                      {totalItems()}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
                  {cartItems.length === 0 ? (
                    <p className="text-muted-foreground">Your cart is empty</p>
                  ) : (
                    <>
                      <ul className="space-y-4">
                        {cartItems?.map(item => (
                          <li key={item?.id} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{item?.name}</p>
                              <p className="text-sm text-muted-foreground">
                                ${item?.salePrice} x {item?.quantity}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item?.id, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span>{item?.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <Separator className="my-4" />
                      <div className="flex justify-between items-center font-semibold">
                        <p>Total ({totalItems()} {totalItems() === 1 ? 'item' : 'items'}):</p>
                        <p>${totalPrice().toFixed(2)}</p>
                        </div>
                        <Link href={`/checkout/`}>
                      <Button className="w-full mt-4">Proceed to Checkout</Button>
                        </Link>
                    </>
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hamburger Icon for Mobile */}
            <button className="sm:hidden" onClick={toggleSidebar}>
              <Menu className="h-6 w-6 text-[#36accb]" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#e4fbfb]  text-blue-900 sm:hidden">
          <button className="self-end p-4" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </button>
          <nav className="px-4 py-6">
            <Link href="/" className="block text-blue-900 text-lg mb-4" onClick={toggleSidebar}>
              Home
            </Link>
            <Link href="/about" className="block text-blue-900 text-lg mb-4" onClick={toggleSidebar}>
              About Us
            </Link>
            <Link href="/product/opticalframes" className="block text-blue-900 text-lg mb-4" onClick={toggleSidebar}>
              Optical Frames
            </Link>
            <Link href="/product/contactlenses" className="block text-blue-900 text-lg mb-4" onClick={toggleSidebar}>
              Contact Lenses
            </Link>
             <Link href="/product/sunglasses" className="block text-blue-900 text-lg mb-4" onClick={toggleSidebar}>
              Sun glasses
            </Link>
            <Link href="/product/accessories" className="block text-blue-900 text-lg mb-4" onClick={toggleSidebar}>
              Accessories
            </Link>
            <Link href="/contact" className="block text-blue-900 text-lg mb-4" onClick={toggleSidebar}>
              Contact Us
            </Link>

            {/* Cart Section in Sidebar */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
              {cartItems.length === 0 ? (
                <p className="text-muted-foreground">Your cart is empty</p>
              ) : (
                <>
                  <ul className="space-y-4">
                    {cartItems.map(item => (
                      <li key={item.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            ${item.salePrice.toFixed(2)} x {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center font-semibold">
                    <p>Total ({totalItems()} {totalItems() === 1 ? 'item' : 'items'}):</p>
                    <p>${totalPrice().toFixed(2)}</p>
                    </div>
                  <Link href='/checkout'>
                  <Button className="w-full mt-4">Proceed to Checkout</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}
