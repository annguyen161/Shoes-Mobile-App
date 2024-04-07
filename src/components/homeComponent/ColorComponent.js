import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Custom Imports
import {deviceWidth} from '../../common/constants';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import {styles} from '../../themes';
import {colorData} from '../../api/constant';

const ColorComponent = props => {
  const {isSize = false} = props;
  const colors = useSelector(state => state.theme.theme);
  const [selectedColor, setSelectedColor] = useState('');
  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [selectedColor]);

  const renderColorItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedColor(item)}
        style={[
          localStyles.colorContainer,
          {borderColor: colors.dark ? colors.dark3 : colors.grayScale5},
          {backgroundColor: item},
        ]}>
        {item === selectedColor && (
          <Ionicons
            name={'checkmark-sharp'}
            size={moderateScale(24)}
            color={colors.textColor}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={localStyles.root}>
      <FlashList
        data={colorData}
        extraData={extraData}
        renderItem={renderColorItem}
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
  colorContainer: {
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: moderateScale(50),
    backgroundColor: 'red',
    ...styles.center,
    ...styles.mr10,
  },
  root: {
    width: '100%',
    ...styles.selfCenter,
    ...styles.pt15,
    ...styles.pb10,
  },
});
