import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";
import UserContext from "../utils/userContext";

// const About = () => {
//   const user = useContext(userContext);
//   return (
//     <div>
//       <h1>Welcome to React Project</h1>
//       <h2> This is About Page</h2>
//       <User
//         name={user?.loggedInUser}
//         location={"Bengaluru"}
//         contact={90302922}
//       />
//       <UserClass name={"Abhishek"} location={"Bengaluru"} contact={90302922} />
//     </div>
//   );
// };
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Welcome to React Project</h1>
        <div>
          Logged In User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2> This is About Page</h2>
        <UserClass
          name={"Abhishek"}
          location={"Bengaluru"}
          contact={90302922}
        />
      </div>
    );
  }
}

export default About;
