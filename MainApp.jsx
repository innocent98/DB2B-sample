// you are going to import all your screens in this file. separating the authNavigator
// and stackNavigator from each other. you can move both navigators to different locations/files
// if you have a large number of screens for better performance and code readability.

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LanguageSelect from './screens/LanguageSelect';
import Login from './screens/authentication/Login';
import LoginPassword from './screens/authentication/LoginPassword';
import Welcome from './screens/Welcome';
import {useSelector} from 'react-redux';
import Items from './screens/Items';
import CartItems from './screens/CartItems';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LanguageSelect" component={LanguageSelect} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginPassword" component={LoginPassword} />
      {/* add your authentication screens here */}
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Items" component={Items} />
      <Stack.Screen name="CartItems" component={CartItems} />
      {/* add your other stack screens here */}
    </Stack.Navigator>
  );
};

const MainApp = () => {
  // get the user managed by the state management system here.
  const {currentUser} = useSelector(state => state.user);

  // console.log(currentUser);

  // check if there is user, if there is no user, display the AuthNavigator, otherwise, display the StackNavigator.
  if (!currentUser) {
    return <AuthNavigator />;
  }

  return <StackNavigator />;
};

export default MainApp;
