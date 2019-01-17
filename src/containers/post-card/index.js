// @vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'react-md';
import PropTypes from 'prop-types';

// @actions
import { fetchPosts } from '../../actions';

class PostCard extends Component {
  componentDidMount() {
    const { onFetchPosts } = this.props;
    onFetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="posts-container">
        {
          posts.map(post => (
            <Card
              key={post.id}
              className="posts-container__card md-block-centered"
            >
              <CardTitle title={post.title} />
              <CardText>
                {post.body}
              </CardText>
            </Card>
          ))
        }
      </div>
    );
  }
}

PostCard.propTypes = {
  onFetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = dispatch => ({
  onFetchPosts: () => {
    dispatch(fetchPosts());
  },
});

const mapStateToProps = state => ({
  posts: state.filteredPosts,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
