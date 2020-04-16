import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { HOST_IMAGE_URL } from '../../../../utils/NetworkConstants';



export class MovieItem extends React.PureComponent {

    render() {
        
        const { data, isLiked } = this.props;
        const likeIcon = isLiked ? require('../../../../assets/images/liked/liked.png') :
            require('../../../../assets/images/unliked/unliked.png');
        
        return (
            <View
                style={styles.container}>
                <Image
                    style={styles.poster}
                    resizeMode="cover"
                    source={{ uri: `${HOST_IMAGE_URL}${data.poster_path}` }} />
                <View style={styles.content}>
                    <Text
                        style={styles.title}>{data?.title || "Title"}</Text>
                    <Text
                        numberOfLines={5}
                        ellipsizeMode="tail"
                        style={styles.overview}>{data?.overview || "Summary not avaialble"}</Text>
                    <TouchableOpacity onPress={this.onPressLike}>
                        <Image
                            source={likeIcon}
                            onPress={this.onPressLike}
                            style={styles.likedIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onPressLike = () => {
        const { itemIndex, isLiked } = this.props;
        this.props.onPressLike?.(itemIndex, isLiked);
    }
}

export default MovieItem
