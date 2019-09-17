import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';
import AImage from '../AsyncImage';

const Single = (props) => {
  const {navigation} = props;
  console.log('Singel navi', navigation.state);
  const file = navigation.state.params.file;
  return (
    <SafeAreaView>
      <Text>{file.title}</Text>
      <AImage
        source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + file.filename}}
        style={{borderRadius: 50, height: 600, width: 500, padding: 0}}
        spinnerColor='#b3e5fc'
      />
    </SafeAreaView>
  );
};

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
