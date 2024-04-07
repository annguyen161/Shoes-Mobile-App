// Library import
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';

// Local import
import {styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';
import CDivider from '../common/CDivider';

const LogOut = props => {
  const {SheetRef, onPressCancel, onPressLogOut} = props;
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
        <CText
          type={'B22'}
          style={styles.mt5}
          color={colors.dark ? colors.white : colors.alertColor}
          align={'center'}>
          {strings.logout}
        </CText>
        <CDivider style={styles.mv20} />
        <CText type={'b20'} align={'center'}>
          {strings.logOutDescription}
        </CText>
        <View style={localStyles.btnContainer}>
          <CButton
            title={strings.cancel}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            color={colors.dark ? colors.white : colors.textBlack}
            bgColor={colors.dark3}
            onPress={onPressCancel}
          />
          <CButton
            title={strings.yesLogOut}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            onPress={onPressLogOut}
          />
        </View>
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
  },
  btnContainer: {
    ...styles.pv30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
  bottomContainer: {
    ...styles.pv10,
  },
});

export default LogOut;
