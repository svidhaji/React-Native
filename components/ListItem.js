import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {ListItem as BaseListItem, Text,
  Container, Content,
Header, Card,
CardItem, Body} from 'native-base';

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
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Image
                source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}
                style={{height: 300, width: 300, flex: 1, alignItems: 'center'}}
              />
              <Text>{singleMedia.title}</Text>
              <Text>{singleMedia.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
