import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import PuffLoader from "react-spinners/PuffLoader";
import RingLoader from "react-spinners/RingLoader";

export const Spinner = ({ color = "#ff0000", type = "ring", size = 100 }) => {
  const getSpinner = () => {
    switch (type) {
      case "moon":
        return <MoonLoader size={size} color={color} />;
      case "puff":
        return <PuffLoader size={size} color={color} />;
      case "ring":
        return <RingLoader size={size} color={color} />;
      default:
        return <RingLoader size={size} color={color} />;
    }
  };

  return (
    <div
      className={`d-flex flex-column align-items-center ${
        type === "ring" ? "mt-4" : ""
      }`}
    >
      {getSpinner()}
      {type === "ring" ? (
        <div className="lead text-muted mt-4">Talking to Github...</div>
      ) : null}
    </div>
  );
};
