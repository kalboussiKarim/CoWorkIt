"use server";

import { createSeesionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";
import { DateTime } from "luxon";

function toUTCDateTime(dateString) {
  return DateTime.fromISO(dateString, { zone: "utc" }).toUTC();
}

function dateRangesOverlap(checkInA, checkOutA, checkInB, checkOutB) {
  return checkInA < checkOutB && checkOutA > checkInB;
}

async function checkRoomAvailability(roomId, checkIn, checkOut) {
  const sessionCookie = cookies().get("appwrite-session");
  if (!sessionCookie) {
    redirect("/login");
  }
  try {
    const { databases } = await createSeesionClient(sessionCookie.value);

    const chekInDateTime = toUTCDateTime(checkIn);
    const chekOutDateTime = toUTCDateTime(checkOut);

    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal("room_id", roomId)]
    );

    //search for already took dates and times
    for (const booking of bookings) {
      const bookingCheckInDateTime = toUTCDateTime(booking.check_in);
      const bookingCheckOutDateTime = toUTCDateTime(booking.check_out);
      if (
        dateRangesOverlap(
          chekInDateTime,
          chekOutDateTime,
          bookingCheckInDateTime,
          bookingCheckOutDateTime
        )
      ) {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.log("Failed to check availability", error);
    return {
      error: "Failed to check availability",
    };
  }
}

export default checkRoomAvailability;
