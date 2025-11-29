import React from "react";

const Contact = () => {
  return (
    <div className="font-bold text-3xl p-4 m-4">
      <h1> Contact Details :</h1>
      <p>Bengaluru, Karntaka, India</p>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 bg-gray-50 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
