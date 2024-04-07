import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import {shippingData} from '../../../api/constant';
import ShippingComponent from '../../../components/cartComponent/ShippingComponent';
import CButton from '../../../components/common/CButton';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';

export default function ChooseShipping({navigation}) {
  const [extraData, setExtraData] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedType]);

  const onPressChoose = itm => {
    setSelectedType(itm?.title);
  };

  const onPressApply = () => navigation.goBack();

  const renderAddressList = ({item}) => {
    return (
      <ShippingComponent
        item={item}
        onPressChoose={() => onPressChoose(item)}
        selectedType={selectedType}
      />
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.chooseShipping} />
      <FlashList
        data={shippingData}
        extraData={extraData}
        renderItem={renderAddressList}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        bounces={false}
        estimatedItemSize={20}
      />
      <View style={styles.ph20}>
        <CButton
          title={strings.apply}
          type={'S16'}
          containerStyle={styles.mv10}
          onPress={onPressApply}
        />
      </View>
    </CSafeAreaView>
  );
}
