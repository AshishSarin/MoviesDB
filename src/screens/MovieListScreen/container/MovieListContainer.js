import { connect } from "react-redux";
import MovieListScreen from "../components/main";
import { callGetMovies, updateLikedMovies } from "../actions";

const mapStateToProps = state => {
    return {
        movieList: state.MovieListReducer.movieList,
        currentPage: state.MovieListReducer.currentPage,
        isLoading: state.MovieListReducer.isLoading,
        error: state.MovieListReducer.error,
        likedMoviesIdList: state.MovieListReducer.likedMoviesIdList
    }
};


const mapDispatchToProps = dispatch => {
    return {
        callGetMovies: (currentPage) => {
            dispatch(callGetMovies(currentPage));
        },
        updateLikeStatus: (movieId, currentLikeStatus) => {
            dispatch(updateLikedMovies(movieId, currentLikeStatus));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen);


