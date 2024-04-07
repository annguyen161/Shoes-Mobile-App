import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import {activeData} from '../../../api/constant';
import {
  AppLogoDark,
  AppLogoLight,
  MenuIcon,
  SearchIcon,
} from '../../../assets/svgs';
import _ from 'lodash';
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import CText from '../../../components/common/CText';
import CButton from '../../../components/common/CButton';
import CHeader from '../../../components/common/CHeader';
import {StackNav} from '../../../navigation/NavigationKeys';
import {deviceWidth, getColors, moderateScale} from '../../../common/constants';
import CartProductComponent from '../../../components/cartComponent/CartProductComponent';

export default function ListCheckOut({navigation, route}) {
  const [data, setData] = useState(activeData);
  const [totalPrice, setTotalPrice] = useState(0);
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);

  const handleQuantityChange = (itemId, newQuantity) => {
    setData(prevData =>
      prevData.map(item => {
        if (item.id === itemId) {
          return {...item, quantity: newQuantity};
        }
        return item;
      }),
    );
  };

  useEffect(() => {
    const sumOfPrices = _.sumBy(data, item => {
      const priceNumber = parseInt(
        item.price.replace('$', '').replace(',', ''),
        10,
      );
      // eslint-disable-next-line no-shadow
      const total = priceNumber * (item?.quantity ?? 1);
      return total;
    });
    setTotalPrice(sumOfPrices);
  }, [data, totalPrice]);

  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  const formattedNumber = new Intl.NumberFormat('en-US', options).format(
    totalPrice,
  );

  const onPressTrashItem = id => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const onPressCheckout = () =>
    navigation.navigate(StackNav.CheckOutOrders, {
      amount: formattedNumber,
      data,
    });

  const onPressSearch = () => navigation.navigate(StackNav.Search);

  const RightIcon = () => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressSearch}>
          <SearchIcon color={color} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ph10}>
          <MenuIcon color={color} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <CartProductComponent
        item={item}
        onPressTrashItem={onPressTrashItem}
        onQuantityChange={handleQuantityChange}
      />
    );
  };

  const LeftIcon = () => {
    return (
      <View style={styles.pr10}>
        {colors.dark ? <AppLogoDark /> : <AppLogoLight />}
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader
        isHideBack={true}
        title={strings.mycart}
        isLeftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
      <View style={styles.flex}>
        <FlashList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={localStyles.contentContainerStyle}
          estimatedItemSize={20}
        />
        <View style={styles.ph20}>
          <View style={localStyles.bottomContainer}>
            <View style={localStyles.priceContainer}>
              <CText
                type={'m14'}
                color={colors.dark ? colors.grayScale3 : colors.grayScale6}>
                {strings.totalPrice}
              </CText>
              <CText type={'b22'}>{formattedNumber}</CText>
            </View>
            <CButton
              type={'b16'}
              title={strings.checkOut}
              containerStyle={localStyles.addToCartContainer}
              onPress={onPressCheckout}
            />
          </View>
        </View>
      </View>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  imageContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  contentContainerStyle: {
    ...styles.pb20,
  },
  shippingImg: {
    width: moderateScale(26),
    height: moderateScale(26),
    resizeMode: 'contain',
  },
  shippingContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv15,
    ...styles.mv10,
    borderRadius: moderateScale(14),
  },
  bottomContainer: {
    ...styles.pv10,
    ...styles.ph10,
    ...styles.rowSpaceBetween,
    marginBottom: 80,
  },
  addToCartContainer: {
    width: deviceWidth / 2.5 + moderateScale(30),
    ...styles.shadowStyle,
  },
  innerContainer: {
    ...styles.mv20,
    ...styles.pv15,
    ...styles.ph20,
    borderRadius: moderateScale(12),
    ...styles.shadowStyle,
  },
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.ph15,
    ...styles.flexGrow1,
    width: deviceWidth - moderateScale(100),
  },
  sendBtn: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    ...styles.rowCenter,
    ...styles.ml10,
  },
});
