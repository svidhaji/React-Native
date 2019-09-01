import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';
import Toolbar from './components/Toolbar/Toolbar';

const App = () => {
  return (
    <MediaProvider>
      <Toolbar />
      <View style={styles.container}>
        <List></List>
      </View>
    </MediaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff#9bf542',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default App;
