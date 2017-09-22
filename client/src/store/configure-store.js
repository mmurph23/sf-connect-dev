import rootReducer from '../reducers/index';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const enhancers = compose(applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    enhancers
  );
};
