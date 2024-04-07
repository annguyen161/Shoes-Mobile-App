// Library import
import {StyleSheet, Switch, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Local import
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import CText from '../../../components/common/CText';
import {styles} from '../../../themes';

export default NotificationSetting = () => {
  const colors = useSelector(state => state.theme.theme);
  const [isEnabled, setIsEnabled] = useState({
    generalNotification: false,
    sound: false,
    vibrate: false,
    specialOffers: false,
    promoAndDiscount: false,
    payment: false,
    cashBack: false,
    appUpdate: false,
    newServiceAvailable: false,
    newTipsAvailable: false,
  });

  const NotificationData = [
    {
      title: strings.generalNotification,
      value: isEnabled.generalNotification,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          generalNotification: isEnabled.generalNotification ? false : true,
        }),
    },
    {
      title: strings.sound,
      value: isEnabled.sound,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          sound: isEnabled.sound ? false : true,
        }),
    },
    {
      title: strings.vibrate,
      value: isEnabled.vibrate,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          vibrate: isEnabled.vibrate ? false : true,
        }),
    },
    {
      title: strings.specialOffers,
      value: isEnabled.specialOffers,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          specialOffers: isEnabled.specialOffers ? false : true,
        }),
    },
    {
      title: strings.promoAndDiscount,
      value: isEnabled.promoAndDiscount,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          promoAndDiscount: isEnabled.promoAndDiscount ? false : true,
        }),
    },
    {
      title: strings.payment,
      value: isEnabled.payment,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          payment: isEnabled.payment ? false : true,
        }),
    },
    {
      title: strings.cashBack,
      value: isEnabled.cashBack,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          cashBack: isEnabled.cashBack ? false : true,
        }),
    },
    {
      title: strings.appUpdate,
      value: isEnabled.appUpdate,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          appUpdate: isEnabled.appUpdate ? false : true,
        }),
    },
    {
      title: strings.newServiceAvailable,
      value: isEnabled.newServiceAvailable,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          newServiceAvailable: isEnabled.newServiceAvailable ? false : true,
        }),
    },
    {
      title: strings.newTipsAvailable,
      value: isEnabled.newTipsAvailable,
      onPress: () =>
        setIsEnabled({
          ...isEnabled,
          newTipsAvailable: isEnabled.newTipsAvailable ? false : true,
        }),
    },
  ];

  return (
    <CSafeAreaView>
      <CHeader title={strings.notification} />
      <View style={localStyles.root}>
        {NotificationData.map((item, index) => {
          return (
            <View style={localStyles.mainContainer} key={index}>
              <CText type={'s18'}>{item.title}</CText>
              <Switch
                trackColor={{
                  false: colors.grayScale3,
                  true: colors.dark ? colors.grayScale5 : colors.btnColor,
                }}
                thumbColor={colors.white}
                onValueChange={item.onPress}
                value={item.value}
              />
            </View>
          );
        })}
      </View>
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph25,
    ...styles.mt20,
  },
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mb20,
  },
});
