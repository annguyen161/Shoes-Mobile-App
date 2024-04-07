// Library Imports
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';

// Custom Imports
import {commonColor, styles} from '../../../themes';
import {getHeight, moderateScale} from '../../../common/constants';
import CText from '../../../components/common/CText';
import {
  homeCategoryData,
  bannerImage,
  homeProductData,
  headerBanner,
} from '../../../api/constant';
import SearchComponent from '../../../components/homeComponent/SearchComponent';
import HomeBanner from '../../../components/homeComponent/HomeBanner';
import SubHeader from '../../../components/SubHeader';
import HomeProductComponent from '../../../components/homeComponent/HomeProductComponent';
import {StackNav} from '../../../navigation/NavigationKeys';
import strings from '../../../i18n/strings';
import {HeartIcon, NotificationIcon} from '../../../assets/svgs';
import HomeFlashSale from '../../../components/homeComponent/HomeFlashSale';
import HomeHeaderBanner from '../../../components/homeComponent/HomeHeaderBanner';
import {useIsFocused} from '@react-navigation/native';
import CountDown from '../../../components/common/CountDown';

const RenderHeaderItem = React.memo(() => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const onPressNotification = () => navigation.navigate(StackNav.Notification);
  const onPressLike = () => navigation.navigate(StackNav.MyWishlist);
  const onSearchInput = useCallback(text => setSearch(text), []);
  const isFocused = useIsFocused();

  return (
    <>
      {isFocused && (
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      )}
      <View style={localStyles.itemHeader}>
        <HomeHeaderBanner image={headerBanner} style={localStyles.imgHome} />
        <View style={localStyles.itemSearch}>
          <SearchComponent
            search={search}
            onSearchInput={onSearchInput}
            style={localStyles.searchHome}
          />
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={onPressNotification} style={styles.mh10}>
              <NotificationIcon color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLike}>
              <HeartIcon
                color={colors.white}
                height={moderateScale(27)}
                width={moderateScale(27)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
});

const RenderFooterItem = React.memo(({item, index}) => {
  const calculateTargetDate = () => {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    return now;
  };

  const [targetDate, setTargetDate] = useState(calculateTargetDate());

  useEffect(() => {
    setTargetDate(calculateTargetDate());
  }, []);
  return (
    <>
      <View style={localStyles.itemFlashSale}>
        <View style={styles.rowSpaceBetween}>
          <CText type={'b22'}>{strings.flashSale}</CText>
          <CountDown targetDate={targetDate} />
        </View>
        <HomeFlashSale data={homeProductData} />
        <HomeBanner image={bannerImage} />
        <SubHeader title1={strings.recommendProducts} />
        <HomeProductComponent homeProductData={homeProductData} />
      </View>
    </>
  );
});

export default function HomeTab({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(true);

  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  const onPressItem = item =>
    navigation.navigate(StackNav.ProductCategory, {item: item});

  const renderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onPressItem(item)}
        style={localStyles.categoryRoot}>
        <View
          style={[
            localStyles.iconContainer,
            {
              backgroundColor: colors.dark ? colors.textBlue : colors.bgSearch,
            },
          ]}>
          <Image
            source={item?.image}
            style={[
              localStyles.iconStyle,
              {tintColor: colors.dark ? colors.white : colors.black},
            ]}
          />
        </View>
        <CText
          type="b16"
          numberOfLines={1}
          align={'center'}
          color={colors.primaryTextColor}
          style={styles.mt15}>
          {item.title}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View
        style={[localStyles.root, {backgroundColor: colors.backgroundColor}]}>
        <FlashList
          data={homeCategoryData}
          extraData={extraData}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          estimatedItemSize={10}
          ListHeaderComponent={<RenderHeaderItem />}
          ListFooterComponent={<RenderFooterItem />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  iconStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  iconContainer: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(10),
    backgroundColor: commonColor.grayScale3,
    ...styles.center,
  },
  categoryRoot: {
    width: '100%',
    height: getHeight(140),
    ...styles.itemsCenter,
    ...styles.mt20,
  },
  itemHeader: {
    width: '100%',
    flex: 1,
  },
  imgHome: {
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  itemSearch: {
    ...styles.rowCenter,
    ...styles.ph20,
    position: 'absolute',
    top: moderateScale(30),
  },
  itemFlashSale: {
    ...styles.ph20,
    ...styles.pv30,
    ...styles.mb95,
  },
  itemTime: {
    ...styles.rowSpaceBetween,
    backgroundColor: 'red',
    height: getHeight(100),
  },
  itemRunTime: {
    ...styles.center,
  },
  renderTime: {
    ...styles.rowSpaceBetween,
  },
  searchHome: {
    width: '80%',
  },
});
