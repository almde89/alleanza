import React from 'react';
import MenuWidget from  '../widgets/MenuWidget/MenuWidget';
import SearchContainer from '../widgets/Search/SearchContainer';
import NavContainer from '../widgets/Nav/NavContainer';

const Header = () => {
    return (
        <nav className={`navbar navbar-expand navbar-dark bg-dark static-top`}>
            <MenuWidget />
            <SearchContainer />
            <NavContainer />
        </nav>
    );
}
Header.propTypes = {};

export default Header;