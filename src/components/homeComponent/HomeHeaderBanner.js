import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
// Custom Imports
import {styles} from '../../themes';
import {
  deviceWidth,
  getHeight,
  moderateScale,
  getWidth,
} from '../../common/constants';
import typography from '../../themes/typography';
import CText from '../common/CText';

export default function HomeHeaderBanner({image}) {
  const colors = useSelector(state => state.theme.theme);
  const renderSwiperItem = ({item}) => {
    return (
      <View>
        <ImageBackground source={item.banner} style={localStyles.image}>
          <View style={localStyles.bgBanner}>
            <View style={localStyles.textStyle}>
              <CText style={localStyles.discount}>{item.discount}</CText>
              <CText style={localStyles.dateDeals}>{item.dateDeals}</CText>
              <CText style={localStyles.description}>{item.description}</CText>
            </View>
            <Image
              style={localStyles.imageStyle}
              resizeMode="cover"
              key={item.id}
              source={item.image}
            />
          </View>
        </ImageBackground>
      </View>
    );
  };
  const width = Dimensions.get('window').width;
  return (
    <Carousel
      data={image}
      loop
      width={width}
      height={300}
      autoPlay={true}
      autoplayDelay={4}
      autoplayLoop
      index={1}
      showPagination
      renderItem={renderSwiperItem}
      scrollAnimationDuration={1000}
      paginationStyleItemActive={{
        ...localStyles.paginationStyleItemActive,
        backgroundColor: colors.dark ? colors.grayScale4 : colors.dark2,
      }}
      paginationStyleItemInactive={{
        ...localStyles.paginationStyleItemInactive,
        backgroundColor: colors.dark ? colors.dark2 : colors.grayScale4,
      }}
      paginationStyleItem={localStyles.paginationStyleItem}
      style={localStyles.swiperStyle}
    />
  );
}

const localStyles = StyleSheet.create({
  paginationStyleItem: {
    ...styles.mh5,
  },
  paginationStyleItemActive: {
    height: getHeight(6),
    width: moderateScale(16),
  },
  paginationStyleItemInactive: {
    height: moderateScale(6),
    width: moderateScale(6),
  },
  swiperItemContainer: {
    ...styles.p20,
    ...styles.rowSpaceAround,
    position: 'relative',
    width: deviceWidth - moderateScale(40),
  },
  textStyle: {
    marginTop: moderateScale(120),
  },
  imageStyle: {
    marginLeft: moderateScale(-40),
    top: moderateScale(20),
  },
  bgBanner: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
  },
  discount: {
    ...typography.fontSizes.f40,
    ...typography.fontWeights.Bold,
    ...styles.mb5,
    width: getWidth(115),
  },
  dateDeals: {
    ...typography.fontSizes.f24,
    ...typography.fontWeights.Bold,
    ...styles.mb5,
    width: getWidth(115),
  },
  description: {
    ...typography.fontSizes.f12,
    ...typography.fontWeights.Regular,
    width: getWidth(115),
  },
  image: {
    width: '100%',
    height: moderateScale(300),
  },
});
