import React from 'react'
import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import Colors from '../../utils/Colors';
import PropTypes from 'prop-types';
import styles from './styles';

const CustomButton = (props) => {

    const { isLoading, label, style } = props;

    onPress = () => {
        props.onPress?.();
    }

    return (
        <View style={[styles.container, style]}>
            {
                Boolean(isLoading) ?
                    <ActivityIndicator size="small" color={Colors.WHITE} /> :
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text style={styles.label}>{label}</Text>
                    </TouchableOpacity>
            }
        </View>
    );
}

CustomButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    style: PropTypes.object
};

CustomButton.defaultProps = {
    label: "",
    isLoading: false,
    style: {}
};



export default CustomButton
