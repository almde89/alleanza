import React from 'react';
import NavNotificacoes from "./NavNotificacoes";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const NavNotificacoesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavNotificacoes)

export default NavNotificacoesContainer;