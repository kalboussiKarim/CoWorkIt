"use client";
import Heading from "@/components/Heading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import createRoom from "@/app/actions/createRoom";

const AddRoomPage = () => {
  const [state, formAction] = useFormState(createRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Room created successfully!");
      router.push("/");
    }
  }, [state]);
  return (
    <>
      <Heading title="Add a room" />
      <div className="bg-nav-bg border border-white/40 rounded-lg p-6 w-full">
        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">
              Room Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Enter a name (Large Conference Room)"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border rounded w-full h-24 py-2 px-3 bg-nav-bg text-white"
              placeholder="Enter a description for the room"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="sqft" className="block text-white font-bold mb-2">
              Square Feet
            </label>
            <input
              type="number"
              id="sqft"
              name="sqft"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Enter room size in m2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="capacity"
              className="block text-white font-bold mb-2"
            >
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Number of people the room can hold"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price_per_hour"
              className="block text-white font-bold mb-2"
            >
              Price Per Hour
            </label>
            <input
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Enter price per hour"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-white font-bold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Enter full address"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-white font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Location (Building, Floor, Room)"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="availability"
              className="block text-white font-bold mb-2"
            >
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Availability (Monday - Friday, 9am - 5pm)"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amenities"
              className="block text-white font-bold mb-2"
            >
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              className="border rounded w-full py-2 px-3 bg-nav-bg text-white"
              placeholder="Amenities CSV  (projector, whiteboard, etc.)"
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="image" className="block text-white font-bold mb-2">
              Image
            </label>

            <input
              type="file"
              id="image"
              name="image"
              className="border rounded w-full py-2 px-3 text-white "
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-appwrite-light-pink text-white px-4 py-2 rounded hover:bg-appwrite-dark-pink "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRoomPage;
