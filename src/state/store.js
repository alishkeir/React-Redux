// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

//? newer and recomended method to use @reduxjs/toolkit

import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export const store = configureStore({ reducer: reducers });
