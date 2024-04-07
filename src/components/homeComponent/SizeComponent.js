import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

// Custom Imports
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import {sizeData} from '../../api/constant';

const ColorComponent = props => {
  const colors = useSelector(state => state.theme.theme);
  const [selectedSize, setSelectedSize] = useState('');
  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedSize]);

  const renderSizeItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedSize(item)}
        style={
          item === selectedSize ? localStyles.sizeContainer : localStyles.item
        }>
        <CText
          color={item === selectedSize ? colors.white : colors.grayScale4}
          type={'b16'}>
          {item.label}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={localStyles.root}>
      <FlashList
        data={sizeData}
        extraData={extraData}
        renderItem={renderSizeItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={10}
      />
    </View>
  );
};

export default memo(ColorComponent);

const localStyles = StyleSheet.create({
  root: {
    width: '100%',
    ...styles.selfCenter,
    ...styles.pt15,
    ...styles.pb10,
  },
  sizeContainer: {
    height: moderateScale(35),
    width: moderateScale(35),
    ...styles.center,
    ...styles.mr10,
    borderRadius: moderateScale(50),
    backgroundColor: '#64B5F6',
  },
  item: {
    height: moderateScale(35),
    width: moderateScale(35),
    ...styles.center,
    ...styles.mr10,
    borderRadius: moderateScale(50),
    borderWidth: 2,
    borderColor: '#AFAFAF',
    backgroundColor: colors.dark ? colors.backgroundColor : colors.white,
  },
});
