import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../themes';
import {useSelector} from 'react-redux';
import CText from './common/CText';

function SubHeader({title1, title2, onPressSeeAll, style}) {
  const colors = useSelector(state => state.theme.theme);
  return (
    <View style={[localStyles.root, {...style}]}>
      <CText type={'b22'} style={styles.flex}>
        {title1}
      </CText>
      {!!title2 && (
        <TouchableOpacity onPress={onPressSeeAll}>
          <CText type={'s16'} style={styles.flex} color={colors.textColor}>
            {title2}
          </CText>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default React.memo(SubHeader);

const localStyles = StyleSheet.create({
  root: {
    ...styles.rowSpaceBetween,
    ...styles.mv15,
  },
});
