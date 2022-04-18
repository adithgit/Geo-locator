import React, { useState } from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import axios from "axios"
import "../style/App.css"
function Input() {

    const [ ip , setIp ] = useState( "" );

    function handleInput( e ){
        let value = e.target.value;
        setIp( value )
    }

    // Fetching location data using ipstack API and axios

    async function fetchLocation(){
        const url = "http://api.ipstack.com/117.223.186.226?access_key="
        const response = await axios.get( url );
        const locationData = response === undefined ? null : response.data;
        if (!locationData) return;
        const { latitude , longitude } = locationData ;
        console.log( latitude +" "+ longitude);
    }

    const inputProps = {
        onChange:handleInput
    }
    return (
        <div className='input-ip'>
            <TextField
                id="outlined-basic" inputProps={ inputProps } value={ ip } sx={{ input: { color: 'white' }, label: { color: '#8400ff' } }} label="Enter IP Here" variant="outlined" color="secondary" />
            <Button variant="contained" onClick={ fetchLocation } className='Button' color="success">
                Get Location
            </Button>

        </div>
    )
}

export default Input