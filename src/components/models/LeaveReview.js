// Library import
import React, {useState} from 'react';
import {Keyboard, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Local import
import {getHeight, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import ProductOrderComponent from '../ProductOrderComponent';
import Rating from '../Rating';
import CInput from '../common/CInput';
import CButton from '../common/CButton';
import CDivider from '../common/CDivider';

export default function LeaveReview(props) {
  const {SheetRef, item} = props;
  const colors = useSelector(state => state.theme.theme);

  const [review, setReview] = useState('');
  const [reviewStyle, setReviewStyle] = useState(BlurredStyle);
  const [reviewIconStyle, setReviewIconStyle] = useState(BlurredIconStyle);

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.bColor,
  };
  const FocusedStyle = {
    borderColor: colors.textColor,
  };
  const BlurredIconStyle = colors.dark ? colors.grayScale7 : colors.grayScale3;
  const FocusedIconStyle = colors.textColor;

  const onFocusInput = () => {
    setReviewStyle(FocusedStyle);
    setReviewIconStyle(FocusedIconStyle);
  };
  const onBlurInput = () => {
    setReviewStyle(BlurredStyle);
    setReviewIconStyle(BlurredIconStyle);
  };

  const onChangedReview = text => setReview(text);

  const onPressCancel = () => SheetRef?.current?.hide();

  const onPressSubmit = () => SheetRef?.current?.hide();

  const RightIcon = () => {
    return (
      <EvilIcons
        name={'image'}
        color={reviewIconStyle}
        size={moderateScale(30)}
      />
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        width: moderateScale(60),
        ...styles.mv10,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <CText type={'B22'} style={localStyles.headerText} align={'center'}>
          {strings.leaveReview}
        </CText>
        <CDivider style={styles.mv5} />
        <View style={styles.mb15}>
          <ProductOrderComponent item={item} isButton={false} />
        </View>
        <CDivider style={styles.mv5} />
        <View style={localStyles.ratingContainer}>
          <CText type={'B22'} style={styles.mb10} align={'center'}>
            {strings.howYourOrder}
          </CText>
          <CText type={'r16'} align={'center'}>
            {strings.plsGiveRating}
          </CText>
          <Rating
            activeColor={colors.yellowColor && colors.yellowColor}
            inactiveColor={colors.yellowColor && colors.yellowColor}
          />
          <CInput
            placeHolder={strings.writeReview}
            keyBoardType={'default'}
            _value={review}
            autoCapitalize={'none'}
            toGetTextFieldValue={onChangedReview}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.inputContainerStyle,
              reviewStyle,
            ]}
            _onFocus={onFocusInput}
            onBlur={onBlurInput}
            rightAccessory={() => <RightIcon />}
          />
        </View>
        <CDivider style={styles.mv5} />
        <View style={localStyles.btnContainer}>
          <CButton
            title={strings.cancel}
            type={'S16'}
            color={colors.dark ? colors.white : colors.textBlack}
            containerStyle={localStyles.skipBtnContainer}
            bgColor={colors.dark3}
            onPress={onPressCancel}
          />
          <CButton
            title={strings.submit}
            type={'S16'}
            containerStyle={localStyles.skipBtnContainer}
            onPress={onPressSubmit}
          />
        </View>
      </TouchableOpacity>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
    ...styles.pb30,
  },
  textStyle: {
    ...styles.flexRow,
    ...styles.alignCenter,
  },
  headerText: {
    ...styles.mt5,
    ...styles.mb10,
  },
  ratingContainer: {
    ...styles.mv15,
  },
  inputContainerStyle: {
    height: getHeight(55),
    borderRadius: moderateScale(18),
    borderWidth: moderateScale(1),
    ...styles.ph15,
    marginVertical: moderateScale(-10),
  },
  btnContainer: {
    ...styles.pt10,
    ...styles.pb30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
});
