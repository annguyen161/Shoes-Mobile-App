// Library import
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// Local Imports
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {getColors, getHeight, moderateScale} from '../../../common/constants';
import images from '../../../assets/images';
import {
  validateCardNumber,
  validateCvv,
  validateName,
} from '../../../utils/validators';
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import CInput from '../../../components/common/CInput';
import KeyBoardAvoidWrapper from '../../../components/common/KeyBoardAvoidWrapper';
import CButton from '../../../components/common/CButton';
import {MenuIcon} from '../../../assets/svgs';
import CDivider from '../../../components/common/CDivider';
import typography from '../../../themes/typography';
import CText from '../../../components/common/CText';

export default AddNewCard = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);
  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.bColor,
  };
  const FocusedStyle = {
    borderColor: colors.textColor,
  };
  const BlurredIconStyle = colors.grayScale5;
  const FocusedIconStyle = colors.textColor;

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardNameError, setCardNameError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [expiryDateIcon, setExpiryDateIcon] = useState(BlurredIconStyle);
  const [cardNumberInputStyle, setCardNumberInputStyle] =
    useState(BlurredStyle);
  const [expiryDateInputStyle, setExpiryDateInputStyle] =
    useState(BlurredStyle);
  const [cvvInputStyle, setCvvInputStyle] = useState(BlurredStyle);
  const [cardNameInputStyle, setCardNameInputStyle] = useState(BlurredStyle);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onFocusIcon = onHighlight => onHighlight(FocusedIconStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);
  const onBlurIcon = onUnHighlight => onUnHighlight(BlurredIconStyle);

  useEffect(() => {
    if (
      !!cardName &&
      !!cardNumber &&
      !!expiryDate &&
      !!cvv &&
      !cardNameError &&
      !cardNumberError &&
      !expiryDateError &&
      !cvvError
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    cardName,
    cardNumber,
    expiryDate,
    cvv,
    cardNameError,
    cardNumberError,
    expiryDateError,
    cvvError,
  ]);

  const onChangeCardName = text => {
    const {msg} = validateName(text);
    setCardName(text);
    setCardNameError(msg);
  };

  const onFocusCardName = () => onFocusInput(setCardNameInputStyle);
  const onBlurCardName = () => onBlurInput(setCardNameInputStyle);

  const onChangeCardNumber = text => {
    const {msg} = validateCardNumber(text);
    const cleanedText = text.replace(/[^0-9]/g, '');
    setCardNumber(cleanedText);
    setCardNumberError(msg);
  };

  const formatCardNumber = input => {
    const cleanedInput = input.replace(/\s/g, ''); // Remove spaces again
    const maskedCardNumber = cleanedInput
      .slice(-4)
      .padStart(cleanedInput.length, '●');
    const formatted = maskedCardNumber.match(/.{1,4}/g)?.join(' ');
    return formatted;
  };

  const FormattedCardNumber = formatCardNumber(cardNumber);

  const onFocusCardNumber = () => onFocusInput(setCardNumberInputStyle);
  const onBlurCardNumber = () => onBlurInput(setCardNumberInputStyle);

  const onChangeExpiryDate = text => {
    setExpiryDate(text);
    if (text.length === 0) {
      setExpiryDateError('Expiry Date is required');
    } else {
      setExpiryDateError('');
    }
  };

  const onFocusExpiryDate = () => {
    onFocusInput(setExpiryDateInputStyle);
    onFocusIcon(setExpiryDateIcon);
  };

  const onBlurExpiryDate = () => {
    onBlurInput(setExpiryDateInputStyle);
    onBlurIcon(setExpiryDateIcon);
  };

  const onChangeCvv = text => {
    const {msg} = validateCvv(text);
    setCvv(text);
    setCvvError(msg);
  };

  const onFocusCvv = () => onFocusInput(setCvvInputStyle);
  const onBlurCvv = () => onBlurInput(setCvvInputStyle);

  const onPressCalender = () => setDatePickerVisible(true);

  const handleDateConfirm = date => {
    var expiryDate = date.toISOString().split('T')[0];
    const month = expiryDate.split('-')[1];
    const year = expiryDate.split('-')[0];
    setExpiryDate(month + '/' + year);
    setDatePickerVisible(false);
  };

  const hideDatePicker = () => setDatePickerVisible(false);

  const onPressAdd = () => navigation.goBack();

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10}>
        <MenuIcon color={color} />
      </TouchableOpacity>
    );
  };

  const RightCalenderIcon = () => {
    return (
      <TouchableOpacity onPress={onPressCalender} style={styles.ph10}>
        <Ionicons
          name="calendar"
          size={moderateScale(26)}
          color={expiryDateIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.addNewCard} rightIcon={<RightIcon />} />
      <KeyBoardAvoidWrapper contentContainerStyle={[styles.ph20]}>
        <ImageBackground
          source={images.bgMasterCard}
          resizeMode="cover"
          style={localStyles.creditCardImage}>
          <View
            style={[localStyles.MasterCard, styles.columnCenter, styles.flex]}>
            <View style={localStyles.InfoCard}>
              <View style={[styles.mh10, styles.flex]}>
                <CText
                  numberOfLines={1}
                  type={'b22'}
                  style={styles.mb10}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {cardName === '' ? strings.nameOnboarding : cardName}
                </CText>
                <CText
                  numberOfLines={1}
                  style={(styles.mt5, typography.fontSizes.f10)}
                  // type={'s12'}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {cardNumber === ''
                    ? strings.cardVisa_Icon
                    : FormattedCardNumber}
                </CText>
              </View>
              <Image source={images.amazonLogo} style={localStyles.CardImage} />
            </View>
            <View style={localStyles.InfoCard}>
              <View style={[styles.mh10, styles.flex, localStyles.CardDate]}>
                <CText
                  style={styles.mb10}
                  numberOfLines={1}
                  type={'b16'}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {strings.expiryDate}
                </CText>
                <CText
                  numberOfLines={1}
                  style={(styles.mt5, styles.mb30, typography.fontWeights.Bold)}
                  type={'b14'}
                  color={
                    colors.dark ? colors.textColor : colors.textRevertColor
                  }>
                  {expiryDate === '' ? '••••/••••' : expiryDate}
                </CText>
              </View>
              <Image source={images.logoCard} style={localStyles.topUp} />
            </View>
          </View>
        </ImageBackground>
        <CDivider style={styles.mv10} />
        <CInput
          label={strings.cardName}
          placeholder={strings.cardName}
          keyboardType="default"
          maxLength={16}
          _value={cardName}
          _errorText={cardNameError}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangeCardName}
          inputContainerStyle={[
            {backgroundColor: colors.inputBg},
            localStyles.inputContainerStyle,
            cardNameInputStyle,
          ]}
          inputBoxStyle={[localStyles.inputBoxStyle]}
          _onFocus={onFocusCardName}
          onBlur={onBlurCardName}
        />
        <CInput
          label={strings.cardNumber}
          placeholder={strings.cardNumber}
          keyboardType="number-pad"
          maxLength={16}
          _value={cardNumber}
          _errorText={cardNumberError}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangeCardNumber}
          inputContainerStyle={[
            {backgroundColor: colors.inputBg},
            localStyles.inputContainerStyle,
            cardNumberInputStyle,
          ]}
          inputBoxStyle={[localStyles.inputBoxStyle]}
          _onFocus={onFocusCardNumber}
          onBlur={onBlurCardNumber}
        />
        <View style={[styles.flexRow, styles.justifyBetween, styles.pb10]}>
          <CInput
            label={strings.expiryDate}
            placeholder={strings.expiryDate}
            keyboardType="number-pad"
            maxLength={10}
            _value={expiryDate}
            _errorText={expiryDateError}
            autoCapitalize={'none'}
            toGetTextFieldValue={onChangeExpiryDate}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.dateContainer,
              expiryDateInputStyle,
            ]}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusExpiryDate}
            onBlur={onBlurExpiryDate}
            _editable={false}
            rightAccessory={() => <RightCalenderIcon />}
          />
          <DateTimePickerModal
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            date={new Date()}
            minimumDate={new Date()}
          />
          <CInput
            label={strings.cvv}
            placeholder={strings.cvv}
            keyboardType="number-pad"
            maxLength={3}
            _value={cvv}
            _errorText={cvvError}
            autoCapitalize={'none'}
            toGetTextFieldValue={onChangeCvv}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.dateContainer,
              cvvInputStyle,
            ]}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusCvv}
            onBlur={onBlurCvv}
          />
        </View>
      </KeyBoardAvoidWrapper>
      <CButton
        title={strings.add}
        type={'S16'}
        containerStyle={[styles.mv10, styles.mh20]}
        onPress={onPressAdd}
      />
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  creditCardImage: {
    width: moderateScale(430),
    height: getHeight(270),
    resizeMode: 'cover',
    ...styles.selfCenter,
  },
  MasterCard: {
    height: moderateScale(220),
    position: 'relative',
  },
  CardImage: {
    width: moderateScale(55),
    height: moderateScale(55),
    resizeMode: 'contain',
    ...styles.mr15,
    ...styles.selfCenter,
  },
  InfoCard: {
    ...styles.mh10,
    ...styles.flex,
    ...styles.rowSpaceBetween,
    width: moderateScale(305),
  },
  topUp: {
    position: 'absolute',
    flexDirection: 'row-reverse',
    right: 15,
    resizeMode: 'contain',
    width: moderateScale(40),
    height: moderateScale(40),
  },
  CardDate: {
    position: 'absolute',
    left: 0,
    bottom: 35,
  },
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
  },
  inputBoxStyle: {
    ...styles.ph15,
  },
  dateContainer: {
    width: moderateScale(150),
    height: getHeight(50),
    borderRadius: moderateScale(15),
  },
});
