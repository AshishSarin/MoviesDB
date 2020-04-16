import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
} from 'react-native';

class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <Text>Test</Text>
                </SafeAreaView>
            </>
        );
    }
};

const styles = StyleSheet.create({
});

export default App;
