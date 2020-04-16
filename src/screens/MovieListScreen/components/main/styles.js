import { StyleSheet } from 'react-native';
import Colors from '../../../../utils/Colors';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f0f3f7',
        flex: 1,
        overflow: 'hidden'
    },

    header: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 54,
        backgroundColor: Colors.DODGER_BLUE,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    headerTitle: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex:1
    },
    movieList: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    separator: {
        height: 24,
    },
    retryContainer: {
        flex: 1,
        justifyContent: 'center',
    }
})