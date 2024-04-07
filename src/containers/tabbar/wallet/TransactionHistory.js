// Library Imports
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CText from '../../../components/common/CText';
import {styles} from '../../../themes';
import {getColors, moderateScale} from '../../../common/constants';
import {
  OrderIcon,
  SearchIcon,
  TopUpIcon,
  TopUpWalletDark,
  TopUpWalletLight,
} from '../../../assets/svgs';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {walletData} from '../../../api/constant';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function TransactionHistory({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);

  const onPressItem = item =>
    navigation.navigate(StackNav.EReceipt, {item: item});

  const RightIcon = () => {
    return (
      <TouchableOpacity onPress={onPressItem}>
        <SearchIcon color={color} />
      </TouchableOpacity>
    );
  };

  const renderHistoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onPressItem(item)}
        style={localStyles.renderItemContainer}>
        <View style={[styles.rowCenter, styles.flex]}>
          {item?.status === strings.topUp ? (
            colors.dark ? (
              <TopUpWalletDark />
            ) : (
              <TopUpWalletLight />
            )
          ) : (
            <Image
              source={item.productImage}
              style={[
                localStyles.productImage,
                {backgroundColor: colors.imageBg},
              ]}
            />
          )}
          <View style={[styles.mh10, styles.flex]}>
            <CText numberOfLines={1} type={'b16'}>
              {item.product}
            </CText>
            <CText numberOfLines={1} style={styles.mt5} type={'s14'}>
              {item.date}
            </CText>
          </View>
        </View>
        <View style={styles.itemsEnd}>
          <CText type={'b16'}>{item?.price}</CText>
          <View style={[styles.rowCenter, styles.mt5]}>
            <CText type={'s14'} style={[styles.mr5]}>
              {item?.status}
            </CText>
            {item?.status === strings.topUp ? <TopUpIcon /> : <OrderIcon />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.transactionHistory} rightIcon={<RightIcon />} />
      <FlatList
        data={walletData}
        renderItem={renderHistoryItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  productImage: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: moderateScale(28),
    resizeMode: 'contain',
  },
  renderItemContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.mb15,
  },
});
