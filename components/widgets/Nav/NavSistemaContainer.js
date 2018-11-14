import React from 'react';
import { connect } from 'react-redux';
import NavSistema from "./NavSistema";

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const NavSistemaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSistema)

export default NavSistemaContainer;