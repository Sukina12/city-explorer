import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <div>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`}
          alt='map' />
      </div>
    );
  }
}

export default Map;
