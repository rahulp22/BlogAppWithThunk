import { combineReducers } from 'redux';
import postsIndexReducer from './reducer_posts_index';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	posts : postsIndexReducer,
	form : formReducer
});

export default rootReducer;
