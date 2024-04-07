import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../NavigationKeys';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen
        name={StackNav.WelcomeScreen}
        component={StackRoute.WelcomeScreen}
      />
      <Stack.Screen
        name={StackNav.onBoarding}
        component={StackRoute.OnBoarding}
      />
      <Stack.Screen name={StackNav.Auth} component={AuthStack} />
      <Stack.Screen name={StackNav.TabBar} component={StackRoute.TabBar} />
      <Stack.Screen
        name={StackNav.SetUpProfile}
        component={StackRoute.SetUpProfile}
      />
      <Stack.Screen
        name={StackNav.AddAddress}
        component={StackRoute.AddAddress}
      />
      <Stack.Screen
        name={StackNav.AddNewCard}
        component={StackRoute.AddNewCard}
      />
      <Stack.Screen name={StackNav.Address} component={StackRoute.Address} />
      <Stack.Screen
        name={StackNav.HelpCenter}
        component={StackRoute.HelpCenter}
      />
      <Stack.Screen name={StackNav.Language} component={StackRoute.Language} />
      <Stack.Screen
        name={StackNav.NotificationSetting}
        component={StackRoute.NotificationSetting}
      />
      <Stack.Screen name={StackNav.Payment} component={StackRoute.Payment} />
      <Stack.Screen
        name={StackNav.PrivacyPolicy}
        component={StackRoute.PrivacyPolicy}
      />
      <Stack.Screen name={StackNav.Security} component={StackRoute.Security} />
      <Stack.Screen
        name={StackNav.CreateNewPassword}
        component={StackRoute.CreateNewPassword}
      />
      <Stack.Screen name={StackNav.SetPin} component={StackRoute.SetPin} />
      <Stack.Screen
        name={StackNav.InviteFriends}
        component={StackRoute.InviteFriends}
      />
      <Stack.Screen
        name={StackNav.CustomerService}
        component={StackRoute.CustomerService}
      />
      <Stack.Screen name={StackNav.EReceipt} component={StackRoute.EReceipt} />
      <Stack.Screen
        name={StackNav.TopUpEWallet}
        component={StackRoute.TopUpEWallet}
      />
      <Stack.Screen
        name={StackNav.TransactionHistory}
        component={StackRoute.TransactionHistory}
      />
      <Stack.Screen
        name={StackNav.CheckOutOrders}
        component={StackRoute.CheckOutOrders}
      />
      <Stack.Screen name={StackNav.Active} component={StackRoute.Active} />
      <Stack.Screen
        name={StackNav.Completed}
        component={StackRoute.Completed}
      />
      <Stack.Screen
        name={StackNav.TrackOrder}
        component={StackRoute.TrackOrder}
      />
      <Stack.Screen
        name={StackNav.MostPopular}
        component={StackRoute.MostPopular}
      />
      <Stack.Screen
        name={StackNav.MyWishlist}
        component={StackRoute.MyWishlist}
      />
      <Stack.Screen
        name={StackNav.Notification}
        component={StackRoute.Notification}
      />
      <Stack.Screen
        name={StackNav.SpecialOffers}
        component={StackRoute.SpecialOffers}
      />
      <Stack.Screen
        name={StackNav.ProductCategory}
        component={StackRoute.ProductCategory}
      />
      <Stack.Screen
        name={StackNav.ProductDetail}
        component={StackRoute.ProductDetail}
      />
      <Stack.Screen name={StackNav.Search} component={StackRoute.Search} />
      <Stack.Screen name={StackNav.Reviews} component={StackRoute.Reviews} />
      <Stack.Screen name={StackNav.CheckOut} component={StackRoute.CheckOut} />
      <Stack.Screen
        name={StackNav.ChooseShipping}
        component={StackRoute.ChooseShipping}
      />
      <Stack.Screen name={StackNav.AddPromo} component={StackRoute.AddPromo} />
      <Stack.Screen name={StackNav.Chats} component={StackRoute.Chats} />
      <Stack.Screen name={StackNav.Calls} component={StackRoute.Calls} />
      <Stack.Screen
        name={StackNav.CallingScreen}
        component={StackRoute.CallingScreen}
      />
      <Stack.Screen
        name={StackNav.MakeAnOffer}
        component={StackRoute.MakeAnOffer}
      />
      <Stack.Screen
        name={StackNav.OfferAccepted}
        component={StackRoute.OfferAccepted}
      />
      <Stack.Screen
        name={StackNav.OfferRejected}
        component={StackRoute.OfferRejected}
      />
    </Stack.Navigator>
  );
}
