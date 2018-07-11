import photos from './reducers/photo';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {loadingBarReducer} from 'react-redux-loading-bar';

const reducers = combineReducers({
    photos,
    loadingBar: loadingBarReducer
});

const configureStore = (initialState = {}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}

export default configureStore();
