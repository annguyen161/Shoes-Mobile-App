// Libraries Imports
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {MakeOfferDark, MakeOfferLight} from '../../../assets/svgs';
import CButton from '../../../components/common/CButton';
import CText from '../../../components/common/CText';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function MakeAnOffer({navigation, route}) {
  const cartData = route?.params?.cartData;
  const colors = useSelector(state => state.theme.theme);
  const onPressHome = () =>
    navigation.navigate(StackNav.OfferRejected, {cartData});
  return (
    <CSafeAreaView>
      <CHeader title={strings.makeAnOffer} />
      <View style={localStyles.root}>
        {colors.dark ? <MakeOfferDark /> : <MakeOfferLight />}
        <CText type={'B28'} align={'center'} style={styles.mt20}>
          {strings.makeAnOfferHeading}
        </CText>
        <CText type={'M18'} align={'center'} style={styles.mt20}>
          {strings.makeAnOfferDesc}
        </CText>
      </View>
      <CButton
        type={'S16'}
        title={strings.backToHome}
        onPress={onPressHome}
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
});
