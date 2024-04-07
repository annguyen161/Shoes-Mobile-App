import {Image, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import {styles} from '../themes';
import images from '../assets/images';
import CText from './common/CText';
import {moderateScale} from '../common/constants';

const RenderNullComponent = props => {
  const {title1, title2} = props;

  const colors = useSelector(state => state.theme.theme);

  return (
    <View style={localStyles.root}>
      <Image
        source={colors.dark ? images.onGoingDark : images.onGoingLight}
        style={localStyles.imageStyle}
      />
      {!!title1 && (
        <CText type={'b18'} align={'center'} style={styles.mb10}>
          {title1}
        </CText>
      )}
      {!!title2 && (
        <CText type={'r16'} align={'center'}>
          {title2}
        </CText>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.flexCenter,
    ...styles.ph20,
  },
  imageStyle: {
    height: moderateScale(200),
    width: moderateScale(200),
    ...styles.selfCenter,
    ...styles.mb20,
  },
});

export default memo(RenderNullComponent);
