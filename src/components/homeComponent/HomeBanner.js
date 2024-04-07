import {Image, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import Carousel from 'react-native-reanimated-carousel';
// Custom Imports
import {styles} from '../../themes';
import {deviceWidth, getHeight, moderateScale} from '../../common/constants';

const HomeBanner = ({image}) => {
  const renderSwiperItem = ({item}) => {
    return (
      <Image source={item?.image} style={localStyles.swiperItemContainer} />
    );
  };
  return (
    <>
      <View style={styles.flex}>
        <Carousel
          data={image}
          loop
          width={400}
          height={150}
          autoPlay={true}
          autoplayDelay={4}
          autoplayLoop
          index={1}
          showPagination
          renderItem={renderSwiperItem}
          paginationStyleItem={localStyles.paginationStyleItem}
          style={localStyles.swiperStyle}
        />
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  paginationStyleItem: {
    ...styles.mh5,
  },
  swiperItemContainer: {
    ...styles.mb10,
    ...styles.mr10,
    ...styles.rowSpaceAround,
    position: 'relative',
    width: deviceWidth - moderateScale(40),
    height: getHeight(170),
  },
  swiperStyle: {
    overflow: 'hidden',
    ...styles.mt15,
  },
});

export default memo(HomeBanner);
