// Library import
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom import
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';

const ProfilePicture = props => {
  const {SheetRef, onPressCamera, onPressGallery} = props;
  const colors = useSelector(state => state.theme.theme);

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        ...styles.actionSheetIndicator,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <View style={localStyles.bottomContainer}>
        <CText type={'M24'}>{strings.uploadProfilePicture}</CText>
        <TouchableOpacity
          style={[
            localStyles.contextContainer,
            {borderColor: colors.dark ? colors.grayScale8 : colors.grayScale3},
          ]}
          onPress={onPressCamera}>
          <Ionicons
            name="camera"
            size={moderateScale(26)}
            color={colors.textColor}
            style={styles.mr5}
          />
          <CText type={'s18'} style={styles.ml10}>
            {strings.takeAPicture}
          </CText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            localStyles.contextContainer,
            {borderColor: colors.dark ? colors.grayScale8 : colors.grayScale3},
          ]}
          onPress={onPressGallery}>
          <Ionicons
            name="images"
            size={moderateScale(26)}
            color={colors.textColor}
            style={styles.mr5}
          />
          <CText type={'s18'} style={styles.ml10}>
            {strings.chooseFromGallery}
          </CText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
  },
  contextContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt20,
    ...styles.p15,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(15),
  },
  bottomContainer: {
    width: '100%',
    ...styles.selfCenter,
    paddingHorizontal: moderateScale(40),
    ...styles.mv30,
  },
});

export default ProfilePicture;
