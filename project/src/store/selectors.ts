import { PostType } from '../types/post-type';
import { State } from '../types/state';
import { NameSpace } from './reducers/root';

export const getAllPosts = (state: State): PostType[] =>
  state[NameSpace.posts].posts;

