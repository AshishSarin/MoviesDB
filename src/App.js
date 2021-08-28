import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MovieListScreen from './screens/MovieListScreen/container/MovieListContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }


  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <MovieListScreen />
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;


// This is a test commit