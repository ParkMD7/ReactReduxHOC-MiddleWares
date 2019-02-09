// dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';


// user files
import reducers from './reducers';
import async from './middlewares/async';


export default ({children, initialState = {}}) => {
  const store = createStore(reducers, initialState, applyMiddleware(async))

  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}
