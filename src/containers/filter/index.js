// @vendors
import React, { Component } from 'react';
import { TextField } from 'react-md';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// @actions
import { filterPosts } from '../../actions';

const PostFilter = ({ onFilterPosts }) => (
  <TextField
    id="floating-center-title"
    label="Filter"
    lineDirection="center"
    placeholder="Filter By Title"
    className="filter"
    onChange={(text) => {
      onFilterPosts(text);
    }}
  />
);

PostFilter.propTypes = {
  onFilterPosts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onFilterPosts: (text) => {
    dispatch(filterPosts(text));
  },
});

export default connect(null, mapDispatchToProps)(PostFilter);
