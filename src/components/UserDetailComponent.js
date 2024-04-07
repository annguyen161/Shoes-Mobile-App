// Library import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

// Local import
import React from 'react';
import CText from './common/CText';
import CButton from './common/CButton';
import {getHeight, moderateScale} from '../common/constants';
import {styles} from '../themes';
import strings from '../i18n/strings';

export default function UserDetailComponent({
  userName,
  userImage,
  userDescription,
}) {
  const colors = useSelector(state => state.theme.theme);

  return (
    <View style={localStyles.rootContainer}>
      <TouchableOpacity style={localStyles.userItem}>
        <Image
          source={{
            uri: userImage,
          }}
          style={localStyles.imageStyle}
        />
        <View style={localStyles.userDescription}>
          <CText type="b18" numberOfLines={1}>
            {userName}
          </CText>
          {!!userDescription && (
            <CText
              type="m14"
              style={styles.mt5}
              color={colors.dark ? colors.grayScale3 : colors.grayScale7}
              numberOfLines={1}>
              {userDescription}
            </CText>
          )}
        </View>
      </TouchableOpacity>
      <CButton
        title={strings.invite}
        color={colors.textRevertColor}
        type="b14"
        containerStyle={[
          localStyles.buttonContainer,
          {borderColor: colors.dark3},
        ]}
        bgColor={colors.textBlue}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
    ...styles.flex,
  },
  userItem: {
    flex: 1,
    ...styles.rowCenter,
  },
  imageStyle: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    resizeMode: 'cover',
  },
  userDescription: {
    ...styles.mh10,
    ...styles.flex,
  },
  buttonContainer: {
    ...styles.ph15,
    height: getHeight(35),
    borderRadius: moderateScale(17),
    borderWidth: moderateScale(1),
  },
});
