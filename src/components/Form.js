import "../App.css";
import React from "react";

function Form() {
  return (
    <div className="form-container">
      <h2 className="text-3xl font-bold text-gray-800">Get the Zomato app</h2>
      <p className="text-gray-600">
        We will send you a link, open it on your phone to download the app
      </p>
      <div className="form-options">
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
      <div className="form mt-4">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="btn bg-red-500 text-white px-4 py-2 rounded-lg ml-2 focus:outline-none focus:ring-1 focus:ring-red-600">
          Share App Link
        </button>
      </div>
      <p className="text-gray-600 mt-6">Download app from</p>
      <div className="app-links mt-2 flex justify-center gap-4">
        <a
          href=""
          target="_blank"
          className="btn bg-green-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green- 600"
        >
          Get it on Google Play
        </a>
        <a
          href=""
          target="_blank"
          className="btn bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        >
          Download on the App Store
        </a>
      </div>
    </div>
  );
}

export default Form;
