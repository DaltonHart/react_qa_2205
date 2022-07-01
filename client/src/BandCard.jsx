import React from "react";

function BandCard({ data }) {
  return (
    <p style={{ backgroundColor: "red" }}>
      {data.name} - {data.genre}
    </p>
  );
}

export default BandCard;
