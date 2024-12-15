import React from "react";
import "../App.css";

const collections = [
  {
    id: 1,
    title: "Best of live screenings",
    places: "9 Places",
    image:
      "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
  },
  {
    id: 2,
    title: "Top Breakfast Spots",
    places: "16 Places",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAFg-zBzvCoHIJJrpCG3c7rVZsojYz2UrIw&s",
  },
  {
    id: 3,
    title: "Best Luxury Dining Places",
    places: "5 Places",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKiqupxetjuhIJw2blnws6BYDuMelnmzV_g&s",
  },
  {
    id: 4,
    title: "Great Cafes",
    places: "11 Places",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMcdm9BoulhXjWWf4j8c8WuyT7TboUB4-oQ&s",
  },
];

function Collections() {
  return (
    <div className="collections-section">
      <h2>Collections</h2>
      <p>
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Nashik, based on trends
      </p>
      <div className="collections-cards">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-card">
            <img src={collection.image} alt={collection.title} />
            <h3>{collection.title}</h3>
            <p>{collection.places}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
