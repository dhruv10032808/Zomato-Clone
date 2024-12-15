import React from "react";
import Category from "./Category";
import Collection from "./Collection";
import Form from "./Form";
import "../App.css";
import Locality from "./Locality";

function Body() {
  return (
    <div>
      <section className="category-section">
        <Category />
      </section>

      <section className="collection-section">
        <Collection />
      </section>
    </div>
  );
}

export default Body;
