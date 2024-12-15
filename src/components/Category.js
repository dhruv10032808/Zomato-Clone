import React from "react";
import "../App.css";

const categories = [
  {
    id: 1,
    title: "Order Online",
    description: "Stay home and order to your door",
    image:
      "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
  },
  {
    id: 3,
    title: "Live Events",
    description: "Discover India’s best events & concerts",
    image:
      "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
  },
];

function Category() {
  return (
    <div className="category-cards">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img src={category.image} />
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;
