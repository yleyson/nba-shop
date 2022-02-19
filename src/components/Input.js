import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectLabels from './Select';



export default function BasicTextFields(props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: '1', width: '200px' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField onChange={props.onChange} id="outlined-basic" label={props.edit == "" ? "Edit" : props.edit} variant="outlined" />

        </Box>
    );
}
