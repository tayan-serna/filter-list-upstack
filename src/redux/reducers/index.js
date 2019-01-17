import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FILTER_POSTS,
} from '../../actions';

const initialState = {
  posts: [],
  filteredPosts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
        posts: [],
        filteredPosts: [],
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload.posts,
        filteredPosts: action.payload.posts,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        posts: [],
        filteredPosts: [],
      };
    case FILTER_POSTS:
      return {
        ...state,
        filteredPosts: action.payload.text
          ? state.posts.filter(post => post.title.match(new RegExp(action.payload.text, 'ig')))
          : state.posts,
      };
    default:
      return state;
  }
};
