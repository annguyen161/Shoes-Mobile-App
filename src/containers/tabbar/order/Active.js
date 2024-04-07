// Library Imports
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import ProductOrderComponent from '../../../components/ProductOrderComponent';
import {activeData} from '../../../api/constant';
import RenderNullComponent from '../../../components/RenderNullComponent';
import {moderateScale} from '../../../common/constants';

export default function Active() {
  const renderItem = ({item}) => {
    return <ProductOrderComponent item={item} />;
  };

  return (
    <View style={localStyles.root}>
      {!!activeData && activeData.length ? (
        <FlashList
          data={activeData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={localStyles.contentContainerStyle}
          estimatedItemSize={20}
        />
      ) : (
        <RenderNullComponent
          title1={strings.activeNullTitle}
          title2={strings.activeNullDesc}
        />
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    marginBottom: moderateScale(100),
  },
  contentContainerStyle: {
    ...styles.pb20,
  },
});
