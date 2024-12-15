import "../App.css";
import React from "react";

function Form() {
  return (
    <div className>
      <h2 className>Get the Zomato app</h2>
      <p className>
        We will send you a link, open it on your phone to download the app
      </p>
      <div>
        <label htmlFor="email">
          <input
            type="radio"
            id="email"
            name="contact"
            className="mr-2"
            defaultChecked
          />
          Email
        </label>
        <label htmlFor="phone">
          <input type="radio" id="phone" name="contact" className="mr-2" />
          Phone
        </label>
      </div>
      <div>
        <input type="email" placeholder="Email" />
        <button>Share App Link</button>
      </div>
      <p>Download app from</p>
      <div>
        <a href="" target="_blank">
          Get it on Google Play
        </a>
        <a href="" target="_blank">
          Download on the App Store
        </a>
      </div>
    </div>
  );
}

export default Form;
