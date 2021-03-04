import React from 'react';
import MainPanel from '../MainPage/MainPanel/MainPanel'
import InfoPanel from '../MainPage/InfoPanel/InfoPanel'
import NavState from '../../context/navState'
import { SideMenu } from '../SideMenu/SideMenu';


function Main() {
    return (
      <NavState>
        <div className="App">
          <MainPanel />
          <InfoPanel />
          <SideMenu />
        </div>
      </NavState>
    )
};

export default Main;
