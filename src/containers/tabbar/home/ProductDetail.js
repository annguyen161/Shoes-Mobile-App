import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import {
  deviceHeight,
  getHeight,
  moderateScale,
} from '../../../common/constants';
import {styles} from '../../../themes';
import CText from '../../../components/common/CText';
import images from '../../../assets/images';
import strings from '../../../i18n/strings';
import {SceneMap, TabView} from 'react-native-tab-view';
import Price from './Price';
import Description from './Description';
import Reviews from './Reviews';

export default function ProductDetail({navigation, route}) {
  const item = route?.params?.item;
  const colors = useSelector(state => state.theme.theme);
  const [isSelect, setIsSelect] = useState({
    index: 0,
    routes: [
      {key: 'first', title: strings.price},
      {key: 'second', title: strings.description},
      {key: 'third', title: strings.reviews},
    ],
  });
  const _handleIndexChange = index => {
    setIsSelect({...isSelect, index: index});
  };

  const HeaderCetegoryItem = ({title, index}) => {
    return (
      <TouchableOpacity
        onPress={() => _handleIndexChange(index)}
        style={[
          localStyles.rootSelect,
          {
            borderBottomColor: colors.dark
              ? isSelect.index === index
                ? colors.white
                : colors.textBlue
              : isSelect.index === index
              ? colors.textBlue
              : colors.white,
          },
        ]}>
        <CText
          type={'s18'}
          align={'center'}
          style={styles.pb20}
          color={
            colors.dark
              ? isSelect.index === index
                ? colors.textBlueBold
                : colors.textBlueBold
              : isSelect.index === index
              ? colors.textBlueBold
              : colors.textBlue
          }>
          {title}
        </CText>
      </TouchableOpacity>
    );
  };

  const _renderTabBar = props => {
    return (
      <View style={localStyles.mainContainer}>
        {props.navigationState.routes.map((item, index) => {
          return <HeaderCetegoryItem title={item.title} index={index} />;
        })}
      </View>
    );
  };

  const _renderScene = SceneMap({
    first: () => <Price price={item} />,
    second: Description,
    third: Reviews,
  });

  return (
    <CSafeAreaView>
      <ImageBackground source={item?.productImage} style={localStyles.root}>
        <CHeader title={item?.title} />
      </ImageBackground>
      <View style={styles.mh20}>
        <View style={localStyles.productText}>
          <CText style={styles.flex} numberOfLines={1} type={'b26'}>
            {item?.product}
          </CText>
        </View>
        <View style={localStyles.subItemStyle}>
          <View
            style={[
              localStyles.paidContainer,
              {backgroundColor: colors.textBlue},
            ]}>
            <CText type={'s12'} color={colors.white}>
              {item.condition}
            </CText>
          </View>
          <Image
            source={colors.dark ? images.starDark : images.star}
            style={styles.mh5}
          />
          <CText type={'s14'} color={colors.textBlue} style={styles.mh5}>
            {item?.rating}
          </CText>
        </View>
      </View>

      <TabView
        navigationState={isSelect}
        renderScene={_renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
        activeColor={{color: colors.primary}}
        navigation={navigation}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    height: deviceHeight / 2 - moderateScale(80),
    width: '100%',
    resizeMode: 'contain',
  },
  productText: {
    ...styles.rowSpaceBetween,
    ...styles.mt20,
  },
  subItemStyle: {
    ...styles.mv5,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  starStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
    ...styles.mh10,
  },
  paidContainer: {
    ...styles.ph10,
    ...styles.pv5,
    borderRadius: moderateScale(6),
  },
  galleryImage: {
    width: moderateScale(120),
    height: getHeight(100),
    borderRadius: moderateScale(12),
    resizeMode: 'cover',
    ...styles.mt10,
  },
  rootSelect: {
    borderBottomWidth: 2,
    ...styles.mh20,
  },
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mh20,
    ...styles.mt10,
    borderBottomWidth: moderateScale(0.5),
    borderColor: '#f2f8fd',
  },
});
