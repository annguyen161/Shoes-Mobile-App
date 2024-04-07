import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CText from '../common/CText';
import images from '../../assets/images';
import {LikeYellowBg, UnLikeYellowBg, OutLineWhite} from '../../assets/svgs';
import {deviceWidth, moderateScale} from '../../common/constants';
import {styles} from '../../themes';

export default function ProductShortDetail(props) {
  const colors = useSelector(state => state.theme.theme);
  const [isLiked, setIsLiked] = useState(false);
  const {item, index, onPress} = props;

  const onPressLike = () => setIsLiked(!isLiked);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        localStyles.productContainer,
        index % 2 === 0 ? styles.mr5 : styles.ml5,
      ]}>
      <Image
        source={item?.productImage}
        style={[localStyles.productImageStyle]}
      />

      <View
        style={[
          localStyles.productStyle,
          {backgroundColor: colors.dark ? colors.imageBg : colors.grayScale1},
        ]}>
        <View style={[localStyles.productData]}>
          <View style={localStyles.productCondition}>
            <View
              style={[
                localStyles.paidContainer,
                {backgroundColor: colors.textBlue},
              ]}>
              <CText type={'s12'} color={colors.white}>
                {item?.condition}
              </CText>
            </View>
            <TouchableOpacity onPress={onPressLike}>
              {isLiked ? (
                <>{colors.dark ? <OutLineWhite /> : <LikeYellowBg />}</>
              ) : (
                <UnLikeYellowBg />
              )}
            </TouchableOpacity>
          </View>

          <CText style={styles.mt5} numberOfLines={1} type={'b16'}>
            {item?.product}
          </CText>

          <CText
            style={[styles.mt15, {textDecorationLine: 'line-through'}]}
            type={'b14'}>
            {item?.deal}
          </CText>

          <View style={localStyles.subItemStyle}>
            <CText type={'b18'} color={colors.redColor}>
              {item?.price}
            </CText>
            <View style={styles.flexRow}>
              <Image source={images.star} />
              <CText type={'s14'} style={styles.mr5} color={colors.textBlue}>
                {item?.rating}
              </CText>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  productContainer: {
    width: (deviceWidth - moderateScale(50)) / 2,
    height: moderateScale(245),
    borderRadius: moderateScale(10),
  },
  productData: {
    paddingHorizontal: moderateScale(12),
    paddingBottom: moderateScale(12),
    paddingTop: moderateScale(40),
  },
  productStyle: {
    borderRadius: moderateScale(10),
    position: 'absolute',
    width: '100%',
    bottom: moderateScale(0),
  },
  subItemStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.justifyBetween,
  },
  starStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
    ...styles.mr5,
  },
  paidContainer: {
    ...styles.ph10,
    ...styles.pv5,
    ...styles.center,
    borderRadius: moderateScale(6),
    width: moderateScale(55),
    height: moderateScale(30),
  },
  productImageStyle: {
    width: (deviceWidth - moderateScale(50)) / 2,
    height: (deviceWidth - moderateScale(100)) / 2,
    borderRadius: moderateScale(15),
    resizeMode: 'contain',
    ...styles.selfCenter,
    position: 'absolute',
    zIndex: 2,
    top: 0,
  },
  productCondition: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.justifyBetween,
  },
});
