import { createStore } from 'redux';
import rootReducer from './reducers';
import { history } from '../history';

export function configureStore() {
    const store = createStore(rootReducer(history));
    return store;
}