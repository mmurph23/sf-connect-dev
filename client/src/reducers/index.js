import STATE from './stateReducer';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  STATE,
  form: formReducer
});

export default rootReducer;
