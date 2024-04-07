import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';

// Custom Imports
import strings from '../../../i18n/strings';
import CHeader from '../../../components/common/CHeader';
import {SearchIcon} from '../../../assets/svgs';
import {styles} from '../../../themes';
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import MostPopularCategory from '../../../components/homeComponent/MostPopularCategory';
import {homeProductData} from '../../../api/constant';
import ProductShortDetail from '../../../components/homeComponent/ProductShortDetail';
import {StackNav} from '../../../navigation/NavigationKeys';
import {getColors} from '../../../common/constants';

export default function MostPopular() {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);
  const [selectedTag, setSelectedTag] = useState('All');
  const color = getColors(colors);

  const onPressDetail = itm =>
    navigation.navigate(StackNav.ProductDetail, {item: itm});

  const onPressSearch = () => navigation.navigate(StackNav.Search);

  const filteredHomeProductData = homeProductData.filter(
    item => item.category === selectedTag,
  );
  const RightIcon = () => {
    return (
      <TouchableOpacity onPress={onPressSearch}>
        <SearchIcon color={color} />
      </TouchableOpacity>
    );
  };

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
      <CHeader title={strings.topDeal} rightIcon={<RightIcon />} />
      <View style={localStyles.root}>
        <FlashList
          data={
            selectedTag !== 'All' ? filteredHomeProductData : homeProductData
          }
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <MostPopularCategory
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          }
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
