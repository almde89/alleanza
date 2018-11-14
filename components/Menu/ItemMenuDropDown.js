import React from 'react';
import { string } from 'prop-types'

const ItemMenuDropDown = ({descricaoItem, classNameImagem}) => {
  return (
    <li className={"nav-item dropdown"}>
      <a className={"nav-link dropdown-toggle"} href={"#"}>
        <i className={"fas fa-fw " + classNameImagem}></i>
        <span>{descricaoItem}</span>
      </a>
      <div class={"dropdown-menu"} aria-labelledby="pagesDropdown">
        <h6 className={"dropdown-header"}>Login Screens:</h6>
        <a className={"dropdown-item"} href="login.html">Login</a>
        <a className={"dropdown-item"} href="register.html">Register</a>
        <a className={"dropdown-item"} href="forgot-password.html">Forgot Password</a>
        <div className={"dropdown-divider"}></div>
        <h6 className={"dropdown-header"}>Other Pages:</h6>
        <a className={"dropdown-item"} href="404.html">404 Page</a>
        <a className={"dropdown-item"} href="blank.html">Blank Page</a>
      </div>
    </li>
  );
};

ItemMenuDropDown.propType = {
  descricaoItem: string,
  classNameImagem: string
};

export default ItemMenuDropDown;