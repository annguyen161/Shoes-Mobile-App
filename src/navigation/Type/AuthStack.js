import React from 'react';
import {StackNav} from '../NavigationKeys';
import {StackRoute} from '../NavigationRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={StackNav.Connect}>
      <Stack.Screen name={StackNav.Connect} component={StackRoute.Connect} />
      <Stack.Screen name={StackNav.Login} component={StackRoute.Login} />
      <Stack.Screen name={StackNav.Register} component={StackRoute.Register} />
      <Stack.Screen
        name={StackNav.SelectInterest}
        component={StackRoute.SelectInterest}
      />
      <Stack.Screen name={StackNav.SetPin} component={StackRoute.SetPin} />
      <Stack.Screen name={StackNav.Birthday} component={StackRoute.Birthday} />
      <Stack.Screen name={StackNav.Gender} component={StackRoute.Gender} />
      <Stack.Screen
        name={StackNav.SetUpProfile}
        component={StackRoute.SetUpProfile}
      />
      <Stack.Screen
        name={StackNav.SetSecure}
        component={StackRoute.SetSecure}
      />
      <Stack.Screen
        name={StackNav.ForgotPassword}
        component={StackRoute.ForgotPassword}
      />
      <Stack.Screen
        name={StackNav.ForgotPasswordOtp}
        component={StackRoute.ForgotPasswordOtp}
      />
      <Stack.Screen
        name={StackNav.CreateNewPassword}
        component={StackRoute.CreateNewPassword}
      />
    </Stack.Navigator>
  );
}
