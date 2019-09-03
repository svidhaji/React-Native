import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Single = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}>
      </Image>
      <Text style={props.singleMedia.title}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
});

export default Single;
