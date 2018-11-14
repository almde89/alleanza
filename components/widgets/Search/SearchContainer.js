import React from 'react';
import { connect } from 'react-redux';
import SearchWidget from './SearchWidget';

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWidget)

export default SearchContainer;