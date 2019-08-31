import React from 'react';
import {
  StyleSheet,
  View,
  ToolbarAndroid,
} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <ToolbarAndroid style={styles.toolba} title="AwesomeApp"/>
      <View style={styles.container}>
        <List></List>
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

  toolba: {
    backgroundColor: 'green',
    fontSize: 10,
  },
});

export default App;
