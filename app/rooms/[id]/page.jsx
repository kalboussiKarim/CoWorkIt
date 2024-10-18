import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import BookingForm from "@/components/BookingForm";
import getSingleRoom from "@/app/actions/getSingleRoom";

const RoomPage = async ({ params }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const { id } = params;
  const room = await getSingleRoom(id);
  if (!room) {
    return <Heading title="Room Not Found" />;
  }

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : "/images/no-image.jpg";

  return (
    <div className="bg-nav-bg border border-white/40 shadow rounded-lg p-6">
      <Link
        href="/"
        className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
      >
        <FaChevronLeft className="inline mr-1 text-[#DB1A5A]" />
        <span className="ml-2 text-white">Back to Rooms</span>
      </Link>

      <div className="flex flex-col sm:flex-row sm:space-x-6 text-white">
        <Image
          src={imageSrc}
          alt={room.name}
          width={400}
          height={100}
          className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
        />

        <div className="mt-4 sm:mt-0 sm:flex-1">
          <p className="text-lg mb-4">{room.description}</p>

          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">
              <span className="font-semibold text-white text-lg">Size: </span>{" "}
              {room.sqft} m2
            </li>
            <li className="text-gray-400">
              <span className="font-semibold text-white text-lg">
                Availability:{" "}
              </span>
              {room.availability}
            </li>
            <li className="text-gray-400">
              <span className="font-semibold text-white text-lg">Price: </span>
              {room.price_per_hour}
            </li>
            <li className="text-gray-400">
              <span className="font-semibold text-white text-lg">
                Address:{" "}
              </span>
              {room.address}
            </li>
          </ul>
        </div>
      </div>
      <BookingForm room={room} />
    </div>
  );
};

export default RoomPage;
