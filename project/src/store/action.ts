import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action-type';

import { PostType } from '../types/post-type';


export const loadPostsAction = createAction(
  ActionType.LoadPostsData,
  (posts: PostType[]) => ({
    payload: posts,
  }),
);
