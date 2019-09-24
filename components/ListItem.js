import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {ListItem as BaseListItem, Text,
  Content, Right,
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
      <Content style={{backgroundColor: 'lightgreen'}}>
        <Right style={{alignItems: 'flex-end'}}>
          <Button transparent
            onPress={
              () => {
                console.log('klik');
                navigation.push('Single', {file: singleMedia});
              }
            }>
            <Icon active name="settings" />
            <Text>More</Text>
          </Button>
        </Right>
        <Image
          source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}
          style={{height: 400, width: 400}}
        />
        <Text>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </Content>
    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
