import React, {Component} from 'react';

class MenuWidget extends React.Component { 
    render() {
        return (
            <span>
                <a className={"navbar-brand mr-1"} href="index.html">Alleanza</a>

                <button className={"btn btn-link btn-sm text-white order-1 order-sm-0"} id="sidebarToggle" href="#">
                    <i className={"fa fa-bars"}></i>
                </button>
            </span>
        );
    }
}

MenuWidget.propTypes = {};

export default MenuWidget;