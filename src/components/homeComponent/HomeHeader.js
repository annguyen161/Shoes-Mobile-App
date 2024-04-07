import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// custom imports
import {styles} from '../../themes';
import {HeartIcon, NotificationIcon} from '../../assets/svgs';
import CText from '../common/CText';
import {getColors, moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import {TabRoute} from '../../navigation/NavigationRoutes';

function HomeHeader() {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);

  const onPressNotification = () => navigation.navigate(StackNav.Notification);
  const onPressLike = () => navigation.navigate(StackNav.MyWishlist);
  const onPressImage = () => navigation.navigate(TabRoute.ProfileTab);

  return (
    <View style={localStyles.headerContainer}>
      <TouchableOpacity onPress={onPressImage}>
        <Image
          source={{
            uri: 'https://maycamtay.net/wp-content/uploads/2023/05/c6e56503cfdd87da299f72dc416023d4.jpg',
          }}
          style={localStyles.userImageStyle}
        />
      </TouchableOpacity>
      <View style={localStyles.textContainer}>
        <CText type="m16" numberOfLines={1} color={colors.primaryTextColor}>
          {'Good Morning 👋'}
        </CText>
        <CText type="B20" numberOfLines={1} color={colors.primaryTextColor}>
          {'Admin'}
        </CText>
      </View>
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressNotification} style={styles.mh10}>
          <NotificationIcon color={color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLike}>
          <HeartIcon
            color={color}
            height={moderateScale(23)}
            width={moderateScale(23)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(HomeHeader);

const localStyles = StyleSheet.create({
  headerContainer: {
    ...styles.rowSpaceBetween,
    ...styles.flex,
    ...styles.mt50,
  },
  userImageStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  textContainer: {
    ...styles.mh10,
    ...styles.flex,
  },
});
