import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import {getColors} from '../../../common/constants';
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import {specialImage} from '../../../api/constant';
import CHeader from '../../../components/common/CHeader';
import {MenuIcon} from '../../../assets/svgs';
import CSafeAreaView from '../../../components/common/CSafeAreaView';

export default function SpecialOffers() {
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);

  const RightIcon = () => {
    return (
      <TouchableOpacity>
        <MenuIcon color={color} />
      </TouchableOpacity>
    );
  };
  return (
    <CSafeAreaView>
      <CHeader title={strings.specialOffers} rightIcon={<RightIcon />} />
      <ScrollView showsVerticalScrollIndicator={false} style={localStyles.item}>
        {specialImage.map(item => (
          <Image
            style={localStyles.imageStyle}
            resizeMode="cover"
            key={item.id}
            source={item.image}
          />
        ))}
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  imageStyle: {
    width: '100%',
  },

  item: {
    ...styles.flex,
  },
});
