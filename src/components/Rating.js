import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import images from '../assets/images';
import {moderateScale} from '../common/constants';
import {styles} from '../themes';

const Rating = ({activeColor, inactiveColor}) => {
  const [rating, setRating] = useState('');

  const onPressReview = index => setRating(index);

  const renderStar = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onPressReview(item)} style={styles.mh5}>
        <Image
          source={rating < item ? images.starUnFill : images.starFill}
          style={[
            localStyles.rateIcon,
            {
              tintColor: rating < item ? activeColor : inactiveColor,
            },
          ]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={localStyles.ratingContainer}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderStar}
        keyExtractor={item => item.toString()}
        horizontal={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.selfCenter}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  rateIcon: {
    height: moderateScale(22.3),
    width: moderateScale(23),
    ...styles.selfCenter,
  },
  ratingContainer: {
    ...styles.rowSpaceAround,
    ...styles.selfCenter,
    ...styles.mv15,
    width: '50%',
  },
});

export default Rating;
