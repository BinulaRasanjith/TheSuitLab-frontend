import { configureStore } from '@reduxjs/toolkit'; // import configureStore from redux toolkit

import reducer from './reducer'; // import reducer from reducer.js

const store = configureStore({ reducer }); // create store with reducer.js as reducer function and export it as store variable to be used in index.js file in src folder to wrap the app with it to make redux store available to the app components to use it to get and set data from and to the store and to dispatch actions to the store to update the store data 
 

export default store; // export store
