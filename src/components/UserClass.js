import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
      count2: this.state.count + 1,
    });
  };
  render() {
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <button className="count_increase" onClick={this.handleCount}>
          Count Increase
        </button>
        <h1>Count:{count}</h1>
        <h1>Count:{count2}</h1>
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h3>Contact:{contact}</h3>
      </div>
    );
  }
}

export default UserClass;
