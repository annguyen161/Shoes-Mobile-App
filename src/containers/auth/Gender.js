// Library Imports
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import {styles} from '../../themes';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import CButton from '../../components/common/CButton';
import {Female_Svg, Male_Svg} from '../../assets/svgs';

const Gender = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [isSelected, setIsSelected] = useState(false);

  const onPressContinue = () => {
    navigation.navigate(StackNav.Birthday);
  };
  const onPressSkip = () => {
    navigation.navigate(StackNav.Birthday);
  };

  const onPressMale = itm => setIsSelected(itm);

  const onPressFemale = itm => setIsSelected(itm);

  const ListGenderCategory = ({icon, title, onPressItm}) => {
    return (
      <TouchableOpacity
        onPress={onPressItm}
        style={[
          localStyles.genderContainer,
          {
            backgroundColor:
              title === isSelected ? colors.primary : colors.inputBg,
          },
        ]}>
        {icon}
        <CText type={'b22'} style={styles.mv10}>
          {title}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.tellUsYourSelf} />
      <CText type={'m18'} style={[styles.mv10, styles.mh20]}>
        {strings.tellUsYourSelfDesc}
      </CText>
      <View style={localStyles.root}>
        <ListGenderCategory
          icon={<Male_Svg />}
          title={strings.male}
          onPressItm={() => onPressMale(strings.male)}
        />
        <ListGenderCategory
          icon={<Female_Svg />}
          title={strings.female}
          onPressItm={() => onPressFemale(strings.female)}
        />
      </View>
      <View style={localStyles.btnContainer}>
        <CButton
          title={strings.skip}
          type={'b18'}
          color={!!colors.dark ? colors.white : colors.primary}
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

export default Gender;

const localStyles = StyleSheet.create({
  genderContainer: {
    height: moderateScale(180),
    width: moderateScale(180),
    ...styles.center,
    ...styles.selfCenter,
    borderRadius: moderateScale(90),
  },
  root: {
    ...styles.flex,
    ...styles.justifyEvenly,
  },
  btnContainer: {
    ...styles.p20,
    ...styles.rowSpaceAround,
  },
  chipsContainer: {
    ...styles.ph20,
    ...styles.pv10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(25),
    ...styles.mt15,
    ...styles.mh5,
  },
  skipBtnContainer: {
    width: '45%',
  },
});
