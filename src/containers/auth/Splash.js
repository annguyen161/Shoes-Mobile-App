// Library Imports
import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Connect_Dark, Connect_Light} from '../../assets/svgs';
import {getHeight, moderateScale} from '../../common/constants';

// Local Imports
import {colors, styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';
import {changeThemeAction} from '../../redux/action/themeAction';
import {initialStorageValueGet} from '../../utils/asyncstorage';
import CSafeAreaView from '../../components/common/CSafeAreaView';

const Splash = ({navigation}) => {
  const color = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const asyncProcess = async () => {
    try {
      let asyncData = await initialStorageValueGet();
      let {themeColor, onBoardingValue, acessTokenValue} = asyncData;
      if (!!asyncData) {
        if (!!themeColor) {
          if (themeColor === 'light') {
            dispatch(changeThemeAction(colors.light));
          } else {
            dispatch(changeThemeAction(colors.dark));
          }
        }
        if (!!acessTokenValue) {
          navigation.replace(StackNav.TabBar);
          // navigation.replace(StackNav.Auth);
        } else if (!!onBoardingValue) {
          navigation.replace(StackNav.WelcomeScreen);
        } else {
          navigation.replace(StackNav.WelcomeScreen);
        }
      }
    } catch (e) {
      console.log('error ', e);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    asyncProcess();
  }, []);

  return (
    <CSafeAreaView style={localStyles.container}>
      <View style={styles.center}>
        {colors.dark === 'dark' ? (
          <Connect_Dark width={moderateScale(250)} height={getHeight(250)} />
        ) : (
          <Connect_Light width={moderateScale(250)} height={getHeight(250)} />
        )}
      </View>
      <ActivityIndicator
        style={{position: 'absolute', bottom: 80}}
        size="large"
        color={color.darkColor}
      />
    </CSafeAreaView>
  );
};

export default Splash;

const localStyles = StyleSheet.create({
  container: {
    ...styles.itemsCenter,
    ...styles.flex,
    ...styles.justifyCenter,
  },
});
