import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import {AddPromoDark, AddPromoLight} from '../../assets/svgs';
import strings from '../../i18n/strings';

export default function ShippingComponent(props) {
  const {item, onPressChoose, selectedType} = props;
  const colors = useSelector(state => state.theme.theme);

  return (
    <TouchableOpacity
      onPress={onPressChoose}
      style={[
        localStyles.addressContainer,
        {backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1},
      ]}>
      <View style={localStyles.imageContainer}>
        {!item?.price ? (
          colors.dark ? (
            <AddPromoDark />
          ) : (
            <AddPromoLight />
          )
        ) : (
          <View
            style={[
              localStyles.iconBgContainer,
              {backgroundColor: colors.textColor},
            ]}>
            <Image
              source={item?.image}
              style={[
                localStyles.iconStyle,
                {tintColor: colors.dark ? colors.dark3 : colors.white},
              ]}
            />
          </View>
        )}
        <View style={localStyles.defaultTextContainer}>
          <View style={localStyles.textContainer}>
            <CText type={'B18'}>{item?.title}</CText>
            {!!item?.isDefault && (
              <View
                style={[
                  localStyles.defaultContainer,
                  {backgroundColor: colors.dark3},
                ]}>
                <CText type={'s12'}>{strings.default}</CText>
              </View>
            )}
          </View>
          <CText type={'r14'} numberOfLines={1}>
            {item?.description}
          </CText>
        </View>
      </View>
      <View style={styles.rowCenter}>
        <CText type={'S16'} numberOfLines={1} style={styles.mr10}>
          {item?.price}
        </CText>
        <Ionicons
          name={
            item?.title === selectedType
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          size={moderateScale(22)}
          color={colors.dark ? colors.white : colors.black}
        />
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  addressContainer: {
    ...styles.p15,
    ...styles.mh20,
    ...styles.mb15,
    ...styles.rowSpaceBetween,
    borderRadius: moderateScale(15),
    ...styles.shadowStyle,
  },
  defaultContainer: {
    ...styles.ml10,
    ...styles.selfStart,
    ...styles.ph10,
    ...styles.pv5,
    borderRadius: moderateScale(6),
  },
  iconBgContainer: {
    ...styles.center,
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  iconStyle: {
    height: moderateScale(22),
    width: moderateScale(22),
    resizeMode: 'contain',
  },
  textContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mb10,
  },
  defaultTextContainer: {
    ...styles.mh10,
    ...styles.flex,
  },
  imageContainer: {
    ...styles.flexRow,
    ...styles.center,
    ...styles.flex,
  },
});
