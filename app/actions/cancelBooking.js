"use server";

import { createSeesionClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import checkAuth from "./checkAuth";
import { cookies } from "next/headers";

async function cancelBooking(bookingId) {
  const sessionCookie = cookies().get("appwrite-session");
  if (!sessionCookie) {
    redirect("/login");
  }
  try {
    const { databases } = await createSeesionClient(sessionCookie.value);

    const { user } = await checkAuth();

    if (!user) {
      return {
        error: "You must be logged in to cancel a booking",
      };
    }

    const booking = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId
    );

    if (booking.user_id !== user.id) {
      return {
        error: "You are not authorized to cancel this booking",
      };
    }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId
    );

    revalidatePath("/bookings", "layout");
    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to cance booking", error);
    return {
      error: "Failed to cance booking",
    };
  }
}

export default cancelBooking;
