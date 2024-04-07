// Library import
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// Local import
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {styles} from '../../themes';
import {getHeight, moderateScale} from '../../common/constants';
import {StackNav, TabNav} from '../../navigation/NavigationKeys';
import CButton from '../../components/common/CButton';
import typography from '../../themes/typography';
import SuccessModal from '../../components/models/SuccessModal';
import {
  OrderModalDark,
  OrderModalLight,
  WalletModalDark,
  WalletModalLight,
} from '../../assets/svgs';
import {walletData} from '../../api/constant';

const SetPin = ({navigation, route}) => {
  const colors = useSelector(state => state.theme.theme);
  const title = route.params?.title;
  const isWallet = route.params?.isWallet;
  const [pin, setPin] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const isPaymentModal = colors.dark ? (
    <OrderModalDark style={styles.selfCenter} />
  ) : (
    <OrderModalLight style={styles.selfCenter} />
  );

  const isOrderModal = colors.dark ? (
    <WalletModalDark style={styles.selfCenter} />
  ) : (
    <WalletModalLight style={styles.selfCenter} />
  );

  const onPressModalClose = () => setModalVisible(false);

  const onPinChange = code => setPin(code);
  const onPressPinContinue = () => {
    if (!!title) {
      setModalVisible(true);
    } else {
      navigation.navigate(StackNav.SetSecure);
    }
  };

  const onPressERiceipt = () => {
    setModalVisible(false);
    navigation.navigate(StackNav.EReceipt, {item: walletData[3]});
  };

  const onPressTransaction = () => {
    setModalVisible(false);
    navigation.navigate(StackNav.TransactionHistory);
  };

  const onPressViewOrder = () => {
    setModalVisible(false);
    navigation.navigate(TabNav.OrderTab);
  };

  return (
    <CSafeAreaView>
      <CHeader title={!!title ? title : strings.createNewPin} />
      <KeyBoardAvoidWrapper contentContainerStyle={styles.flexGrow1}>
        <View style={localStyles.root}>
          <CText type={'r18'} align={'center'}>
            {!!title ? strings.enterPINPayment : strings.pinDesc}
          </CText>
          <OTPInputView
            pinCount={4}
            code={pin}
            onCodeChanged={onPinChange}
            autoFocusOnLoad={false}
            codeInputFieldStyle={[
              localStyles.pinInputStyle,
              {
                color: colors.textColor,
                backgroundColor: colors.inputBg,
                borderColor: colors.borderColor,
              },
            ]}
            codeInputHighlightStyle={{
              borderColor: colors.textColor,
            }}
            style={localStyles.inputStyle}
            secureTextEntry={true}
          />
        </View>
        <CButton
          type={'S16'}
          title={strings.continue}
          onPress={onPressPinContinue}
          containerStyle={localStyles.btnContainerStyle}
        />
        <SuccessModal
          visible={modalVisible}
          onPressModalClose={onPressModalClose}
          itemImage={isWallet ? isPaymentModal : isOrderModal}
          headerTitle={
            isWallet ? strings.orderSuccessful : strings.topUpSuccessful
          }
          subTitle={isWallet ? strings.orderDesc : strings.topUpDesc}
          btnText1={isWallet ? strings.viewOrder : strings.viewTransaction}
          btnText2={isWallet ? strings.viewEReceipt : strings.cancel}
          onPressBtn1={isWallet ? onPressViewOrder : onPressTransaction}
          onPressBtn2={isWallet ? onPressERiceipt : onPressModalClose}
        />
      </KeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
};

export default SetPin;

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph30,
    ...styles.justifyCenter,
    ...styles.flex,
  },
  pinInputStyle: {
    height: getHeight(60),
    width: moderateScale(75),
    borderRadius: moderateScale(15),
    ...typography.fontSizes.f26,
    ...typography.fontWeights.SemiBold,
  },
  btnContainerStyle: {
    ...styles.mh20,
    ...styles.mb30,
  },
  inputStyle: {
    height: getHeight(60),
    ...styles.mv30,
  },
});
