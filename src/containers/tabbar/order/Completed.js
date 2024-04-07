// Library Imports
import {StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import ProductOrderComponent from '../../../components/ProductOrderComponent';
import {completedOrderData} from '../../../api/constant';
import LeaveReview from '../../../components/models/LeaveReview';
import RenderNullComponent from '../../../components/RenderNullComponent';
import {moderateScale} from '../../../common/constants';

export default function Completed() {
  const leaveReviewRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState({});

  const onPressReview = item => {
    setSelectedItem(item);
    leaveReviewRef?.current?.show();
  };

  const renderItem = ({item}) => {
    return (
      <ProductOrderComponent
        item={item}
        isCompleted={true}
        onPressComplete={onPressReview}
      />
    );
  };

  return (
    <View style={localStyles.root}>
      {!!completedOrderData && completedOrderData.length ? (
        <FlashList
          data={completedOrderData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={localStyles.contentContainerStyle}
          estimatedItemSize={20}
        />
      ) : (
        <RenderNullComponent
          title1={strings.onGoingNullTitle}
          title2={strings.completedNullDesc}
        />
      )}
      <LeaveReview SheetRef={leaveReviewRef} item={selectedItem} />
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
