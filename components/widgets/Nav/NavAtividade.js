import React from 'react';

const NavAtividade = () => {
  return (
    <li className={"nav-item dropdown no-arrow mx-1"}>
      <a className={"nav-link dropdown-toggle"} href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className={"fas fa-bell fa-fw"}></i>
        <span className={"badge badge-danger"}>9+</span>
      </a>
      <div className={"dropdown-menu dropdown-menu-right"} aria-labelledby="alertsDropdown">
        <a className={"dropdown-item"} href="#">Action</a>
        <a className={"dropdown-item"} href="#">Another action</a>
        <div className={"dropdown-divider"}></div>
        <a className={"dropdown-item"} href="#">Something else here</a>
      </div>
    </li>
  );
};

export default NavAtividade;