import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Welcome To {this.props.name}
        </h2>
        <p>
          {this.props.name} is located at {this.props.lat} by {this.props.lon}
        </p>
      </div>
    );
  }
}

export default Info;
