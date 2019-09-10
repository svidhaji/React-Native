import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  Button,
  AsyncStorage,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Container, CardItem, Content, Card} from 'native-base';
import {MediaContext} from '../contexts/MediaContext';

const Profile = (props) => {
  const {user} = useContext(MediaContext).user;
  const [avatar, setAvatar] = useState(undefined);
  console.log('Avatar', avatar);

  const {getAvatar} = mediaAPI();
  getAvatar().then((result) => {
    setAvatar(result);
  });

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    setUser(JSON.parse(user));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log('ret user', user);

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };
  return (
    <Container>
      <Content>
        <Card>
          <CardItem cardBody>
            <Image source={{avatar}}
              style={{height: 300, width: 300, flex: 1, justifyContent: 'center'}}>
            </Image>
          </CardItem>
          <CardItem>
            {user &&
        <Text>{user.username}</Text>
            }
          </CardItem>
          <Button title="Sign out!" onPress={
            () => {
              signOutAsync();
            }
          } />
        </Card>
      </Content>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
