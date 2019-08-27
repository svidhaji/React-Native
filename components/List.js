import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const dataURL = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  console.log(media);

  const getMedia = () => {
    fetch(dataURL)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          console.log('fetched from server', responseJson);
          setMedia(responseJson);
        });
  };

  useEffect(() => getMedia(), []);
  return (
    <FlatList
      data={media}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
};

export default List;

