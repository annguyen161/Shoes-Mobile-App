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
import {renderChips} from '../../api/constant';
import CButton from '../../components/common/CButton';

const SelectInterest = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [selectedChips, setSelectedChips] = useState([]);

  const RenderChips = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChips(item)}
        style={[
          localStyles.chipsContainer,
          {borderColor: colors.primary},
          selectedChips.includes(item) && {backgroundColor: colors.primary},
        ]}>
        <CText
          type={'b18'}
          color={selectedChips.includes(item) ? colors.white : colors.primary}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  const onPressChips = value => {
    if (selectedChips.includes(value)) {
      setSelectedChips(selectedChips.filter(item => item !== value));
    } else {
      setSelectedChips([...selectedChips, value]);
    }
  };

  const onPressContinue = () => {
    navigation.navigate(StackNav.Gender);
  };
  const onPressSkip = () => {
    navigation.navigate(StackNav.Gender, {
      title: strings.fillYourProfile,
    });
  };

  const InterestChips = () => {
    return renderChips.map((item, index) => {
      return <RenderChips item={item} key={index} />;
    });
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.selectInterest} />
      <View style={localStyles.root}>
        <CText type={'m18'} style={styles.mv10}>
          {strings.selectInterestDescription}
        </CText>
        <View style={localStyles.chipMainContainer}>
          <InterestChips />
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

export default SelectInterest;

const localStyles = StyleSheet.create({
  chipMainContainer: {
    ...styles.wrap,
    ...styles.flexRow,
  },
  root: {
    ...styles.ph20,
    ...styles.flex,
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
