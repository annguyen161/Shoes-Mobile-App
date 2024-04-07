import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

//custom components
import {HeartIcon, MenuIcon, HeartFillIcon} from '../../assets/svgs';
import {useSelector} from 'react-redux';
import images from '../../assets/images';
import {getColors, moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import {styles} from '../../themes';

export default function ReviewUserComponent(props) {
  const {item} = props;
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);
  const [isLiked, setIsLiked] = useState(false);

  const isFill = <HeartFillIcon color={color} />;

  const isUnFill = <HeartIcon color={color} />;

  const onPressLike = () => setIsLiked(!isLiked);

  return (
    <View style={styles.mb25}>
      <View style={localStyles.userContainer}>
        <View style={[styles.flexRow, styles.flex, styles.itemsCenter]}>
          <Image
            source={{uri: item?.image}}
            style={localStyles.userImageStyle}
          />
          <CText numberOfLines={1} style={styles.flex} type={'S16'}>
            {item?.name}
          </CText>
        </View>
        <View style={[styles.flexRow, styles.itemsCenter]}>
          <TouchableOpacity
            style={[
              localStyles.chipsContainer,
              {borderColor: colors.dark ? colors.white : colors.textBlueBold},
            ]}>
            <Image
              source={images.starFill}
              style={[localStyles.starStyle, {tintColor: colors.textColor}]}
            />
            <CText type={'S14'} color={colors.textColor}>
              {item?.rating}
            </CText>
          </TouchableOpacity>
          <MenuIcon color={color} />
        </View>
      </View>
      <CText type={'r14'} style={styles.mt10}>
        {item?.review}
      </CText>
      <View style={localStyles.bottomContainer}>
        <TouchableOpacity onPress={onPressLike}>
          {isLiked ? isFill : isUnFill}
        </TouchableOpacity>
        <CText type={'r12'} style={styles.mh5}>
          {item?.like}
        </CText>
        <CText type={'r12'} style={styles.ml15}>
          {item?.time}
        </CText>
      </View>
    </View>
  );
}
const localStyles = StyleSheet.create({
  userImageStyle: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    ...styles.mr10,
  },
  userContainer: {
    ...styles.rowSpaceBetween,
  },
  chipsContainer: {
    ...styles.ph15,
    ...styles.pv5,
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    ...styles.mh10,
    ...styles.rowCenter,
  },
  starStyle: {
    width: moderateScale(12),
    height: moderateScale(12),
    resizeMode: 'contain',
    ...styles.mr10,
  },
  bottomContainer: {
    ...styles.mt5,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
});
