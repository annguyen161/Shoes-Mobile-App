// Library Imports
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import strings from '../../i18n/strings';
import {styles} from '../../themes';
import CText from '../../components/common/CText';
import {
  ACCESS_TOKEN,
  getHeight,
  isIOS,
  moderateScale,
} from '../../common/constants';
import CHeader from '../../components/common/CHeader';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {
  Google_Icon,
  Facebook_Icon,
  Apple_Light,
  Apple_Dark,
  Connect_Dark,
} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';
import CInput from '../../components/common/CInput';
import {validateEmail, validatePassword} from '../../utils/validators';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {setAsyncStorageData} from '../../utils/helpers';
import CButton from '../../components/common/CButton';

const Login = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.bColor,
  };
  const FocusedStyle = {
    borderColor: colors.textColor,
  };

  const BlurredIconStyle = colors.grayScale5;
  const FocusedIconStyle = colors.btnColor;

  const socialIcon = [
    {
      icon: <Facebook_Icon />,
      onPress: () => console.log('Facebook'),
    },
    {
      icon: <Google_Icon />,
      onPress: () => console.log('Google'),
    },
    {
      icon: colors.dark === 'dark' ? <Apple_Light /> : <Apple_Dark />,
      onPress: () => console.log('Apple'),
    },
  ];

  const socialIcoAndroid = [
    {
      icon: <Facebook_Icon />,
      onPress: () => console.log('Facebook'),
    },
    {
      icon: <Google_Icon />,
      onPress: () => console.log('Google'),
    },
  ];

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailIcon, setEmailIcon] = React.useState(BlurredIconStyle);
  const [passwordIcon, setPasswordIcon] = React.useState(BlurredIconStyle);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const [emailInputStyle, setEmailInputStyle] = React.useState(BlurredStyle);
  const [passwordInputStyle, setPasswordInputStyle] =
    React.useState(BlurredStyle);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(true);
  const [isCheck, setIsCheck] = React.useState(false);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onFocusIcon = onHighlight => onHighlight(FocusedIconStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);
  const onBlurIcon = onUnHighlight => onUnHighlight(BlurredIconStyle);

  useEffect(() => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      !emailError &&
      !passwordError
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email, password, emailError, passwordError]);

  const onChangedEmail = val => {
    const {msg} = validateEmail(val.trim());
    setEmail(val.trim());
    setEmailError(msg);
  };
  const onChangedPassword = val => {
    const {msg} = validatePassword(val.trim());
    setPassword(val.trim());
    setPasswordError(msg);
  };

  const onPressSocial = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: StackNav.TabBar,
        },
      ],
    });
  };

  const RenderSocialBtn = memo(({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={onPressSocial}
        style={[
          localStyles.socialBtn,
          {
            backgroundColor: colors.inputBg,
            borderColor: colors.bColor,
          },
        ]}>
        {item.icon}
      </TouchableOpacity>
    );
  });
  const iconName = 'mail';
  const EmailIcon = () => {
    return (
      <Ionicons
        name={iconName}
        size={moderateScale(20)}
        color={colors.textBlue}
      />
    );
  };

  const onFocusEmail = () => {
    onFocusInput(setEmailInputStyle);
    onFocusIcon(setEmailIcon);
  };
  const onBlurEmail = () => {
    onBlurInput(setEmailInputStyle);
    onBlurIcon(setEmailIcon);
  };

  const PasswordIcon = () => (
    <Ionicons
      name="lock-closed"
      size={moderateScale(20)}
      color={colors.textBlue}
    />
  );

  const onFocusPassword = () => {
    onFocusInput(setPasswordInputStyle);
    onFocusIcon(setPasswordIcon);
  };
  const onBlurPassword = () => {
    onBlurInput(setPasswordInputStyle);
    onBlurIcon(setPasswordIcon);
  };
  const RightPasswordEyeIcon = () => (
    <TouchableOpacity
      onPress={onPressPasswordEyeIcon}
      style={localStyles.eyeIconContainer}>
      <Ionicons
        name={isPasswordVisible ? 'eye-off' : 'eye'}
        size={moderateScale(20)}
        color={colors.textBlue}
      />
    </TouchableOpacity>
  );

  const onPressSignWithPassword = async () => {
    await setAsyncStorageData(ACCESS_TOKEN, 'access_token');
    navigation.reset({
      index: 0,
      routes: [
        {
          name: StackNav.TabBar,
        },
      ],
    });
  };
  const onPressPasswordEyeIcon = () => setIsPasswordVisible(!isPasswordVisible);
  const onPressSignUp = () => navigation.navigate(StackNav.Register);
  const onPressForgotPassword = () =>
    navigation.navigate(StackNav.ForgotPassword);

  return (
    <CSafeAreaView style={localStyles.root}>
      <CHeader />
      <KeyBoardAvoidWrapper>
        <View style={localStyles.mainContainer}>
          <View style={styles.center}>
            <Connect_Dark width={moderateScale(150)} height={getHeight(150)} />
          </View>
          <CText type={'b32'} align={'center'} style={styles.mv20}>
            {strings.loginYourAccount}
          </CText>

          <CInput
            placeHolder={strings.email}
            keyBoardType={'email-address'}
            _value={email}
            _errorText={emailError}
            autoCapitalize={'none'}
            insideLeftIcon={() => <EmailIcon />}
            toGetTextFieldValue={onChangedEmail}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.inputContainerStyle,
              emailInputStyle,
            ]}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusEmail}
            onBlur={onBlurEmail}
          />

          <CInput
            placeHolder={strings.password}
            keyBoardType={'default'}
            _value={password}
            _errorText={passwordError}
            autoCapitalize={'none'}
            insideLeftIcon={() => <PasswordIcon />}
            toGetTextFieldValue={onChangedPassword}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.inputContainerStyle,
              passwordInputStyle,
            ]}
            _isSecure={isPasswordVisible}
            inputBoxStyle={[localStyles.inputBoxStyle]}
            _onFocus={onFocusPassword}
            onBlur={onBlurPassword}
            rightAccessory={() => <RightPasswordEyeIcon />}
          />

          <TouchableOpacity
            onPress={() => setIsCheck(!isCheck)}
            style={localStyles.checkboxContainer}>
            <Ionicons
              name={isCheck ? 'square-outline' : 'checkbox'}
              size={moderateScale(26)}
              color={colors.textBlue}
            />
            <CText type={'s14'} style={styles.mh10}>
              {strings.rememberMe}
            </CText>
          </TouchableOpacity>

          <CButton
            title={strings.signIn}
            type={'S16'}
            color={isSubmitDisabled && colors.textRevertColor}
            containerStyle={localStyles.signBtnContainer}
            onPress={onPressSignWithPassword}
            bgColor={isSubmitDisabled && colors.bgBtnSignUP}
            disabled={isSubmitDisabled}
          />
          <TouchableOpacity
            onPress={onPressForgotPassword}
            style={localStyles.forgotPasswordContainer}>
            <CText
              type={'s16'}
              align={'center'}
              color={colors.textColor}
              style={styles.mh10}>
              {strings.forgotPassword}
            </CText>
          </TouchableOpacity>
          <View style={localStyles.divider}>
            <View
              style={[
                localStyles.orContainer,
                {backgroundColor: colors.bColor},
              ]}
            />
            <CText type={'s18'} style={styles.mh10} color={colors.textBlue}>
              {strings.orContinueWith}
            </CText>
            <View
              style={[
                localStyles.orContainer,
                {backgroundColor: colors.bColor},
              ]}
            />
          </View>

          <View style={localStyles.socialBtnContainer}>
            {isIOS
              ? socialIcon.map((item, index) => (
                  <RenderSocialBtn item={item} key={index.toString()} />
                ))
              : socialIcoAndroid.map((item, index) => (
                  <RenderSocialBtn item={item} key={index.toString()} />
                ))}
          </View>

          <TouchableOpacity
            onPress={onPressSignUp}
            style={localStyles.signUpContainer}>
            <CText type={'b16'} color={colors.textBlue}>
              {strings.dontHaveAccount}
            </CText>
            <CText type={'b16'} color={colors.textColor}>
              {' '}
              {strings.signUp}
            </CText>
          </TouchableOpacity>
        </View>
      </KeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
};

export default Login;

const localStyles = StyleSheet.create({
  mainContainer: {
    ...styles.ph20,
  },
  divider: {
    ...styles.rowCenter,
    ...styles.mv30,
  },
  orContainer: {
    height: getHeight(1),
    width: '30%',
  },
  signBtnContainer: {
    ...styles.center,
    width: '100%',
    ...styles.mv20,
  },
  signUpContainer: {
    ...styles.rowCenter,
    ...styles.mv10,
  },
  inputContainerStyle: {
    height: getHeight(60),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(1),
    ...styles.ph15,
  },
  inputBoxStyle: {
    ...styles.ph15,
  },
  checkboxContainer: {
    ...styles.rowCenter,
    ...styles.mb20,
  },
  socialBtnContainer: {
    ...styles.rowCenter,
    ...styles.mt5,
  },
  socialBtn: {
    ...styles.center,
    height: getHeight(60),
    width: moderateScale(90),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.mh10,
  },
});
