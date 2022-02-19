import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { useEffect } from 'react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export default function CustomizedSelects(props) {
    const [cat, setCat] = React.useState('');

    
    const handleChange = (event) => {
        setCat(event.target.value);

    };

    useEffect(() => {
        props.onChangeValue(cat)
    }, [cat])


    return (
        <div>

            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">Category</InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={cat}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option value={'jersey'}>jersey</option>
                    <option value={'hat'}>hat</option>
                    <option value={'shoe'}>shoe</option>
                </NativeSelect>
            </FormControl>
        </div >
    );
}
