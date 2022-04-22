import React, { useState } from 'react'
import { TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios"
import Map from './Map'
import "../style/App.css"

function Input(props) {
    let ip;
    const [locationData, setLocationData] = useState(null);
    const [loadingValue , setLoading] = useState(false)

    // Fetching location data using ipstack API and axios
    async function fetchLocation(e) {
        e.preventDefault();
        setLoading(true)
        const url = `http://api.ipstack.com/${ip}?access_key=${process.env.REACT_APP_IP_API_KEY}`
        const response = await axios.get(url);
        const { latitude, longitude } = response.data;
        setLocationData({ lat: latitude, lng: longitude });
        setLoading(false)
    }

    function handleInput(e) {
        e.preventDefault();
        ip = e.target.value;
    }

    return (
        <div>
            < div className='input-ip' >
                <TextField
                    id="outlined-basic" required inputProps={{ onChange: handleInput }} sx={{ input: { color: 'white' }, label: { color: '#8400ff' } }} label="Enter IP Here" variant="outlined" color="secondary" />

                <LoadingButton
                    onClick={fetchLocation}
                    className='Button' color="success"
                    loading={loadingValue}
                    variant="outlined"
                >
                Get Location
                </LoadingButton>
            </div >
            {
                locationData ? <Map title= {"LOCATION FOUND"} locationData={locationData} /> : <Map />
            }

        </div>
    )
}

export default Input