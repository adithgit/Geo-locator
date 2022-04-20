import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import axios from "axios"
import Map from './Map'
import "../style/App.css"
function Input(props) {

    const [ip, setIp] = useState("");
    const [locationData, setLocationData] = useState(null);

    function handleInput(e) {
        let value = e.target.value;
        setIp(value)
    }


    // Fetching location data using ipstack API and axios

    async function fetchLocation() {
        const url = "http://api.ipstack.com/117.223.186.226?access_key="+process.env.IP_API_KEY;
        const response = await axios.get(url);
        const { latitude, longitude } = response.data;
        setLocationData({lat:latitude, lng:longitude});
        console.log( locationData );
    }

    return (
        <div>
            < div className = 'input-ip' >
                <TextField
                    id="outlined-basic" inputProps={ { onChange : handleInput} } value={ ip } sx={{ input: { color: 'white' }, label: { color: '#8400ff' } }} label="Enter IP Here" variant="outlined" color="secondary" />
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