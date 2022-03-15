import {combineReducers} from 'redux';
import Tasks from './TaskReducers';

const rootReduceswr = combineReducers({
    tasks:Tasks
})

export default rootReduceswr;
