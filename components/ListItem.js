import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {ListItem as BaseListItem, Text,
  Container, Content,
  Card, CardItem, Right,
  Button, Icon} from 'native-base';

const getThumbnail = (url) => {
  console.log('urli', url);
  const [thumbnails, setThumbnails] = useState({});
  async function fetchUrl() {
    console.log('fetsurl');
    const response = await fetch('http://media.mw.metropolia.fi/wbma/media/' + url);
    const json = await response.json();
    console.log('json', json);
    setThumbnails(json.thumbnails);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return thumbnails;
};

const ListItem = (props) => {
  const {navigation, singleMedia} = props;
  const tn = getThumbnail(singleMedia.file_id);
  console.log('thumbnails', tn);
  return (
    <BaseListItem>
      <Right style={{alignItems: 'flex-end'}}>
        <Button transparent
          onPress={
            () => {
              console.log('klik');
              navigation.push('Single', {file: singleMedia});
            }
          }>
          <Icon active name="settings" />
          <Text>Explore</Text>
        </Button>
      </Right>
      <CardItem>
        <Image
          source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}
          style={{height: 400, width: 400, flex: 1, justifyContent: 'center'}}
        />
        <Text>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </CardItem>
    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
