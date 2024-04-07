import {Platform, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

// Local Imports
import {TabRoute} from '../NavigationRoutes';
import {TabNav} from '../NavigationKeys';
import {styles} from '../../themes';
import {getColors, getHeight, moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {
  CartInActive,
  HomeInActive,
  OrderInActive,
  ProfileInActive,
  ProfileIcon,
  WalletInActive,
  WalletIcon,
  HomeIcon,
  CartIcon,
  OrderIconTab,
} from '../../assets/svgs';

export default function TabBarNavigation() {
  const colors = useSelector(state => state.theme.theme);
  const Tab = createBottomTabNavigator();
  const color = getColors(colors);

  const TabText = memo(({IconType, label, focused}) => (
    <View style={focused ? localStyle.tabViewContainer : localStyle.tabBar}>
      {IconType}
      {focused && (
        <CText
          numberOfLines={1}
          color={focused && colors.textBlueBold}
          type={'B10'}>
          {label}
        </CText>
      )}
    </View>
  ));

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: [
          localStyle.tabBarStyle,
          {backgroundColor: colors.bgTabBar},
        ],
        tabBarShowLabel: false,
      }}
      initialRouteName={TabNav.HomeTab}>
      <Tab.Screen
        name={TabNav.HomeTab}
        component={TabRoute.HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={focused ? <HomeIcon color={color} /> : <HomeInActive />}
              focused={focused}
              label={strings.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.ListCheckOut}
        component={TabRoute.ListCheckOut}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={focused ? <CartIcon color={color} /> : <CartInActive />}
              focused={focused}
              label={strings.cart}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.OrderTab}
        component={TabRoute.OrderTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={
                focused ? <OrderIconTab color={color} /> : <OrderInActive />
              }
              focused={focused}
              label={strings.orders}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.WalletTab}
        component={TabRoute.WalletTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={
                focused ? <WalletIcon color={color} /> : <WalletInActive />
              }
              focused={focused}
              label={strings.tabWallet}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.ProfileTab}
        component={TabRoute.ProfileTab}
        style={localStyle.tabScreenStyle}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={
                focused ? <ProfileIcon color={color} /> : <ProfileInActive />
              }
              focused={focused}
              label={strings.profile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyle = StyleSheet.create({
  tabBarStyle: {
    height: getHeight(72),
    ...styles.ph20,
    ...styles.mh10,
    ...styles.pb0,
    ...styles.rowCenter,
    borderTopWidth: moderateScale(0),
    borderRadius: moderateScale(50),
    position: 'absolute',
    // bottom: moderateScale(20),
    bottom: Platform.OS === 'ios' ? moderateScale(20) : moderateScale(30),
  },
  tabViewContainer: {
    ...styles.center,
    borderRadius: moderateScale(100),
    width: moderateScale(48),
    height: moderateScale(48),
    backgroundColor: '#FFF',
  },
  tabBar: {
    ...styles.center,
  },
});
