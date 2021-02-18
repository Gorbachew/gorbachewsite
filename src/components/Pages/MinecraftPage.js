import React from 'react';
import '../MinecraftPage/MinecraftPage.sass'

const Minecraft = () => {
    return (
        <div className='minecraft_wrapper'>
            <div className='minecraft_top-panel'>
                <span className='minecraft_ip'>ip: 45.93.200.27:25594</span>
                <a className='minecraft_dynmap-link' href='http://45.93.200.27:16594/' >Карта сервера</a>
            </div>
        </div>  
    )
}

export default Minecraft;
