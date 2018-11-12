import React from 'react';

const MenuWidget = () => {
    return (
        <div>
            <a class="navbar-brand mr-1" href="index.html">Start Bootstrap</a>

            <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                <i class="fa fa-bars"></i>
            </button>
        </div>
    );
}

export default MenuWidget;