import { NextRequest, NextResponse } from 'next/server';
import User from '../model/order.model';
import { MailerSend, Recipient, EmailParams } from 'mailersend';
import { connectToDB } from '@/lib/connect';

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY, // Use environment variable for the API key
});

export const POST = async (req: NextRequest) => {
  try {
    // Parse incoming JSON data from the request body
    const requestData = await req.json();
    console.log(requestData);
    
    const { name, email, phone, service, date, time } = requestData;

    // Validate the required fields
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }


    // Check if the appointment time slot is already taken
  
    // Create a new user appointment in the database
    const newUser = new User({
      name,
      email,
      phone,
      service,
      date,
      time,
    });

    

    // Save the appointment to the database
    // const savedUser = await newUser.save();

    // Prepare email recipients
    
   

    // Return the created appointment details
    return NextResponse.json({
      message: 'Appointment created successfully and confirmation email sent!',
      // appointment: savedUser
    }, { status: 201 });

  } catch (error) {
    // Handle errors
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { message: 'Failed to create appointment.' },
      { status: 500 }
    );
  }
};
