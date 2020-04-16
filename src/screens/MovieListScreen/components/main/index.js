import React, { Component } from 'react'
import { Text, FlatList, ActivityIndicator, View } from 'react-native'
import MovieItem from '../MovieItem';
import Utils from '../../../../utils/Utils';
import styles from './styles';
import CustomButton from '../../../../commonComponents/CustomButton';
import MovieProcessor from '../../processor/MovieProcessor';

class MovieListScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderMovieList()}
            </View>
        )
    }

    renderLoadMore = () => {
        const label = Boolean(this.props.error) ? "Retry" : "Load more"
        if (Boolean(this.props.movieList?.length)) {
            return <CustomButton
                onPress={this.onPressLoadMore}
                label={label}
                isLoading={this.props.isLoading} />
        }
        //TODO: Handle Load more view for when
        // all pages are fetched
        return null;
    }


    renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Movie List</Text>
            </View>
        );
    }


    renderMovieList = () => {
        const { movieList, likedMoviesIdList, isLoading } = this.props;
        if (Boolean(this.props?.movieList?.length > 0)) {
            return (
                <FlatList
                    bounces={false}
                    extraData={[likedMoviesIdList, isLoading]}
                    keyExtractor={Utils.keyExtractor}
                    contentContainerStyle={styles.movieList}
                    ListFooterComponent={this.renderLoadMore}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={this.renderMovieItem}
                    keyExtractor={Utils.keyExtractor}
                    data={movieList} />

            )
        }
        return this.renderEmptyList();
    }

    onListEndReached = () => {
        if (!this.props.isLoading) {
            // Hanlde pagination here
            // load more data only if no data is currently being fetched
            // this.props.callGetMovies(this.props.currentPage);
        }

    }

    onPressLoadMore = () => {
        this.props.callGetMovies(this.props.currentPage);
    }

    _renderLoader = () => {
        return (
            <ActivityIndicator />
        )
    }

    renderSeparator = () => {
        return <View style={styles.separator} />
    }

    renderEmptyList = () => {
        // TODO: Handle this using FlatList EmptyComponent
        if (this.props.error && this.props.movieList?.length === 0) {
            return this.renderRetryButton();
        } else if(this.props.isLoading) {
            return <View style={{flex: 1, justifyContent:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        } else {
            return <View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
                <Text>No movies here. 😧 </Text>
            </View>
        }
    }

    renderRetryButton = () => {
        return (
            <View style={styles.retryContainer}>
                <CustomButton
                    onPress={this.onPressRetry}
                    style={{ marginHorizontal: 24 }}
                    label={"Retry"} />
            </View>
        )
    }

    onPressRetry = () => {
        this.props.callGetMovies(this.props.currentPage);
    }

    componentDidMount() {
        this.props.callGetMovies(this.props.currentPage);
    }


    renderMovieItem = ({ item, index }) => {
        let isLiked = MovieProcessor.isLiked(item?.id);
        return (
            <MovieItem
                itemIndex={index}
                isLiked={isLiked}
                onPressLike={this.onPressLike}
                data={item} />
        );
    }

    onPressLike = (itemIndex, currentStatus) => {
        console.log('onPressLike', itemIndex);
        const { movieList } = this.props;
        MovieProcessor.updateLikedMovies(movieList[itemIndex]?.id, currentStatus)
    }
}

export default MovieListScreen
