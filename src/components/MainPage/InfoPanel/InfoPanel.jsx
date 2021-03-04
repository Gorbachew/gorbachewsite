import React from 'react';
import Game from '../../GameTTT/Game/Game';
import './InfoPanel.sass'

const InfoPanel = () => {
    return(
        <div className="infoPanel">
			<div className="WelcomeBox infoBoxes">
				<h1 className='infoPanel_welcome-text'>Добро пожаловать на мой сайт!</h1>
				<h3 className='infoPanel_text'>Поиграем в крестики нолики?</h3>
			</div>
			<div className="WelcomeBox infoBoxes">
				<Game className='infoPanel_game'/>
			</div>
		</div>	
    );
};


export default InfoPanel;