import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <SafeAreaView style={styles.container}>
        <List></List>
      </SafeAreaView>
    </MediaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9bf542',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default App;
