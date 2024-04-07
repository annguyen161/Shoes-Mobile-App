// Library import
import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';

// Local import
import {getHeight, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';
import CDivider from '../common/CDivider';
import MostPopularCategory from '../homeComponent/MostPopularCategory';
import {ConditionData, ratingData, sortAndFilterData} from '../../api/constant';
import typography from '../../themes/typography';

const SortAndFilter = props => {
  const {SheetRef, onPressCancel, onPressLogOut} = props;
  const colors = useSelector(state => state.theme.theme);
  const [selectedTag, setSelectedTag] = useState('Most Popular');
  const [numberMin, setNumberMin] = useState('');
  const [numberMax, setNumberMax] = useState('');

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
        <CText type={'B22'} style={styles.mt5} align={'center'}>
          {strings.sortAndFilter}
        </CText>
        <CDivider style={styles.mv20} />
        <CText type={'b18'} style={localStyles.textStyles}>
          {strings.brands}
        </CText>
        <View style={localStyles.categoryContainer}>
          <MostPopularCategory
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </View>
        <CText type={'b18'} style={localStyles.textStyles}>
          {strings.condition}
        </CText>
        <View style={localStyles.categoryContainer}>
          <MostPopularCategory
            chipsData={ConditionData}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </View>
        <View style={styles.mb30}>
          <CText type={'b18'} style={styles.mb10}>
            {strings.priceRange}
          </CText>
          <View style={localStyles.inputPrice}>
            <TextInput
              placeholder={'Min'}
              value={numberMin}
              onChangeText={setNumberMin}
              placeholderTextColor={colors.textBlueBold}
              style={[
                localStyles.inputStyle,
                {borderColor: colors.textBlueBold},
              ]}
              keyboardType={'numeric'}
            />
            <CText type={'b20'}>-</CText>
            <TextInput
              placeholder={'Max'}
              value={numberMax}
              onChangeText={setNumberMax}
              placeholderTextColor={colors.textBlueBold}
              style={[
                localStyles.inputStyle,
                {borderColor: colors.textBlueBold},
              ]}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <CText type={'b18'} style={localStyles.textStyles}>
          {strings.sortBy}
        </CText>
        <View style={localStyles.categoryContainer}>
          <MostPopularCategory
            chipsData={sortAndFilterData}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </View>
        <CText type={'b18'} style={localStyles.textStyles}>
          {strings.rating}
        </CText>
        <View style={localStyles.categoryContainer}>
          <MostPopularCategory
            isStar={true}
            chipsData={ratingData}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </View>
        <CDivider style={styles.mb20} />
        <View style={localStyles.btnContainer}>
          <CButton
            title={strings.reset}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            color={colors.dark ? colors.white : colors.textBlack}
            bgColor={colors.dark3}
            onPress={onPressCancel}
          />
          <CButton
            title={strings.apply}
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
  textStyles: {
    ...styles.mb15,
  },
  categoryContainer: {
    ...styles.mb15,
  },
  btnContainer: {
    ...styles.pb30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
  bottomContainer: {
    ...styles.pv10,
  },
  sliderContainer: {
    height: moderateScale(6),
    borderRadius: moderateScale(6),
  },
  sliderLength: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(6),
    top: moderateScale(-5),
  },
  markerContainer: {
    height: getHeight(55),
    ...styles.center,
    ...styles.justifyStart,
  },
  inputPrice: {
    ...styles.rowSpaceAround,
  },
  inputStyle: {
    width: 150,
    height: getHeight(60),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    textAlign: 'center',
    ...styles.ph10,
    ...typography.fontSizes.f16,
    ...typography.fontWeights.SemiBold,
  },
});

export default SortAndFilter;
