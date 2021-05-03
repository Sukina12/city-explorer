import React from 'react';
import Button from 'react-bootstrap/Button';


class Error extends React.Component {
  render() {
    return (
      <div>
        <h3>Request failed with status code 400</h3>
        <h4>You didn't put correct value</h4>
        <Button onClick={this.props.goBack}> Go Back</Button>
      </div>
    );
  }
}

export default Error;
