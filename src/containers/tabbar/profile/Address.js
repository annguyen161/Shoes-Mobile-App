// Library import
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

// Local import
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {AddressData} from '../../../api/constant';
import AddressComponent from '../../../components/cartComponent/AddressComponent';
import CButton from '../../../components/common/CButton';
import {styles} from '../../../themes';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function Address({route, navigation}) {
  const itm = route.params?.item;
  const colors = useSelector(state => state.theme.theme);
  const [selectedType, setSelectedType] = useState('');
  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedType]);

  const onPressAddAddress = () => navigation.navigate(StackNav.AddAddress);

  const onPressAdd = () => {
    if (!!itm) {
      navigation.goBack();
    } else {
      navigation.navigate(StackNav.AddAddress);
    }
  };
  const onPressAddress = item => {
    if (!!itm) {
      setSelectedType(item?.title);
    } else {
      navigation.navigate(StackNav.AddAddress);
    }
  };

  const renderAddressList = ({item}) => {
    return (
      <AddressComponent
        item={item}
        onPressAddress={() => onPressAddress(item)}
        selectedType={selectedType}
        isSelect={!!itm}
      />
    );
  };

  const FlashListFooter = () => {
    return (
      <View style={styles.ph20}>
        {!!itm && (
          <CButton
            title={strings.addNewAddress}
            type={'S16'}
            color={!!colors.dark ? colors.white : colors.primary}
            bgColor={colors.dark3}
            containerStyle={styles.mb20}
            onPress={onPressAddAddress}
          />
        )}
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={!!itm ? itm : strings.address} />
      <FlashList
        data={AddressData}
        extraData={extraData}
        renderItem={renderAddressList}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        bounces={false}
        ListFooterComponent={FlashListFooter}
        estimatedItemSize={20}
      />
      <View style={styles.ph20}>
        <CButton
          title={!!itm ? strings.apply : strings.addNewAddress}
          type={'S16'}
          containerStyle={styles.mv10}
          onPress={onPressAdd}
        />
      </View>
    </CSafeAreaView>
  );
}
