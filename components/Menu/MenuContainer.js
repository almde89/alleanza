import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';

const mapStateToProps = state => {
  return {
    itens: state.itensMenu
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default MenuContainer;