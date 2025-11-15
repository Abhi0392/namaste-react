import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>Welcome to React Project</h1>
      <h2> This is About Page</h2>
      <User name={"Abhishek"} location={"Bengaluru"} contact={90302922} />
      <UserClass name={"Abhishek"} location={"Bengaluru"} contact={90302922} />
    </div>
  );
};

export default About;
