import React, { useRef, useContext } from 'react';
import './Header.sass';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/navState';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = () => {

    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    const colorIcons = 'white';


    const getLocation = () => {
      return window.location.pathname;
    }

    useOnClickOutside(node, () => {
      if (isMenuOpen) {
        toggleMenuMode();
      }
    });

    const showBackButton = () => {
      return (
        <a className="Header_Icons_Icon" href="/">
          <ArrowBackIosIcon  className="Header_Icons_Back" style={{ color: colorIcons, fontSize: 30 }} />
        </a>
      );
    }

    const showBillie = () => {
      return (
        <a href='/gaywebsite'>
          <button className='Header_Billie'/>
        </a>
      );
    }

    const showButtons = () => {

      return(
        <div className="Header_Icons">

          <div className="Header_Icons_RightIcons">
            { getLocation() !== '/' ?  showBackButton() : showBillie() }
          </div>
    
          <div className="Header_Icons_LeftIcons">
            <a className="Header_Icons_Icon" href="/register">
              <AddCircleOutlineIcon className="Header_Icons_Registration" style={{ color: colorIcons, fontSize: 30 }} />
            </a>
            <a className="Header_Icons_Icon" href="/login">
              <AccountBoxIcon  className="Header_Icons_Login" style={{ color: colorIcons, fontSize: 40 }} />
            </a>
          </div>

        </div>
        
      );
    }


    return(
        <div className="Header">
            {/* { width <= 700 && <SideMenuButton /> }  */}
            { showButtons() }
            
        </div>
    );
};

export default Header;