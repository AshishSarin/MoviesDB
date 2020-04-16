import {
    CALL_GET_MOVIES, CALL_GET_MOVIES_SUCCESS,
    CALL_GET_MOVIES_FAILURE,
    UPDATE_LIKED_MOVIES
} from "../actions/actionTypes";
import {persistReducer} from "redux-persist";
import { AsyncStorage } from "react-native";

const initialState = {
    movieList: [],
    isLoading: false,
    error: null,
    currentPage: 0,
    likedMoviesIdList: []
}

const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALL_GET_MOVIES:
            console.log(action.type);
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case CALL_GET_MOVIES_SUCCESS:
            console.log(action.data);
            return {
                ...state,
                isLoading: false,
                currentPage: Boolean(action.data?.page) ? action.data.page :  0,
                movieList: [...state.movieList, ...action.data.movieList]
            }
        case CALL_GET_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case UPDATE_LIKED_MOVIES:
            return {
                ...state,
                likedMoviesIdList: action.likedMoviesIdList
            }
        default:
            return state;
    }
}

export default persistReducer({
    key: 'movies',
    storage: AsyncStorage,
    whitelist: ["likedMoviesIdList"],
    debug: true
}, movieListReducer);

