import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';

const dataURL = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
const mediaURL = 'http://http://media.mw.metropolia.fi/wbma/uploads/';
const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  console.log(media);

  const getMedia = () => {
    fetch(dataURL)
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log('fetced from server: ', result);
          for (let i = 0; i < 5; i++) {
            let id = result[i].file_id;
            fetch(mediaURL + id)
                .then(response => {
                  return response.json();
                })
                .then(result => {
                  console.log(result);

                  thumb.push(result);
                  console.log('This is the final Array of Objects: \n', thumb);
                  setMedia(thumb);
                });
          }

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

