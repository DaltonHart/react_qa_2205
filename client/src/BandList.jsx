import React from "react";

import BandCard from "./BandCard";

function BandList({ bands, header, genre }) {
  const generateBands = () => {
    return bands.map(band => {
      if (genre) {
        if (band.genre.includes(genre)) {
          return <BandCard key={header + band._id} data={band} />;
        }
      } else {
        return <BandCard key={header + band._id} data={band} />;
      }
    });
  };

  return (
    <div className='band-list'>
      <h3>{header}</h3>
      {generateBands()}
    </div>
  );
}

export default BandList;
