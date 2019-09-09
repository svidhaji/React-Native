/* eslint-disable max-len */
import React from 'react';
import List from '../List';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Container} from 'native-base';


const Home = (props) => {
  const {navigation} = props;
  const {getUserFromToken} = mediaAPI();
  getUserFromToken();
  return (
    <Container>
      <List navigation={navigation}></List>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
