import Api from './Api';
import { store } from '../../../..';
import { UPDATE_LIKED_MOVIES } from '../actions/actionTypes';


const getMovieList = (currentPage) => {
    let page = currentPage + 1;
    return Api.fetchMovies(page)
        .then(data => {
            return { movieList: data.results, page: data.page };
        });
}

const updateLikedMovies = (movieId, currentStatus) => {
    if (currentStatus) {
        removeFromLikedMovies(movieId);
    } else {
        addToLikedMovies(movieId)
    }
}

const addToLikedMovies = (movieId) => {

    const state = store.getState();
    let likedMoviesIdList = state.MovieListReducer.likedMoviesIdList;
    if (likedMoviesIdList.findIndex(item => item === movieId) === -1) {
        let newList = [...likedMoviesIdList, movieId];
        store.dispatch({ type: UPDATE_LIKED_MOVIES, likedMoviesIdList: newList })
    }
}

const removeFromLikedMovies = (movieId) => {

    const state = store.getState();
    let likedMoviesIdList = state.MovieListReducer.likedMoviesIdList;
    let newList = likedMoviesIdList.filter(item => item !== movieId);
    store.dispatch({ type: UPDATE_LIKED_MOVIES, likedMoviesIdList: newList })
}

const isLiked = (movieId) => {
    const state = store.getState();
    let likedMoviesIdList = state.MovieListReducer.likedMoviesIdList;
    return (likedMoviesIdList.findIndex(item => item === movieId) !== -1)
}

export default MovieProcessor = {
    getMovieList,
    updateLikedMovies,
    isLiked
}