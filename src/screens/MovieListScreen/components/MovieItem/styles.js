import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/Colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 180,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 8,
    },

    poster: {
        height: "100%",
        width: 120,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    title: {
        fontSize: 18,
    },
    overview: {
        flex: 1,
        fontSize: 12,
        marginTop: 12,
    },
    content: {
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    likedIcon: {
        height: 20,
        width: 20,
    },
})
