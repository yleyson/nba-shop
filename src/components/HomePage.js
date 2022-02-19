import React from 'react'
import { FcCameraIdentification } from 'react-icons/fc';
import { Button } from '@mui/material';
import Roller from './Roller';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Results from './Results';

export default function HomePage() {
    return (
        <div className='home_page_container'>
            <div>
                <h1 style={{ color: 'white' }}>NewsBA<SportsBasketballIcon className='camera_icon' />
                </h1>
            </div>
            <Roller />
            <br />
            <Results />
        </div>
    )
}
