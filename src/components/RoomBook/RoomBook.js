import React from "react";
import "./RoomBook.css";
import { useLoaderData } from "react-router-dom";

const RoomBook = () => {
  const room = useLoaderData();
  const { details, title, url } = room;
  return (
    <div className="detail-page-container ">
      <div className="d-flex align-items-center">
        <img src={url} alt="hotel room " className="room-img" />
        <div className="w-50 ">
          <h2>{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomBook;
