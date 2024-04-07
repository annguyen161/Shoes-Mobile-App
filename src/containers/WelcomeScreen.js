import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../themes';
import {deviceHeight, deviceWidth} from '../common/constants';
import images from '../assets/images';
import CText from '../components/common/CText';
import {useSelector} from 'react-redux';
import {StackNav} from '../navigation/NavigationKeys';
import strings from '../i18n/strings';

export default function WelcomeScreen({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(StackNav.onBoarding);
    }, 2000);
  }, []);

  return (
    <View style={styles.flex}>
      <Image
        source={images.WelcomeImg}
        style={localStyles.imageStyle}
        resizeMode="cover"
      />
      <View style={localStyles.bottomTextContainer}>
        <CText
          color={colors.textWelcome}
          type={'M26'}
          style={{fontWeight: '900'}}>
          {strings.welcometo}
        </CText>
        <CText
          color={colors.textWelcome}
          type={'B66'}
          style={{fontWeight: '800'}}>
          {strings.appname}
        </CText>
        <CText style={styles.mt15} color={colors.white} type={'R18'}>
          {strings.slogan}
        </CText>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  imageStyle: {
    width: deviceWidth,
    height: deviceHeight,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 0,
    ...styles.ph20,
    ...styles.pb50,
  },
});
