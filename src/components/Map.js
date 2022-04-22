import React, { useEffect } from 'react';
import "../style/App.css";
import { Loader } from '@googlemaps/js-api-loader'
import { margin } from '@mui/system';


function Map(props) {

  const center = props.locationData ? props.locationData : {
    lat: 12.127345,
    lng: 76.077986
  }


  const loader = new Loader({
    apiKey: process.env.REACT_APP_MAP_API_KEY,
    version: "weekly",
    libraries: ["places"]
  });
  const mapOptions = {
    center,
    zoom: 15
  };

  useEffect(() => {
    loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById("map"), mapOptions);
      new google.maps.Marker({
        position: mapOptions.center,
        map,
        title: "The Ip location is here"
      })
    }).catch((err) => {
      console.log(err);
    });

  }, [center])

  return (
    <div>
    <h4 style={{color:"white", margin:"2rem"}}>{props.title}</h4>
      <div id='map' className='map-box' >
      </div>
    </div>

  )
}

export default Map