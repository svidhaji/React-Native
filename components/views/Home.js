/* eslint-disable max-len */
import React from 'react';
import List from '../List';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Container, Content} from 'native-base';


const Home = (props) => {
  const {userToContext} = mediaAPI();
  const {navigation} = props;
  const {getUserFromToken} = mediaAPI();

  userToContext().then((user) => {
    console.log('usercontext', user);
  });
  getUserFromToken();

  return (
    <Container>
      <Content>
        <List navigation={navigation}></List>
      </Content>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
