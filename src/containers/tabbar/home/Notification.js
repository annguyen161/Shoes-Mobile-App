import {
  Image,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import strings from '../../../i18n/strings';
import CHeader from '../../../components/common/CHeader';
import {MenuIcon} from '../../../assets/svgs';
import {styles} from '../../../themes';
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import {getColors, moderateScale} from '../../../common/constants';
import CText from '../../../components/common/CText';
import {notificationData} from '../../../api/constant';
import CDivider from '../../../components/common/CDivider';

export default function Notification() {
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);
  const RightIcon = () => {
    return (
      <TouchableOpacity>
        <MenuIcon color={color} />
      </TouchableOpacity>
    );
  };

  const RenderNotificationItem = ({item, index}) => {
    return (
      <View
        style={localStyles.rot}
        backgroundColor={colors.dark ? colors.borderColor : colors.bgSearch}>
        <View style={localStyles.item}>
          <Image source={item.image} />
          <CText
            type={'r14'}
            color={colors.dark ? colors.white : colors.black}
            style={styles.mh10}>
            {item.title}
          </CText>
        </View>
        <View style={styles.pb15}>
          <CText type={'r14'} color={colors.dark ? colors.white : colors.black}>
            {item.description}
          </CText>
          <CDivider style={{width: '70%'}} />
          <CText type={'r14'} color={colors.dark ? colors.white : colors.black}>
            {item.time}
          </CText>
        </View>
      </View>
    );
  };

  const RenderSectionHeader = ({section: {title}}) => {
    return (
      <CText numberOfLines={1} style={[styles.ml20, styles.mb15]} type={'b18'}>
        {title}
      </CText>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.notification} rightIcon={<RightIcon />} />
      <SectionList
        sections={notificationData}
        keyExtractor={(item, index) => item + index}
        renderItem={RenderNotificationItem}
        renderSectionHeader={RenderSectionHeader}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  rot: {
    ...styles.mh20,
    ...styles.mv15,
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(5),
    borderColor: '#BDBDBD',
  },
  item: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.pv15,
  },
});
