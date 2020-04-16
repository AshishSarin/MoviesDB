import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
    container: {
        height: 48,
        // backgroundColor: 'red',
        marginVertical: 16,
        alignItems: 'center',
        backgroundColor: Colors.DODGER_BLUE,
        // paddingVertical: 18,
        borderRadius: 4,
        justifyContent: 'center'
    },

    button: {
        // backgroundColor: 'red',
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
        // width:1,
    },

    label: {
        color: Colors.WHITE,
        fontSize: 18,
    }
})