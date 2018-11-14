import React from 'react';
import NavNotificacoesContainer from './NavNotificacoesContainer';
import NavSistema from './NavSistema';
import NavAtividadeContainer from './NavAtividadeContainer';

const Nav = () => {
  return (
    <ul className={"navbar-nav ml-auto ml-md-0"}>
      <NavAtividadeContainer />
      <NavNotificacoesContainer />
      <NavSistema />
    </ul>
  );
};

export default Nav;