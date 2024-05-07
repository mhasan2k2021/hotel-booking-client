import React, { useEffect, useState } from "react";
import "./Home.css";
import RoomDetail from "../RoomDetail/RoomDetail";

const Home = () => {
  const [roomDetails, setRoomDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/roomDetails")
      .then((res) => res.json())
      .then((data) => setRoomDetails(data));
  }, []);
  return (
    <div className="home-page">
      <div className="all-card-container">
        {roomDetails.map((roomDetail) => (
          <RoomDetail key={roomDetail.id} roomDetail={roomDetail}></RoomDetail>
        ))}
      </div>
    </div>
  );
};

export default Home;
