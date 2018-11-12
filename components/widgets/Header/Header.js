import { MenuWidget } from "../MenuWidget";
import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
            <MenuWidget />
        </nav>
    );
};

export default Header;