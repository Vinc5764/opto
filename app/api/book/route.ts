import { NextRequest, NextResponse } from 'next/server';
import User from '../model/order.model';

export const POST = async (req: NextRequest) => {
  try {
    // Parse incoming JSON data from the request body
    const requestData = await req.json();
    const { name, email, phone, service, appointmentDate, appointmentTime } = requestData;

    // Validate the required fields
    if (!name || !email || !phone || !service || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Check if the appointment time slot is already taken (example validation)
    const existingAppointment = await User.findOne({ 
      appointmentDate, 
      appointmentTime 
    });

    if (existingAppointment) {
      return NextResponse.json(
        { message: 'This appointment time is already booked.' },
        { status: 400 }
      );
    }

    // Create a new user appointment in the database
    const newUser = new User({
      name,
      email,
      phone,
      service,
      appointmentDate,
      appointmentTime,
    });

    // Save the appointment to the database
    const savedUser = await newUser.save();

    // Return the created appointment details
    return NextResponse.json({
      message: 'Appointment created successfully!',
      appointment: savedUser
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
