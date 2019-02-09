// dependencies
import { combineReducers } from 'redux';

// user files
import commentsReducer from './comments';
import authReducer from './auth';


export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
})
