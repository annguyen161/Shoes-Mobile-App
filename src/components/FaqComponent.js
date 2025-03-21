// Library Imports
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import {moderateScale} from '../common/constants';
import {styles} from '../themes';
import CText from './common/CText';

const FaqComponent = ({title, description = ''}) => {
  const colors = useSelector(state => state.theme.theme);

  const [isDescShow, setIsDescShow] = useState(false);

  const onPressShow = () => setIsDescShow(!isDescShow);

  return (
    <TouchableOpacity
      style={[
        localStyles.helperContainer,
        {backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1},
      ]}
      onPress={onPressShow}>
      <View style={localStyles.helperInnerContainer}>
        <CText type={'b18'} style={(styles.ph20, styles.flex)}>
          {title}
        </CText>
        <Ionicons
          name="caret-down-outline"
          size={moderateScale(20)}
          color={colors.dark ? colors.white : colors.btnColor}
          style={styles.mr5}
        />
      </View>
      {!!isDescShow && (
        <View
          style={[
            localStyles.textContainer,
            {
              borderTopColor: colors.dark
                ? colors.grayScale8
                : colors.grayScale3,
            },
          ]}>
          <CText
            type={'s16'}
            style={[
              localStyles.helperDescription,
              {borderTopColor: colors.primary},
            ]}>
            {description}
          </CText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FaqComponent;

const localStyles = StyleSheet.create({
  helperContainer: {
    ...styles.mv10,
    ...styles.p15,
    ...styles.pv20,
    borderRadius: moderateScale(10),
  },
  helperInnerContainer: {
    ...styles.rowCenter,
    ...styles.flex,
  },
  helperDescription: {
    ...styles.pt15,
  },
  textContainer: {
    borderTopWidth: moderateScale(1),
    ...styles.mt10,
  },
});
