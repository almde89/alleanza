import React from 'react';
import NavAtividade from "./NavAtividade";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const NavAtividadeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavAtividade)

export default NavAtividadeContainer;