// Library Imports
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import CText from '../../../components/common/CText';
import {getColors, getHeight, moderateScale} from '../../../common/constants';
import typography from '../../../themes/typography';
import {styles} from '../../../themes';
import KeyBoardAvoidWrapper from '../../../components/common/KeyBoardAvoidWrapper';
import CButton from '../../../components/common/CButton';
import {StackNav} from '../../../navigation/NavigationKeys';
import {
  Apple_Dark,
  Apple_Light,
  Paypal_Icon,
  Google_Icon,
  WalletIcon,
  CardVisa_Icon,
} from '../../../assets/svgs';
import PaymentSelect from '../../../components/cartComponent/PaymentSelect';
import {FlashList} from '@shopify/flash-list';

export default function TopUpEWallet({navigation, route}) {
  const pPrice = route?.params?.pPrice;
  const colors = useSelector(state => state.theme.theme);
  const [amount, setAmount] = useState(pPrice ? pPrice : '');
  const [extraData, setExtraData] = useState(false);
  const color = getColors(colors);
  const [isSelected, setIsSelected] = useState('');
  const isWallet = route.params?.isWallet;

  const paymentData = [
    {
      title: strings.wallet,
      icon: <WalletIcon color={color} />,
    },
    {
      title: strings.paypal,
      icon: <Paypal_Icon />,
    },
    {
      title: strings.googlePay,
      icon: <Google_Icon />,
    },
    {
      title: strings.applePay,
      icon: [colors.dark ? <Apple_Light /> : <Apple_Dark />],
    },
    {
      title: strings.cardVisa_Icon,
      icon: <CardVisa_Icon />,
    },
  ];

  useEffect(() => {
    setExtraData(!extraData);
  }, [amount]);

  useEffect(() => {
    setExtraData(!extraData);
  }, [isSelected]);
  const onPressItem = item => setIsSelected(item.title);

  const renderPaymentItem = ({item, index}) => {
    return (
      <PaymentSelect
        item={item}
        isSelected={isSelected}
        onPressItem={() => onPressItem(item)}
      />
    );
  };
  const onPressConfirmPayment = () =>
    navigation.navigate(StackNav.SetPin, {
      title: strings.enterYourPIN,
      isWallet: isWallet,
    });

  const onChangeText = val => setAmount(val);

  return (
    <CSafeAreaView>
      <CHeader title={pPrice ? strings.makeOffer : strings.topUpEWallet} />
      <KeyBoardAvoidWrapper>
        <CText type={'m16'} align={'center'}>
          {pPrice ? strings.enterOfferAmount : strings.enterTheAmount}
        </CText>
        <View style={styles.m20}>
          <TextInput
            placeholder={'$0'}
            value={amount}
            onChangeText={onChangeText}
            placeholderTextColor={colors.placeHolderColor}
            style={[
              localStyles.inputStyle,
              {
                color: colors.textColor,
                borderColor: colors.textBlue,
              },
            ]}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.flex}>
          <CText align={'center'} type={'m16'} style={styles.pb15}>
            {strings.paymentDesc2}
          </CText>
          <FlashList
            data={paymentData}
            extraData={extraData}
            renderItem={renderPaymentItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.ph20}
            estimatedItemSize={20}
          />
        </View>
      </KeyBoardAvoidWrapper>
      <CButton
        type={'S16'}
        title={pPrice ? strings.sendOffer : strings.continue}
        onPress={onPressConfirmPayment}
        containerStyle={localStyles.buttonContainer}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  inputStyle: {
    height: getHeight(120),
    width: '100%',
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(20),
    textAlign: 'center',
    ...typography.fontSizes.f46,
    ...typography.fontWeights.SemiBold,
  },
  renderItemContainer: {
    width: '33%',
    ...styles.itemsCenter,
  },
  amountContainer: {
    height: getHeight(40),
    width: moderateScale(100),
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(2),
    ...styles.center,
    ...styles.mb10,
  },
  buttonContainer: {
    ...styles.mh20,
    ...styles.mb10,
  },
});
