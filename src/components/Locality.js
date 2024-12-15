import React from "react";
import "../App.css";

const localities = [
  { name: "College Road", places: 498 },
  { name: "Panchavati", places: 313 },
  { name: "Satpur", places: 174 },
  { name: "Pathardi Phata", places: 187 },
  { name: "Parijat Nagar", places: 113 },
  { name: "Anand Wali Goan", places: 54 },
  { name: "Sharanpur", places: 86 },
  { name: "Veer Sawarkar Nagar", places: 53 },
];

function Locality() {
  return (
    <div className="locality-section">
      <h2>Popular Localities in and around Nashik</h2>
      <div className="locality-cards">
        {localities.map((locality) => (
          <div className="locality-card">
            <h2>{locality.name}</h2>
            <p>{locality.places} places</p>
          </div>
        ))}
      </div>
      <div className="see-more">
        <a href="#">see more</a>
      </div>
    </div>
  );
}

export default Locality;
