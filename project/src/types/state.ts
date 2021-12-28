import { RootState } from '../store/reducers/root';
import { PostType } from './post-type';

export type PostsDataType = {
  posts: PostType[];
};


export type State = RootState;
