import React, { useEffect } from 'react';
import "../style/App.css";
import { Loader } from '@googlemaps/js-api-loader'


function Map() {
  const loader = new Loader({
    apiKey:"",
    version: "weekly",
    libraries: ["places"]
  });
  const mapOptions = {
    center: {
      lat: 9.578289985656738 ,
      lng: 76.97295379638672
    },
    zoom: 15
  };
  
  useEffect(()=>{
    loader.load().then((google)=>{
      const map = new google.maps.Map(document.getElementById("map"),mapOptions);
      new google.maps.Marker({
        position:mapOptions.center,
        map,
        title:"Ip location"
      })
    }).catch((err)=>{
      console.log(err);
    });
    
  }, [])

  return (
    <div id='map' className='map-box' >
      
    </div>
  )
}

export default Map