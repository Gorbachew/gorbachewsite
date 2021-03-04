import React from 'react';
import './MainPanel.sass'
import Buttons from '../Buttons/Buttons'


const MainPanel = () => {
     return(
        <div className="mainPanel">
            <div className="logo"><p className="logo logo_logoPart1">Gorbachew</p><p className="logo logo_logoPart2">HUB</p></div>
            <Buttons /> 
            {/* { width >= 700 && <Buttons /> }; */}
            {/* { width >= 700 && <p className="textUnderBtnsGame">my games</p> }; */}
        </div>
     );
};


export default MainPanel;