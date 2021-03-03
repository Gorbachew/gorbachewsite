import React from 'react';
import Game from '../../Pages/GamePage';
import './MainInfoPanel.scss'

const InfoPanel = () => {
    return(
        <div className="infoPanel">
			<div className="WelcomeBox infoBoxes">
				<h1>Welcome to my site!</h1>
				<Game className='infoPanel_game'/>
			</div>
		</div>	
    );
};


export default InfoPanel;