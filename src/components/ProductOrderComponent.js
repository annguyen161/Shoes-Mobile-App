// Library Imports
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Custom Imports
import CText from './common/CText';
import CButton from './common/CButton';
import strings from '../i18n/strings';
import {deviceWidth, getHeight, moderateScale} from '../common/constants';
import {styles} from '../themes';
import {StackNav} from '../navigation/NavigationKeys';

export default function ProductOrderComponent(props) {
  const {
    item,
    isCompleted = false,
    isCategory = true,
    isButton = true,
    onPressComplete,
  } = props;
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const onPressBtn = () => {
    if (isCompleted) {
      onPressComplete(item);
    } else {
      navigation.navigate(StackNav.TrackOrder, {item: item});
    }
  };
  return (
    <View
      style={[
        localStyles.productContainer,
        {
          backgroundColor: colors.dark ? colors.dark2 : colors.bgSearch,
          borderColor: colors.textBlue,
        },
      ]}>
      <Image
        source={item?.productImage}
        style={[
          localStyles.productImageStyle,
          {backgroundColor: colors.dark ? colors.imageBg : colors.white},
        ]}
      />
      <View style={localStyles.rightContainer}>
        <CText numberOfLines={1} type={'b16'}>
          {item?.product}
        </CText>
        <View style={[localStyles.subItemStyle]}>
          <View
            style={[
              localStyles.circleContainer,
              {backgroundColor: item?.color},
            ]}
          />
          <CText type={'s12'} style={{width: 40}} color={colors.textBlue}>
            {item.nColor}
          </CText>
          {!!isCategory && (
            <View
              style={[
                localStyles.paidContainer,
                {backgroundColor: colors.dark ? colors.dark3 : colors.textBlue},
              ]}>
              <CText type={'s12'} color={colors.white}>
                {isCompleted ? strings.completed : strings.inDelivery}
              </CText>
            </View>
          )}
        </View>
        <View style={localStyles.btnContainer}>
          <CText type={'b16'}>{item?.price}</CText>
          {!!isButton && (
            <CButton
              title={isCompleted ? strings.leaveReview : strings.trackOrder}
              type={'S14'}
              color={colors.dark ? colors.black : colors.white}
              bgColor={colors.textBlueBold}
              containerStyle={localStyles.orderContainer}
              onPress={onPressBtn}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  productContainer: {
    ...styles.p15,
    ...styles.flexRow,
    ...styles.mt15,
    borderRadius: moderateScale(20),
    ...styles.shadowStyle,
    ...styles.selfCenter,
    width: deviceWidth - moderateScale(40),
    minHeight: moderateScale(130),
    borderWidth: 1,
  },
  productImageStyle: {
    height: '100%',
    width: moderateScale(90),
    borderRadius: moderateScale(20),
    resizeMode: 'contain',
    marginRight: moderateScale(15),
  },
  rightContainer: {
    ...styles.flex,
    ...styles.justifyBetween,
  },
  circleContainer: {
    width: moderateScale(13),
    height: moderateScale(13),
    backgroundColor: '#7A5548',
    ...styles.mr10,
  },
  subItemStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  paidContainer: {
    ...styles.selfStart,
    ...styles.ph10,
    ...styles.pv5,
    ...styles.ml15,
    borderRadius: moderateScale(6),
  },
  orderContainer: {
    height: getHeight(35),
    borderRadius: moderateScale(5),
    width: moderateScale(110),
  },
  btnContainer: {
    ...styles.rowSpaceBetween,
  },
});
