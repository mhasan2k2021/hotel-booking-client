import React from "react";
import "./RoomDetail.css";
import { Link } from "react-router-dom";

const RoomDetail = ({ roomDetail }) => {
  const { roomId, url, title, details } = roomDetail;
  return (
    <div className="cart-container">
      <img src={url} alt="room" className="photo" />
      <h3 className="title">{title}</h3>
      <p className="details">{details}</p>
      <Link
        to={`/details/${roomId}`}
        class="btn btn-primary position-absolute left"
      >
        Book
      </Link>
    </div>
  );
};

export default RoomDetail;
