import { combineReducers } from 'redux';
import { postsDataReducer } from './posts-data';

export enum NameSpace {
  posts = 'POSTS',
}

export const rootReducer = combineReducers({
  [NameSpace.posts]: postsDataReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
