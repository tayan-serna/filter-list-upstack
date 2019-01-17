// @vendors
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FILTER_POSTS = 'FILTER_POSTS';

const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: {
    posts,
  },
});

const fetchPostsStarted = () => ({
  type: FETCH_POSTS,
});

const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: {
    error,
  },
});

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchPostsStarted());
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchPostsFailure(error.message));
    });
};

export const filterPosts = text => ({
  type: FILTER_POSTS,
  payload: {
    text,
  },
});
