/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { connectToDB } from "@/lib/connect";

// Replace with your Paystack secret key
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || "sk_live_58fe2547f764f61e63084f063f7f1af22701774d";

// POST: Create a new school registration request and initialize payment
export const POST = async (req: NextRequest) => {
  try {
    // Parse incoming JSON data from the request body
    await connectToDB();
    const requestData = await req.json();
    const { subtotalPrice,  phone, address, cartItems, deliveryDetails } = requestData;


    const amt = subtotalPrice * 100; // Convert GHC to the smallest unit

    // Extract product names from cartItems
    const productNames = cartItems.map((item:any) => item.name);

    // Prepare payment metadata, including cart items and delivery details
    const metadata = {
      
      phone,
      address,
      amt,
      productNames, // List of product names from the cart
      deliveryDetails: {
        country: deliveryDetails.country,
        firstName: deliveryDetails.firstName,
        lastName: deliveryDetails.lastName,
        address: deliveryDetails.address,
        city: deliveryDetails.city,
        postalCode: deliveryDetails.postalCode,
      },
    };

    // Initialize payment with Paystack
    const paymentResponse = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email:deliveryDetails.email,
        amount: amt,
        metadata,
        currency: "GHS", // Set the currency to Ghanaian Cedi
        channels: ["card", "mobile_money"],
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the payment initialization was successful
    if (paymentResponse.data.status) {
      // Return the payment URL to the frontend
      return NextResponse.json({
        message: "Registration request created successfully",
        paystackUrl: paymentResponse.data.data.authorization_url,
      });
    } else {
      throw new Error("Payment initialization failed");
    }
  } catch (error) {
    // Handle errors
    console.error("Error creating registration request:", error);
    return NextResponse.json(
      { message: "Failed to create registration request or initialize payment" },
      { status: 500 }
    );
  }
};
