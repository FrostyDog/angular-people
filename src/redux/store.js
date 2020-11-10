import { createStore } from 'redux';
import {membersReducer} from './reducers/reducer';

export const store = createStore(membersReducer);