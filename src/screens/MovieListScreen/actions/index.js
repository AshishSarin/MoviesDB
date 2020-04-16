import { CALL_GET_MOVIES, CALL_GET_MOVIES_FAILURE, CALL_GET_MOVIES_SUCCESS } from "./actionTypes"
import MovieProcessor from "../processor/MovieProcessor";

export const callGetMovies = (currentPage) => {
    return dispatch => {
        dispatch({ type: CALL_GET_MOVIES });

        MovieProcessor.getMovieList(currentPage)
            .then(data => {
                dispatch({
                    type: CALL_GET_MOVIES_SUCCESS,
                    data: { movieList: data.movieList, page: data.page }
                })
            }).catch(error => {
                console.log('error-->',error.message)
                callGetMovieFail(dispatch, error.message);
            })
    }
};

const callGetMovieFail = (dispatch, error) => {
    dispatch({ type: CALL_GET_MOVIES_FAILURE, error });
}