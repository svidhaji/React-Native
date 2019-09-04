import React from 'react';
import {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const dataURL = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);

  const getMedia = () => {
    const mediaArray = [];

    fetch(dataURL)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          console.log('fetched from server', responseJson);
          mediaArray.push(responseJson);
          setMedia(mediaArray);
        });
  };

  useEffect(() => getMedia(), []);
  return (
    <FlatList
      data={media}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
};

export default List;

