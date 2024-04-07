import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import {SearchIcon} from '../../../assets/svgs';
import ProductShortDetail from '../../../components/homeComponent/ProductShortDetail';
import {styles} from '../../../themes';
import {StackNav} from '../../../navigation/NavigationKeys';
import {getColors} from '../../../common/constants';

export default function ProductCategory({navigation, route}) {
  const item = route?.params?.item;
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);
  const onPressSearch = () => navigation.navigate(StackNav.Search);

  const RightIcon = () => {
    return (
      <TouchableOpacity onPress={onPressSearch}>
        <SearchIcon color={color} />
      </TouchableOpacity>
    );
  };

  const onPressDetail = itm =>
    navigation.navigate(StackNav.ProductDetail, {item: itm});

  const renderItem = ({item, index}) => {
    return (
      <ProductShortDetail
        item={item}
        index={index}
        onPress={() => onPressDetail(item)}
      />
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={item?.title} rightIcon={<RightIcon />} />
      <View style={localStyles.root}>
        <FlashList
          data={item?.data}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.mh20,
    ...styles.flex,
  },
});
