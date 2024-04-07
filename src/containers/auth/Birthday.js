// Library Imports
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import {styles} from '../../themes';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {getHeight, moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import CButton from '../../components/common/CButton';
// import {Birthday_Svg} from '../../assets/svgs';

const Birthday = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [birthDate, setBirthDate] = useState('');

  const handleDateConfirm = date => {
    var birthDate = date.toISOString().split('T')[0];
    const day = birthDate.split('-')[2];
    const month = birthDate.split('-')[1];
    const year = birthDate.split('-')[0];
    setBirthDate(day + '/' + month + '/' + year);
    setDatePickerVisible(false);
  };

  const hideDatePicker = () => setDatePickerVisible(false);

  const onPressContinue = () => {
    navigation.navigate(StackNav.SetUpProfile, {
      title: strings.fillYourProfile,
    });
  };
  const onPressSkip = () => {
    navigation.navigate(StackNav.SetUpProfile, {
      title: strings.fillYourProfile,
    });
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.whenIsYourBirthday} />
      <View style={localStyles.root}>
        <CText type={'m18'} style={styles.mv10}>
          {strings.whenIsYourBirthdayDesc}
        </CText>
        <View style={styles.mt50}>
          {/* <Birthday_Svg style={styles.selfCenter} /> */}
          <DateTimePicker
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            date={new Date()}
            minimumDate={new Date()}
          />
          <TouchableOpacity
            onPress={() => setDatePickerVisible(true)}
            style={[
              localStyles.dobContainer,
              {backgroundColor: colors.inputBg},
            ]}>
            <CText
              type={'b18'}
              color={!birthDate && colors.placeHolderColor}
              style={styles.mv10}>
              {birthDate ? birthDate : strings.selectDate}
            </CText>
            <Ionicons
              name={'ios-calendar'}
              size={moderateScale(30)}
              color={colors.grayScale5}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={localStyles.btnContainer}>
        <CButton
          title={strings.skip}
          type={'b18'}
          color={!!colors.dark ? colors.white : colors.textBlack}
          containerStyle={[localStyles.skipBtnContainer]}
          bgColor={colors.dark3}
          onPress={onPressSkip}
        />
        <CButton
          title={strings.continue}
          type={'b18'}
          color={colors.white}
          containerStyle={[localStyles.skipBtnContainer]}
          onPress={onPressContinue}
        />
      </View>
    </CSafeAreaView>
  );
};

export default Birthday;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.flex,
  },
  btnContainer: {
    ...styles.p20,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
  dobContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt40,
    ...styles.ph20,
    height: getHeight(60),
    borderRadius: moderateScale(20),
  },
});
