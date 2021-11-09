import store from '.'
import { Action as ReduxAction, AnyAction, EmptyObject, Store } from 'redux'

type GetState = typeof store.getState;
export type State = ReturnType<GetState>;
export type Dispatch = typeof store.dispatch;
export type Action = ReduxAction | ((d: Dispatch, gs: GetState) => ReduxAction)
