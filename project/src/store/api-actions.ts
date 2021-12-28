import { toast } from 'react-toastify';
import {
  APIRoute,
  NotificationMessage
} from '../const';

import { ThunkActionResult } from '../types/action-type';
import { PostType } from '../types/post-type';

import {
  loadPostsAction
} from './action';

export const fetchOffersAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      await api
        .get<PostType[]>(APIRoute.Posts)
        .then(({ data }) => {
          dispatch(loadPostsAction(data));
        })
        .catch(() => toast.error(NotificationMessage.PostsError));
    };

