import getMyRooms from "@/app/actions/getMyRooms";
import Heading from "@/components/Heading";
import MyRoomCard from "@/components/MyRoomCard";

const MyRoomsPage = async () => {
  const rooms = await getMyRooms();
  return (
    <>
      <Heading title="My Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room, index) => <MyRoomCard room={room} key={room.$id} />)
      ) : (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-white">You have no room list.</p>
        </div>
      )}
    </>
  );
};

export default MyRoomsPage;
