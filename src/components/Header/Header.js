import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div onClick={()=>window.scroll(0,0)} className="Header">
            <span> 🎬 Entertainment Hub 🎥</span>
        </div>
    );
};

export default Header;