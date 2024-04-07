// Libraries Imports
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {OfferAcceptedDark, OfferAcceptedLight} from '../../../assets/svgs';
import CButton from '../../../components/common/CButton';
import CText from '../../../components/common/CText';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function OfferAccepted({navigation, route}) {
  const cartData = route?.params?.cartData;
  const colors = useSelector(state => state.theme.theme);

  const onPressCheckout = () =>
    navigation.navigate(StackNav.CheckOut, {cartData: cartData});

  return (
    <CSafeAreaView>
      <CHeader title={strings.yourOffer} />
      <View style={localStyles.root}>
        {colors.dark ? <OfferAcceptedDark /> : <OfferAcceptedLight />}
        <CText type={'B28'} align={'center'} style={styles.mt20}>
          {strings.offerAcceptedHeading}
        </CText>
        <CText type={'M18'} align={'center'} style={styles.mt20}>
          {strings.offerAcceptedDesc}
        </CText>
      </View>
      <CButton
        type={'S16'}
        title={strings.proceedToCheckout}
        onPress={onPressCheckout}
        containerStyle={localStyles.buttonContainer}
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
