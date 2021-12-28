import { createReducer } from '@reduxjs/toolkit';
import { PostsDataType } from '../../types/state';
import {
  loadPostsAction
} from '../action';

const initialState: PostsDataType = {
  posts: [],
};

const postsDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPostsAction, (state, action) => {
      state.posts = action.payload;
    });
});

export { postsDataReducer };
