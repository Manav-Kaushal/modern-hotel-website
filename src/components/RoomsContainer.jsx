import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomList from "./RoomList";
import RoomsFilter from "./RoomsFilter";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

//! First Method
// import React from "react";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";
// import RoomList from "./RoomList";
// import RoomsFilter from "./RoomsFilter";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
