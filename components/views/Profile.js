import React, {useState, useEffect} from 'react';
import {
  Text,
  Button,
  AsyncStorage,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Container, CardItem} from 'native-base';

const Profile = (props) => {
  const [user, setUser] = useState({});
  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    setUser(JSON.parse(user));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log('ret user', user);
  const {getAvatar} = mediaAPI();
  console.log('avataar', avatar);
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };
  return (
    <Container>
      <CardItem>
        {user &&
        <Text>{user.username}</Text>
        }
      </CardItem>
      <Button bordered dark onPress={signOutAsync}>
        <Text>Logout</Text>
      </Button>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
