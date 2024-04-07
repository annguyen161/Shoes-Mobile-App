// Libraries Imports
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {OfferRejectedDark, OfferRejectedLight} from '../../../assets/svgs';
import CButton from '../../../components/common/CButton';
import CText from '../../../components/common/CText';
import {StackNav, TabNav} from '../../../navigation/NavigationKeys';

export default function OfferRejected({navigation, route}) {
  const cartData = route?.params?.cartData;
  const colors = useSelector(state => state.theme.theme);

  const onPressHome = () => navigation.navigate(TabNav.HomeTab);

  const onPressOfferAgain = () =>
    navigation.navigate(StackNav.OfferAccepted, {cartData});

  return (
    <CSafeAreaView>
      <CHeader title={strings.yourOffer} />
      <View style={localStyles.root}>
        {colors.dark ? <OfferRejectedDark /> : <OfferRejectedLight />}
        <CText type={'B28'} align={'center'} style={styles.mt20}>
          {strings.offerRejectedHeading}
        </CText>
        <CText type={'M18'} align={'center'} style={styles.mt20}>
          {strings.offerRejectedDesc}
        </CText>
      </View>
      <CButton
        type={'S16'}
        title={strings.addToCartAgain}
        onPress={onPressOfferAgain}
        containerStyle={localStyles.buttonContainer}
      />
      <CButton
        type={'S16'}
        title={strings.backToHome}
        color={colors.dark ? colors.white : colors.textBlack}
        bgColor={colors.dark3}
        onPress={onPressHome}
        containerStyle={localStyles.backToHomeStyle}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.flexCenter,
  },
  buttonContainer: {
    ...styles.mh20,
    ...styles.mb10,
  },
  backToHomeStyle: {
    ...styles.mh20,
    ...styles.mb10,
  },
});
