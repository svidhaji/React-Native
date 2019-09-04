import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Single = (props) => {
  const {navigation} = props;
  const file = navigation.state.params.file;
  return (
    <View style={styles.container}>
       <Text style={props.singleMedia.title}>Profile</Text>
      <Image style={styles.image}
        source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}>
      </Image>
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
