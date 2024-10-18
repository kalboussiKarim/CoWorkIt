import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : "/images/no-image.jpg";

  return (
    <div className="bg-nav-bg text-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between border border-white/40 items-start sm:items-center">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <Image
          src={imageSrc}
          width={400}
          height={100}
          alt="Grand Conference Hall"
          className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
        />
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">{room.name}</h4>
          <p className="text-sm text-white">
            <span className="font-semibold text-white"> Address: </span>
            {room.address}
          </p>
          <p className="text-sm text-white">
            <span className="font-semibold text-white"> Availability: </span>
            {room.availability}
          </p>
          <p className="text-sm text-white">
            <span className="font-semibold text-white"> Price: </span>
            {room.price_per_hour} TND/day
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-appwrite-light-pink text-white font-bold px-4 py-2 rounded-lg mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-appwrite-dark-pink"
        >
          View Room
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
