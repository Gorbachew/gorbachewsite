import React from 'react';
import './MainPanel.scss'
import MainButtons from '../MainButtons/MainButtons'


const MainPanel = () => {
     return(
        <div className="mainPanel">
            <div className="logo"><p className="logo logoPart1">Gorbachew</p><p className="logo logoPart2">HUB</p></div>
            <MainButtons /> 
            {/* { width >= 700 && <MainButtons /> }; */}
            {/* { width >= 700 && <p className="textUnderBtnsGame">my games</p> }; */}
        </div>
     );
};


export default MainPanel;