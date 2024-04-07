// Library import
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';

// Local import
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {styles} from '../../themes';
import {getHeight, moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import typography from '../../themes/typography';
import CButton from '../../components/common/CButton';

const ForgotPasswordOtp = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [otp, setOtp] = useState('');
  const [counterId, setCounterId] = useState('1');
  const [isTimeOver, setIsTimeOver] = useState(false);

  const onOtpChange = code => setOtp(code);
  const onPressVerify = () => navigation.navigate(StackNav.CreateNewPassword);
  const onPressBack = () => navigation.goBack();
  const onFinishTimer = () => {
    navigation.navigate(StackNav.ForgotPasswordOtp);
  };

  const onPressResend = () => {
    setCounterId(counterId + '1');
    setIsTimeOver(false);
    setOtp('');
    navigation.navigate(StackNav.Login);
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.forgotPassword} onPressBack={onPressBack} />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={localStyles.root}>
          <CText type={'r18'} align={'center'} style={styles.mb20}>
            {strings.codeSendOn}
          </CText>
          <OTPInputView
            pinCount={4}
            code={otp}
            onCodeChanged={onOtpChange}
            autoFocusOnLoad={false}
            codeInputFieldStyle={[
              localStyles.pinInputStyle,
              {
                color: colors.textColor,
                backgroundColor: colors.inputBg,
                borderColor: colors.bColor,
              },
            ]}
            codeInputHighlightStyle={{
              borderColor: colors.textColor,
            }}
            style={localStyles.inputStyle}
            secureTextEntry={true}
          />
          <View style={styles.rowCenter}>
            {isTimeOver ? (
              <TouchableOpacity
                onPress={onPressResend}
                disabled={isTimeOver ? false : true}
                style={styles.p5}>
                <CText type={'m18'} align={'center'}>
                  {strings.resendCode}
                </CText>
              </TouchableOpacity>
            ) : (
              <View style={styles.rowCenter}>
                <CText type={'m18'} align={'center'}>
                  {strings.resendCodeIn}
                </CText>
                <CountDown
                  id={counterId}
                  until={30}
                  onFinish={onFinishTimer}
                  digitStyle={{backgroundColor: colors.backgroundColor}}
                  digitTxtStyle={[
                    localStyles.digitStyle,
                    {color: colors.textBlue},
                  ]}
                  timeToShow={['S']}
                  timeLabels={{m: null, s: null}}
                />
                <CText type={'m18'} align={'center'}>
                  {strings.second}
                </CText>
              </View>
            )}
          </View>
        </View>
        <CButton
          type={'S16'}
          title={strings.verify}
          onPress={onPressVerify}
          containerStyle={[localStyles.btnContainerStyle]}
          // disabled={otp.length === 4 ? false : true}
          // bgColor={otp.length !== 4 && colors.primary4}
        />
      </KeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
};

export default ForgotPasswordOtp;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph30,
    ...styles.justifyCenter,
    ...styles.flex,
  },
  pinInputStyle: {
    height: getHeight(60),
    width: moderateScale(75),
    fontSize: moderateScale(26),
    borderRadius: moderateScale(15),
  },
  btnContainerStyle: {
    ...styles.m20,
  },
  inputStyle: {
    height: getHeight(60),
    ...styles.mv30,
  },
  digitStyle: {
    fontSize: moderateScale(18),
    ...typography.fontWeights.Regular,
  },
});
