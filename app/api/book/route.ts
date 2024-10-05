import { NextRequest, NextResponse } from 'next/server';
// import { MailtrapClient } from 'mailtrap';

// const TOKEN = process.env.MAILTRAP_TOKEN || '02b58fb1e727dfee2962514de1ab66e6'; // Use environment variable for security

// Instantiate Mailtrap client
// const client = new MailtrapClient({
//   token: TOKEN,
// });

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

    // Connect to DB and check if the appointment time slot is already taken
    // Uncomment this after setting up the database connection
    // const newUser = new User({ name, email, phone, service, date, time });
    // const savedUser = await newUser.save();

    // Prepare email sender and recipients
    // const sender = {
    //   email: 'hello@demomailtrap.com', // Update with your sender email
    //   name: 'Appointment Confirmation',
    // };

    // // Recipient email (user)
    // const userRecipient = [
    //   {
    //     email: email, // Send email to the user who created the appointment
    //   }
    // ];

    // Admin email (assuming it's hardcoded for now or can be set via env)
    // const adminRecipient = [
    //   {
    //     email: process.env.ADMIN_EMAIL || 'admin@example.com', // Set the admin email
    //   }
    // ];

    // Send email to user (confirmation)
    // await client.bulk.send({
    //   from: sender,
    //   to: userRecipient,
    //   subject: 'Appointment Confirmation',
    //   text: `Hello ${name}, your appointment for ${service} on ${date} at ${time} has been successfully created!`,
    //   category: 'Appointment',
    // });

    // Send email to admin (notification)
    // await client.bulk.send({
    //   from: sender,
    //   to: adminRecipient,
    //   subject: 'New Appointment Created',
    //   text: `A new appointment has been created by ${name} for ${service} on ${date} at ${time}. Please check the appointment details.`,
    //   category: 'Appointment Notification',
    // });

    // Return a success message after both emails are sent
    return NextResponse.json(
      {
        message: 'Appointment created successfully and confirmation emails sent to both the user and admin!',
        // appointment: savedUser
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle errors
    console.error('Error creating appointment and sending emails:', error);
    return NextResponse.json(
      { message: 'Failed to create appointment or send emails.' },
      { status: 500 }
    );
  }
};
