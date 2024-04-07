// Library import
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import ActionSheet from 'react-native-actions-sheet';

// Local import
import {styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {DownloadIcon, PrintIcon, ShareIcon} from '../../assets/svgs';
import CDivider from '../common/CDivider';

export default function EReceiptMenu(props) {
  const {SheetRef, onPressCancel} = props;
  const colors = useSelector(state => state.theme.theme);
  const color = colors.dark ? '#FAFAFA' : '#212121';
  const RenderItem = ({text, icon, onPress}) => {
    return (
      <TouchableOpacity style={localStyles.textStyle} onPress={onPress}>
        {!!icon && icon}
        <CText type={'b16'} style={styles.ph10}>
          {text}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        ...styles.actionSheetIndicator,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <View style={localStyles.bottomContainer}>
        <RenderItem
          text={strings.shareEReceipt}
          icon={<ShareIcon color={color} />}
          onPress={onPressCancel}
        />
        <CDivider style={styles.mv20} />
        <RenderItem
          text={strings.downloadEReceipt}
          icon={<DownloadIcon color={color} />}
          onPress={onPressCancel}
        />
        <CDivider style={styles.mv20} />
        <RenderItem
          text={strings.print}
          onPress={onPressCancel}
          icon={<PrintIcon color={color} />}
        />
      </View>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
    ...styles.pb30,
  },
  bottomContainer: {
    ...styles.pv10,
    ...styles.pv30,
    ...styles.pb50,
  },
  textStyle: {
    ...styles.flexRow,
    ...styles.alignCenter,
  },
});
