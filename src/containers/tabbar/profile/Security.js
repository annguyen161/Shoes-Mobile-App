// Library import
import {
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Local import
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CText from '../../../components/common/CText';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import CButton from '../../../components/common/CButton';
import {StackNav} from '../../../navigation/NavigationKeys';

export default Security = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [isEnabled, setIsEnabled] = React.useState({
    rememberMe: false,
    faceId: false,
    biometricId: false,
  });

  const SecurityData = [
    {
      title: strings.rememberMe,
      rightIcon: true,
      value: isEnabled.rememberMe,
      toggleSwitch: () =>
        setIsEnabled({
          ...isEnabled,
          rememberMe: isEnabled.rememberMe ? false : true,
        }),
    },
    {
      title: strings.faceId,
      rightIcon: true,
      value: isEnabled.faceId,
      toggleSwitch: () =>
        setIsEnabled({
          ...isEnabled,
          faceId: isEnabled.faceId ? false : true,
        }),
    },
    {
      title: strings.biometricId,
      rightIcon: true,
      value: isEnabled.biometricId,
      toggleSwitch: () =>
        setIsEnabled({
          ...isEnabled,
          biometricId: isEnabled.biometricId ? false : true,
        }),
    },
    {
      title: strings.googleAuthenticator,
    },
  ];

  const onPressChangePin = () => navigation.navigate(StackNav.SetPin);
  const onPressChangePassword = () =>
    navigation.navigate(StackNav.CreateNewPassword);

  const RenderData = data => {
    return (
      <TouchableOpacity style={localStyles.settingsContainer}>
        <CText type="s18">{data.item.title}</CText>
        <View style={localStyles.rightContainer}>
          {!!data?.item?.rightIcon ? (
            <Switch
              trackColor={{
                false: colors.grayScale3,
                true: colors.dark ? colors.grayScale5 : colors.btnColor,
              }}
              thumbColor={colors.white}
              onValueChange={data?.item?.toggleSwitch}
              value={data?.item?.value}
            />
          ) : (
            <Ionicons
              name="chevron-forward-outline"
              size={moderateScale(20)}
              color={colors.white}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.security} />
      <View style={styles.ph20}>
        <FlatList
          data={SecurityData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <RenderData item={item} />}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
        <CButton
          title={strings.changePin}
          type={'S16'}
          containerStyle={localStyles.btnContainer}
          onPress={onPressChangePin}
        />
        <CButton
          title={strings.changePassword}
          type={'S16'}
          containerStyle={localStyles.btnContainer}
          onPress={onPressChangePassword}
        />
      </View>
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt20,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
  btnContainer: {
    ...styles.center,
    width: '100%',
    alignSelf: 'center',
    ...styles.mt25,
  },
});
