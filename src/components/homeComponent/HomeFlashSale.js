import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CText from '../common/CText';
import images from '../../assets/images';
import {deviceWidth, moderateScale} from '../../common/constants';
import {styles} from '../../themes';

export default function HomeFlashSale({data}) {
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(true);
  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          localStyles.productContainer,
          {backgroundColor: colors.dark ? colors.imageBg : colors.grayScale1},
        ]}>
        <Image source={images.logoSale} style={localStyles.likeContainer} />

        <Image
          source={item?.productImage}
          style={[
            localStyles.productImageStyle,
            {backgroundColor: colors.dark ? colors.imageBg : colors.grayScale1},
          ]}
        />
        <CText
          style={[styles.flex, styles.mt10, styles.ml10]}
          numberOfLines={1}
          type={'b16'}>
          {item.product}
        </CText>
        <View style={[styles.rowSpaceBetween, styles.ph10]}>
          <CText
            type={'b16'}
            style={[styles.mb5, {textDecorationLine: 'line-through'}]}>
            {item?.deal}
          </CText>
          <CText type={'b22'} style={[styles.mb5]} color={colors.redColor}>
            {item?.price}
          </CText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      extraData={extraData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={20}
    />
  );
}

const localStyles = StyleSheet.create({
  productContainer: {
    width: (deviceWidth - moderateScale(50)) / 2,
    borderRadius: moderateScale(15),
    ...styles.mt15,
    ...styles.mr15,
  },
  productImageStyle: {
    width: (deviceWidth - moderateScale(50)) / 2,
    height: (deviceWidth - moderateScale(50)) / 2,
    borderRadius: moderateScale(15),
    resizeMode: 'contain',
    ...styles.selfCenter,
  },
  likeContainer: {
    position: 'absolute',
    top: moderateScale(0),
    right: moderateScale(0),
    zIndex: 1,
    width: moderateScale(40),
    height: moderateScale(40),
    resizeMode: 'cover',
  },
});
