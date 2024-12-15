import React from "react";
import Category from "./Category";
import Collection from "./Collection";
import Form from "./Form";
import "../App.css";
import Locality from "./Locality";

function Body() {
  return (
    <div>
      <section>
        <Category />
      </section>

      <section>
        <Collection />
      </section>

      <section>
        <Locality />
      </section>
    </div>
  );
}

export default Body;
