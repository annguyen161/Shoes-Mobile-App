// Library Imports
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import {styles} from '../../../themes';
import {inboxCallData} from '../../../api/constant';
import CText from '../../../components/common/CText';
import {moderateScale} from '../../../common/constants';
import {OrderIcon, TopUpIcon} from '../../../assets/svgs';
import strings from '../../../i18n/strings';
import CHeader from '../../../components/common/CHeader';

export default function Calls() {
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = React.useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={localStyles.renderItemContainer}>
        <View style={[styles.rowCenter, styles.flex]}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={[
              localStyles.productImage,
              {backgroundColor: colors.dark ? colors.white : colors.grayScale1},
            ]}
          />
          <View style={[styles.mh10, styles.flex]}>
            <CText numberOfLines={1} type={'b16'} color={colors.textBlueBold}>
              {item.store}
            </CText>
            <View style={[styles.flexRow, styles.itemsCenter, styles.mt5]}>
              {item?.status === strings.incoming ? (
                <TopUpIcon />
              ) : (
                <OrderIcon />
              )}
              <CText
                numberOfLines={1}
                color={colors.textBlue}
                style={styles.ml5}
                type={'s14'}>
                {item?.status === strings.incoming
                  ? strings.incoming
                  : strings.outgoing}
                {' |'} {item.time}
              </CText>
            </View>
          </View>
        </View>
        <View style={styles.itemsEnd}>
          <TouchableOpacity>
            <Ionicons
              name="call-outline"
              size={moderateScale(22)}
              color={colors.textBlue}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        ...localStyles.root,
        backgroundColor: colors.dark ? colors.darkBg : colors.white,
      }}>
      <CHeader title={strings.fprcalls} />
      <FlashList
        data={inboxCallData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={localStyles.contentContainerStyle}
        estimatedItemSize={20}
      />
      <TouchableOpacity
        style={[
          localStyles.addIcon,
          {
            backgroundColor: colors.dark ? colors.white : colors.textBlue,
          },
        ]}>
        <Ionicons
          name="add-outline"
          size={moderateScale(32)}
          color={colors.dark ? colors.darkBg : colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  contentContainerStyle: {
    ...styles.pb20,
  },
  productImage: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: moderateScale(28),
    resizeMode: 'contain',
  },
  renderItemContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.mt15,
  },
  messageContainer: {
    height: moderateScale(22),
    width: moderateScale(22),
    borderRadius: moderateScale(11),
    ...styles.center,
  },
  addIcon: {
    position: 'absolute',
    bottom: moderateScale(20),
    right: moderateScale(20),
    borderRadius: moderateScale(28),
    height: moderateScale(56),
    width: moderateScale(56),
    ...styles.center,
  },
});
