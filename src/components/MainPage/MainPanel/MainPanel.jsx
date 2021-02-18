import React from 'react';
import './MainPanel.scss'
import MainButtons from '../MainButtons/MainButtons'
import useWindowDimensions from '../../Helpers/useWindowDimensions'



const MainPanel = () => {

    const { width } = useWindowDimensions();
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