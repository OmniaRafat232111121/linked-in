import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'
import roottReducer from './reducers/rootReducer';
const store=createStore(roottReducer,applyMiddleware(reduxThunk))
export default store