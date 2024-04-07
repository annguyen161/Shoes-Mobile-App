import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import {deviceWidth, getHeight, moderateScale} from '../../../common/constants';
import {styles} from '../../../themes';
import CText from '../../../components/common/CText';
import {BlueTick} from '../../../assets/svgs';
import images from '../../../assets/images';
import strings from '../../../i18n/strings';
import SizeComponent from '../../../components/homeComponent/SizeComponent';
import ColorComponent from '../../../components/homeComponent/ColorComponent';
import CButton from '../../../components/common/CButton';
import {StackNav} from '../../../navigation/NavigationKeys';
import {useNavigation} from '@react-navigation/native';

export default function Price({route, price}) {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const onPressChat = () => navigation.navigate(StackNav.Chats);
  const onPressCall = () => navigation.navigate(StackNav.Calls);
  const onPressCheckout = () =>
    navigation.navigate(StackNav.CheckOut, {
      cartData: [price],
      pPrice: price,
    });
  return (
    <CSafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.mh20, styles.mt15]}>
          <CText type={'B18'}>Color</CText>
          <ColorComponent />
          <CText type={'B18'}>Size</CText>
          <SizeComponent />
          <View style={localStyles.customerCareStyle}>
            <View style={styles.rowCenter}>
              <Image
                source={images.logoBrand}
                style={localStyles.bmwLogoStyle}
              />
              <View style={styles.ml10}>
                <View style={[styles.flexRow, styles.itemsCenter]}>
                  <CText type={'b18'} style={styles.mr10}>
                    {'Gucci Store'}
                  </CText>
                  <BlueTick />
                </View>
                <CText
                  type={'r14'}
                  style={styles.mt10}
                  color={colors.dark ? colors.grayScale3 : colors.grayScale6}>
                  {'Official Account of Gucci'}
                </CText>
              </View>
            </View>
            <View style={[styles.flexRow, styles.itemsEnd]}>
              <TouchableOpacity style={styles.mh10}>
                <Ionicons
                  onPress={onPressChat}
                  name={'chatbubble-ellipses-outline'}
                  color={colors.textColor}
                  size={moderateScale(26)}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  onPress={onPressCall}
                  name={'call-outline'}
                  color={colors.textColor}
                  size={moderateScale(26)}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={localStyles.itemPrice}>
            <CText type={'B24'} color={colors.icon}>
              {strings.price}
            </CText>
            <CText type={'B24'} color={colors.textBlueBold}>
              $119,00
            </CText>
          </View>
        </View>

        <View style={styles.ph20}>
          <View style={localStyles.bottomContainer}>
            <View style={localStyles.priceContainer}>
              <CButton
                type={'b16'}
                title={strings.wishlist}
                color={colors.textColor}
                bgColor={colors.dark ? colors.backgroundColor : colors.white}
                containerStyle={localStyles.addWishlistContainer}
              />
            </View>
            <CButton
              type={'b16'}
              title={strings.addToCart}
              style={styles.ml10}
              containerStyle={localStyles.addToCartContainer}
              onPress={onPressCheckout}
            />
          </View>
        </View>
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  bmwLogoStyle: {
    width: moderateScale(60),
    height: moderateScale(60),
    resizeMode: 'contain',
  },
  customerCareStyle: {
    ...styles.mv20,
    ...styles.rowSpaceBetween,
  },
  itemPrice: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv10,
    borderWidth: 1,
    borderLeftWidth: moderateScale(0),
    borderRightWidth: moderateScale(0),
    borderTopColor: '#246BFD',
    borderBottomColor: '#246BFD',
  },
  bottomContainer: {
    ...styles.pv10,
    ...styles.rowSpaceBetween,
  },
  priceContainer: {
    height: getHeight(50),
    ...styles.justifyEvenly,
  },
  addToCartContainer: {
    width: deviceWidth / 3 + moderateScale(20),
    height: getHeight(60),
    ...styles.shadowStyle,
  },
  addWishlistContainer: {
    width: deviceWidth / 3 + moderateScale(20),
    height: getHeight(60),
    ...styles.shadowStyle,
    borderWidth: 1,
    borderColor: '#246BFD',
  },
});
