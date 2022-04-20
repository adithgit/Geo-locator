import React, { useEffect } from 'react';
import "../style/App.css";
import { Loader } from '@googlemaps/js-api-loader'


function Map(props) {

  const center = props.locationData ? props.locationData : {
    lat: 12.127345,
    lng: 76.077986
  }


  const loader = new Loader({
    apiKey: process.env.MAP_API_KEY,
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
        title: "Ip location"
      })
    }).catch((err) => {
      console.log(err);
    });

  }, [ center ])

  return (
    <div id='map' className='map-box' >

    </div>
  )
}

export default Map