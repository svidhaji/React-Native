import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import List from './components/List';
import {MediaProvider} from './components/contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <View style={styles.container}>
        <List mediaArray={mediaArray}></List>
      </View>
    </MediaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default App;
