import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import {pageReducer as page} from './page-reducer';

const rootReducer = combineReducers({
    page
});

export default rootReducer;
