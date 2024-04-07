import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import {addPromoData} from '../../../api/constant';
import ShippingComponent from '../../../components/cartComponent/ShippingComponent';
import CButton from '../../../components/common/CButton';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {StackNav} from '../../../navigation/NavigationKeys';
import {SearchIcon} from '../../../assets/svgs';
import {getColors} from '../../../common/constants';

export default function AddPromo({navigation, route}) {
  const {amount, data} = route?.params;
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const color = getColors(colors);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedType]);

  const onPressChoose = itm => {
    setSelectedType(itm?.title);
  };

  const onPressApply = () =>
    navigation.navigate(StackNav.CheckOutOrders, {
      amount,
      data,
    });

  const renderAddressList = ({item}) => {
    return (
      <ShippingComponent
        item={item}
        onPressChoose={() => onPressChoose(item)}
        selectedType={selectedType}
      />
    );
  };

  const onPressSearch = () => navigation.navigate(StackNav.Search);

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.ph10} onPress={onPressSearch}>
        <SearchIcon color={color} />
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.addPromo} rightIcon={<RightIcon />} />
      <FlashList
        data={addPromoData}
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
