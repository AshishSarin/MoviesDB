import BaseApiService from "../../../services/BaseApiService";
import Utils from "../../../utils/Utils";

const fetchMovies = (page) => {
    const API_GET_MOVIES = '/3/movie/popular';
    const url = Utils.generateURL(API_GET_MOVIES, {
            page: page,
            api_key: "e0af1f4f5cf0b5a1af3594659fb47031"
        })
    return BaseApiService.get(url);
}

export default {
    fetchMovies
}