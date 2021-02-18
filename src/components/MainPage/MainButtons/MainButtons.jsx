import React from 'react';
import './MainButtons.sass';

const MainButtons = () => {

    return(
        <div className="MainButtons_wrapper">
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


export default MainButtons;