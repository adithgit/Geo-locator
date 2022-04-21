import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import axios from "axios"
import Map from './Map'
import "../style/App.css"
function Input(props) {

    let ip ;
    const [locationData, setLocationData] = useState(null);
    
    // Fetching location data using ipstack API and axios
    async function fetchLocation() {
        const url = `http://api.ipstack.com/${ip}?access_key=563c0ec80671bea694b9760b32963467`
        const response = await axios.get(url);
        const { latitude, longitude } = response.data;
        setLocationData({lat:latitude, lng:longitude});
    }
    
        function handleInput(e) {
            e.preventDefault();
            ip = e.target.value; 
        }

    return (
        <div>
            < div className = 'input-ip' >
                <TextField
                    id="outlined-basic" inputProps={ { onChange : handleInput} }  sx={{ input: { color: 'white' }, label: { color: '#8400ff' } }} label="Enter IP Here" variant="outlined" color="secondary" />
                <Button variant="contained" onClick={ fetchLocation } className='Button' color="success">
                    Get Location
                </Button>
            </div >
            {
                locationData ? <Map locationData = { locationData }/> : <Map />
            }
            
        </div>
    )
}

export default Input