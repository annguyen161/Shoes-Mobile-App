import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import SearchComponent from '../../../components/homeComponent/SearchComponent';
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import RenderNullComponent from '../../../components/RenderNullComponent';
import {moderateScale} from '../../../common/constants';
import {StackNav} from '../../../navigation/NavigationKeys';
import ProductShortDetail from '../../../components/homeComponent/ProductShortDetail';
import {searchProductData} from '../../../api/constant';
import CDebounce from '../../../components/common/CDebounce';

export default function Search({navigation}) {
  const [search, setSearch] = useState('');
  const [initialData, setInitialData] = useState([]);

  const debounceSearch = CDebounce(search, 300);

  useEffect(() => {
    setInitialData(searchProductData);
  }, []);

  useEffect(() => {
    if (!!debounceSearch) {
      filterData();
    } else {
      setInitialData(searchProductData);
    }
  }, [debounceSearch]);

  const filterData = () => {
    if (!!debounceSearch) {
      const filteredData = searchProductData.filter(item =>
        item.product.toLowerCase().includes(debounceSearch.toLowerCase()),
      );
      setInitialData(filteredData);
    } else {
      setInitialData(searchProductData);
    }
  };

  const onSearchInput = text => setSearch(text);

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
      <CHeader title={strings.search} />
      <View style={localStyles.root}>
        <SearchComponent search={search} onSearchInput={onSearchInput} />
        {!!initialData.length ? (
          <FlashList
            data={initialData}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            estimatedItemSize={10}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <RenderNullComponent
            title1={strings.notFound}
            title2={strings.notFoundDesc}
          />
        )}
      </View>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.flex,
    ...styles.mb10,
    marginTop: moderateScale(-20),
  },
});
