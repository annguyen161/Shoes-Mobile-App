import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import MostPopularCategory from '../../../components/homeComponent/MostPopularCategory';
import {ratingData, reviewsData} from '../../../api/constant';
import {FlashList} from '@shopify/flash-list';
import ReviewUserComponent from '../../../components/homeComponent/ReviewUserComponent';
import {styles} from '../../../themes';

export default function Reviews() {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredReviewsData = reviewsData.filter(
    item => item.rating === selectedTag,
  );

  const RenderFlashListItem = ({item}) => {
    return <ReviewUserComponent item={item} />;
  };

  const ListFlashListHeader = () => {
    return (
      <View style={[styles.mb20, styles.mt15]}>
        <MostPopularCategory
          isStar={true}
          chipsData={ratingData}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <FlashList
        data={selectedTag !== 'All' ? filteredReviewsData : reviewsData}
        renderItem={RenderFlashListItem}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={10}
        contentContainerStyle={styles.ph20}
        ListHeaderComponent={<ListFlashListHeader />}
        showsVerticalScrollIndicator={false}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({});
