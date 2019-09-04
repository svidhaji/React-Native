import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';

const userData = {
  username: 'kalle';
  password: 'computer';
}

const Login = (props) => { // props is needed for navigation
 const signInAsync = async (url, data) => {
   console.log('data', data);
   console.log('urli', url);

   const response = await fetch(url), {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
   });
   const json = await response.json();
   console.log('response json', json);
     await AsyncStorage.setItem('userToken', json.token);
     props.navigation.navigate('App');
   };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={
        () => {
          signInAsync('http://media.mw.metropolia.fi/wbma/login', userData);
        }
      } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Login.PropTypes = {
  navigation: PropTypes.object,
}

export default Login;
