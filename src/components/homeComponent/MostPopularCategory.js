import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import CText from '../common/CText';
import {mostPopularData} from '../../api/constant';
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import images from '../../assets/images';

export default function MostPopularCategory(props) {
  const {chipsData, isStar = false, setSelectedTag, selectedTag} = props;
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(true);
  const handleTagSelection = value => {
    setSelectedTag(value);
  };

  useEffect(() => {
    setExtraData(true);
  }, []);

  const renderChips = ({item}) => {
    const isSelected = item.value === selectedTag;

    const isDark = colors.dark;

    const color = isDark
      ? colors.white
      : isSelected
      ? colors.white
      : colors.textBlueBold;

    const backgroundColor = isSelected
      ? isDark
        ? colors.dark3
        : colors.textBlueBold
      : colors.transparent;

    const borderColor = isDark ? colors.dark3 : colors.textBlueBold;
    return (
      <TouchableOpacity
        onPress={() => handleTagSelection(item.value)}
        style={[localStyles.chipsContainer, {borderColor, backgroundColor}]}>
        {!!isStar && (
          <Image
            source={images.starFill}
            style={[
              localStyles.starStyle,
              {
                tintColor: color,
              },
            ]}
          />
        )}
        <CText type={'S16'} color={color}>
          {item.label}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={chipsData ? chipsData : mostPopularData}
        renderItem={renderChips}
        extraData={extraData}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mb15}
        estimatedItemSize={10}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  chipsContainer: {
    ...styles.ph20,
    ...styles.pv10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    ...styles.mh5,
    ...styles.rowCenter,
  },
  starStyle: {
    width: moderateScale(16),
    height: moderateScale(16),
    resizeMode: 'contain',
    ...styles.mr10,
  },
});
