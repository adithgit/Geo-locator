import React from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import "../style/App.css"
function Input() {
    return (
        <div className='input-ip'>
            <TextField
                id="outlined-basic" sx={{ input: { color: 'white' }, label: { color: '#8400ff' } }} label="Enter IP Here" variant="outlined" color="secondary" />
            <Button variant="contained" className='Button' color="success">
                Get Location
            </Button>

        </div>
    )
}

export default Input