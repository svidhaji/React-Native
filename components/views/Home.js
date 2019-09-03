import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import List from '../List';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <List navigation={navigation}></List>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9bf542',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default Home;
