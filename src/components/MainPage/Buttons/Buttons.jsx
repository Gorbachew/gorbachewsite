import React from 'react';
import './Buttons.sass';

const Buttons = () => {

    return(
        <div className="Buttons_wrapper">
            <a className='btn_wrapper' href='https://play.google.com/store/apps/details?id=gorbachew.pythonanywhere.ru'>
                <div className='btn_darken'/>
                <div className='btn btn_wayToSuccess' />
            </a>
            <a className='btn_wrapper' href='https://play.google.com/store/apps/details?id=com.gorbachew.crystalplanets'>
                <div className='btn_darken'/>
                <div className='btn btn_crystalPlanets' />
            </a>
            <a className='btn_wrapper' href='minecraft'>
                <div className='btn_darken'/>
                <div className='btn btn_minecraftServer' />
            </a>
        </div>
    );
};


export default Buttons;