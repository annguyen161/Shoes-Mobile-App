// Library Imports
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CText from '../../../components/common/CText';
import images from '../../../assets/images';
import {styles} from '../../../themes';
import {getColors, moderateScale} from '../../../common/constants';
import {
  DownloadTopUp,
  MenuIcon,
  OrderIcon,
  SearchIcon,
  TopUpIcon,
  TopUpWalletDark,
  TopUpWalletLight,
} from '../../../assets/svgs';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import SubHeader from '../../../components/SubHeader';
import {walletData} from '../../../api/constant';
import {StackNav} from '../../../navigation/NavigationKeys';
import CButton from '../../../components/common/CButton';
import typography from '../../../themes/typography';

export default function WalletTab({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);
  const onPressSeeAll = () => navigation.navigate(StackNav.TransactionHistory);

  const onPressWallet = () => navigation.navigate(StackNav.TopUpEWallet);

  const onPressItem = itm =>
    navigation.navigate(StackNav.EReceipt, {item: itm});

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
            <CText
              numberOfLines={1}
              style={styles.mt5}
              type={'s14'}
              color={colors.textBlue}>
              {item.date}
            </CText>
          </View>
        </View>
        <View style={styles.itemsEnd}>
          <CText type={'b16'}>{item?.price}</CText>
          <View style={[styles.rowCenter, styles.mt5]}>
            <CText type={'s14'} style={[styles.mr5]} color={colors.textBlue}>
              {item?.status}
            </CText>
            {item?.status === strings.topUp ? <TopUpIcon /> : <OrderIcon />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeaderItem = () => {
    return (
      <View>
        <ImageBackground
          source={images.bgMasterCard}
          resizeMode="cover"
          style={localStyles.creditCardImage}>
          <View
            style={[localStyles.MasterCard, styles.columnCenter, styles.flex]}>
            <View style={localStyles.InfoCard}>
              <View style={[styles.mh10, styles.flex]}>
                <CText
                  numberOfLines={1}
                  type={'b22'}
                  style={styles.mb10}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {strings.nameOnboarding}
                </CText>
                <CText
                  numberOfLines={1}
                  style={(styles.mt5, typography.fontSizes.f10)}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {strings.cardVisa_Icon}
                </CText>
              </View>
              <Image source={images.masterCard} style={localStyles.CardImage} />
            </View>
            <View style={localStyles.InfoCard}>
              <View style={[styles.mh10, styles.flex, localStyles.BalanceCard]}>
                <CText
                  style={styles.mb10}
                  numberOfLines={1}
                  type={'b14'}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {strings.yourbalance}
                </CText>
                <CText
                  numberOfLines={1}
                  style={(styles.mt5, styles.mb30, typography.fontWeights.Bold)}
                  type={'b30'}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {strings.priceWallet}
                </CText>
              </View>
              <CButton
                type={'b16'}
                title={strings.topUp}
                style={styles.ph5}
                color={colors.textBlack}
                bgColor={
                  colors.dark ? colors.textColor : colors.backgroundColor
                }
                containerStyle={localStyles.topUp}
                icon={<DownloadTopUp />}
                onPress={onPressWallet}
              />
            </View>
          </View>
        </ImageBackground>
        <SubHeader
          title1={strings.transactionHistory}
          title2={strings.seeAll}
          onPressSeeAll={onPressSeeAll}
          style={styles.ph20}
        />
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader
        isHideBack={true}
        title={strings.wallet}
        rightIcon={<RightIcon />}
      />
      <View style={localStyles.rot}>
        <FlatList
          data={walletData}
          renderItem={renderHistoryItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={renderHeaderItem}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      </View>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  rot: {
    marginBottom: moderateScale(150),
  },
  creditCardImage: {
    width: moderateScale(450),
    height: moderateScale(220),
    resizeMode: 'cover',
    ...styles.selfCenter,
  },
  MasterCard: {
    width: moderateScale(380),
    height: moderateScale(220),
    position: 'relative',
    ...styles.mh25,
  },
  CardImage: {
    width: moderateScale(40),
    height: moderateScale(40),
    resizeMode: 'contain',
    ...styles.mr15,
    ...styles.selfCenter,
  },
  InfoCard: {
    ...styles.mh10,
    ...styles.flex,
    ...styles.rowSpaceBetween,
    width: moderateScale(305),
  },
  topUp: {
    position: 'absolute',
    flexDirection: 'row-reverse',
    right: moderateScale(5),
    width: moderateScale(100),
    height: moderateScale(35),
  },
  BalanceCard: {
    position: 'absolute',
    left: moderateScale(0),
    bottom: moderateScale(35),
  },
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
