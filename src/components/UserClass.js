import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, location, contact } = this.props;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h3>Contact:{contact}</h3>
      </div>
    );
  }
}

export default UserClass;
