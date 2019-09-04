import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider style={styles.main}>
      <View style={styles.container}>
        <Text></Text>
        <List></List>
      </View>
    </MediaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    alignitems: 'center',
  },

  main: {
    flex: 4,
  },
});

export default App;
