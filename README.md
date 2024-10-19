# CoWorkIt

**CoWorkIt** is a platform where users can book coworking spaces and rooms for meetings, conferences, or creative work. Users can explore available rooms and book them. To post or book a room, users must be signed in. The app ensures that rooms can't be booked by multiple users simultaneously.

## Live Demo

You can access the live application here: [CoWorkIt](https://co-work-it.vercel.app/)

## Features

- **User Authentication**: Secure sign-in and registration using Appwrite authentication.
- **Room Booking**: Users can browse, book, and post coworking spaces and meeting rooms.
- **Room Management**: Users can post new rooms or spaces, set availability, and manage their listings.
- **Real-Time Booking**: Prevents double bookings by ensuring rooms cannot be booked at the same time by different users.
- **Responsive Design**: Optimized for a smooth experience across different devices and screen sizes.

## Technologies Used

- **Next.js**  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
  
- **Appwrite**  
  ![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)

- **Tailwind CSS**  
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

- **Vercel**  
  ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


## Installation

To set up and run **CoWorkIt** locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/kalboussiKarim/CoWorkIt.git
cd CoWorkIt
```

### 2. Set up Appwrite:

Make sure you have Appwrite configured. You’ll need to set up:

1. Appwrite URL: The URL where Appwrite is hosted.
2. Project ID: The Appwrite project ID for CoWorkIt.
3. Database: Create collections for rooms and bookings.
4. Storage: Ensure storage is configured for room images or any other file uploads.
5. .env Configuration: Create a .env.local file and add the following:

```bash
NEXT_APPWRITE_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPWRITE_ENDPOINT=xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPWRITE_PROJECT=xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPWRITE_DATABASE=xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS=xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS=xxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Run the development server:

```bash
npm run dev
```

### Open the application:

Visit http://localhost:3000 in your browser to start using the app.
