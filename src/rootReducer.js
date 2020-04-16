import { combineReducers } from 'redux';


const rootReducer = () => {
    // define all reducers here
    const MovieListReducer = require('./screens/MovieListScreen/reducers/MovieListReducer').default;
    return combineReducers({
        MovieListReducer: MovieListReducer
    });
};

export default rootReducer;

