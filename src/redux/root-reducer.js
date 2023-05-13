import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';

const rootReducer = combineReducers({
  root: dataReducer,
});

export default rootReducer;
