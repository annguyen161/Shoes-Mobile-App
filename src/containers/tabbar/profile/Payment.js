// Library import
import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Local Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {getColors, moderateScale} from '../../../common/constants';
import {styles} from '../../../themes';
import CText from '../../../components/common/CText';
import {
  Apple_Dark,
  Apple_Light,
  Paypal_Icon,
  Google_Icon,
  WalletIcon,
  CardVisa_Icon,
} from '../../../assets/svgs';
import CButton from '../../../components/common/CButton';
import {StackNav} from '../../../navigation/NavigationKeys';
import PaymentSelect from '../../../components/cartComponent/PaymentSelect';
import {FlashList} from '@shopify/flash-list';

export default Payment = ({navigation, route}) => {
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);
  const title = route.params?.title;
  const desc = route.params?.desc;
  const type = route.name;
  const typePayment = route.params?.typePayment;
  const isWallet = route.params?.isWallet;
  const [isSelected, setIsSelected] = useState('');
  const [extraData, setExtraData] = useState(false);
  useEffect(() => {
    setExtraData(!extraData);
  }, [isSelected]);

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

  const onPressAddNewCard = () => navigation.navigate(StackNav.AddNewCard);

  const onPressConfirmPayment = () =>
    navigation.navigate(StackNav.SetPin, {
      title: strings.enterYourPIN,
      isWallet: isWallet,
    });

  const onPressItem = item => setIsSelected(item.title);

  const renderPaymentItem = ({item, index}) => {
    return (
      <PaymentSelect
        item={item}
        isSelected={isSelected}
        onPressItem={() => onPressItem(item)}
        type={typePayment || type}
      />
    );
  };

  const RenderFlashListHeader = () => {
    return (
      <View>
        {!!desc && (
          <CText type={'r16'} style={styles.mv10}>
            {desc}
          </CText>
        )}
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={!!title ? title : strings.payment} />
      <View style={styles.flex}>
        <FlashList
          data={!!isWallet ? paymentData : paymentData.slice(1)}
          extraData={extraData}
          renderItem={renderPaymentItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.ph20}
          ListHeaderComponent={RenderFlashListHeader}
          // ListFooterComponent={RenderFlashListFooter}
          estimatedItemSize={20}
        />
      </View>
      <CButton
        title={!!title ? strings.continue : strings.addNewCard}
        type={'S16'}
        containerStyle={[styles.mh20, styles.mv10]}
        onPress={!!title ? onPressConfirmPayment : onPressAddNewCard}
      />
    </CSafeAreaView>
  );
};
