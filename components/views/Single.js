import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';

const Single = (props) => {
  const {navigation} = props;
  console.log('Singel navi', navigation.state);
  const file = navigation.state.params.file;
  return (
    <SafeAreaView>
      <Text>{file.title}</Text>
    </SafeAreaView>
  );
};

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
