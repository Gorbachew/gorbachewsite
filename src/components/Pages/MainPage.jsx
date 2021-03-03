import React from 'react';
import MainPanel from '../MainPage/MainPanel/MainPanel'
import MainInfoPanel from '../MainPage/MainInfoPanel/MainInfoPanel'
import NavState from '../../context/navState'
import { SideMenu } from '../SideMenu/SideMenu';


function Main() {
    return (
      <NavState>
        <div className="App">
          <MainPanel />
          <MainInfoPanel />
          <SideMenu />
        </div>
      </NavState>
    )
};

export default Main;
