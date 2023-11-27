import { Checkbox, FormControlLabel, } from '@mui/material';

import React from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const CheckBox = () => {
    return (
        <div>
            <h1>this is checkbox</h1>
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <Checkbox {...label} defaultChecked size="small" />
            
            
            
           
        </div>
    );
};

export default CheckBox;