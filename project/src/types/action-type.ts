import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';

export enum ActionType {
  LoadPostsData = 'loadPostsData',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
