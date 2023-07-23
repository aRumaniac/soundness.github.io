import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmaps extends Component {
  static defaultProps = {
    center: {
      lat: 27.8974,
      lng: 78.0880,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAZMLDCUFo7t9sO8l28p7rpiISv5Hg4ShQ"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={27.9135} lng={78.0782} text={<><i className="fa fa-map-marker fa-lg"></i><p>IT</p></> } />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmaps;
