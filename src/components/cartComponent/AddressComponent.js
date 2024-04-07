import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {LocationDark, LocationLight} from '../../assets/svgs';
import CText from '../common/CText';
import EditDark from '../../assets/svgs/editDark';
import EditLight from '../../assets/svgs/editLight';
import strings from '../../i18n/strings';

export default function AddressComponent(props) {
  const {item, selectedType, onPressAddress, isSelect} = props;
  const colors = useSelector(state => state.theme.theme);
  return (
    <TouchableOpacity
      onPress={onPressAddress}
      style={[
        localStyles.addressContainer,
        {backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1},
      ]}>
      <View style={localStyles.innerContainer}>
        {colors.dark ? <LocationDark /> : <LocationLight />}
        <View style={localStyles.defaultTextContainer}>
          <View style={localStyles.titleStyle}>
            <CText type={'B18'}>{item?.title}</CText>
            {item?.isDefault && (
              <View
                style={[
                  localStyles.defaultContainer,
                  {backgroundColor: colors.textBlue},
                ]}>
                <CText type={'s12'} color={colors.white}>
                  {strings.default}
                </CText>
              </View>
            )}
          </View>
          <CText type={'r14'} style={styles.mt2} color={colors.textBlue}>
            {item?.address}
          </CText>
        </View>
      </View>
      {!!isSelect ? (
        <Ionicons
          name={
            item?.title === selectedType
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          size={moderateScale(22)}
          color={colors.textBlue}
        />
      ) : colors.dark ? (
        <EditDark />
      ) : (
        <EditLight />
      )}
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  addressContainer: {
    ...styles.p15,
    ...styles.mh20,
    ...styles.mb15,
    borderRadius: moderateScale(15),
    ...styles.rowSpaceBetween,
    ...styles.shadowStyle,
  },
  defaultTextContainer: {
    ...styles.mh10,
    ...styles.flex,
  },
  defaultContainer: {
    ...styles.ml10,
    ...styles.selfStart,
    ...styles.ph10,
    ...styles.pv5,
    borderRadius: moderateScale(6),
  },
  titleStyle: {
    ...styles.flexRow,
    ...styles.flex,
  },
  innerContainer: {
    ...styles.rowCenter,
    ...styles.flex,
  },
});
