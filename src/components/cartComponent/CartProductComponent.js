// Library Imports
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {createRef, useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import CText from '../common/CText';
import {
  deviceWidth,
  getColors,
  getHeight,
  moderateScale,
} from '../../common/constants';
import {styles} from '../../themes';
import {TrashIcon} from '../../assets/svgs';
import TrashItem from '../models/TrashItem';

export default function CartProductComponent(props) {
  const {
    item,
    isTrash,
    trashIcon = true,
    onPressTrashItem,
    onQuantityChange,
  } = props;
  const colors = useSelector(state => state.theme.theme);
  const [quantity, setQuantity] = useState(1);
  const SheetRef = createRef();
  const color = getColors(colors);
  const onPressTrash = () => SheetRef?.current?.show();

  const onPressRemove = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      onQuantityChange(item.id, quantity - 1);
    } else {
      onPressTrash();
    }
  };

  const onPressAdd = () => {
    setQuantity(prev => prev + 1);
    onQuantityChange(item.id, quantity + 1);
  };
  return (
    <View
      style={[
        localStyles.productContainer,
        {
          backgroundColor: colors.dark ? colors.darkBg : colors.bgSearch,
          borderColor: colors.textBlue,
        },
      ]}>
      <Image
        source={item?.productImage}
        style={[
          localStyles.productImageStyle,
          {backgroundColor: colors.dark ? colors.imageBg : colors.white},
        ]}
      />
      <TrashItem
        SheetRef={SheetRef}
        onPressTrashItem={() => onPressTrashItem(item.id)}
        item={item}
      />
      <View style={localStyles.rightContainer}>
        <View style={localStyles.titleContainer}>
          <CText style={styles.flex} numberOfLines={1} type={'b16'}>
            {item?.product}
          </CText>
          {!isTrash && trashIcon && (
            <TouchableOpacity onPress={onPressTrash} style={styles.ml5}>
              <TrashIcon color={color} />
            </TouchableOpacity>
          )}
        </View>
        <View style={localStyles.subItemStyle}>
          <View
            style={[
              localStyles.circleContainer,
              {backgroundColor: item?.color},
            ]}
          />
          <CText type={'s12'} color={colors.textBlue} style={{width: 40}}>
            {item?.nColor}
          </CText>
          <CText type={'s12'} color={colors.white} style={localStyles.itemSize}>
            {item?.size}
          </CText>
        </View>
        <View style={localStyles.btnContainer}>
          <CText type={'b16'}>{item?.price}</CText>
          {isTrash ? (
            <View
              style={[
                localStyles.quantityContainer,
                {
                  backgroundColor: colors.textBlue,
                },
              ]}>
              <CText
                type={'b14'}
                align={'center'}
                color={colors.white}
                style={localStyles.quantityText}>
                {item?.quantity ?? quantity}
              </CText>
            </View>
          ) : (
            <View style={[localStyles.quantityButton]}>
              <TouchableOpacity onPress={onPressRemove}>
                <Ionicons
                  name={'remove'}
                  size={moderateScale(18)}
                  color={colors.white}
                  style={localStyles.itemRemove}
                  backgroundColor={colors.textBlue}
                />
              </TouchableOpacity>
              <CText
                type={'b14'}
                align={'center'}
                color={colors.white}
                style={localStyles.quantityText}>
                {quantity}
              </CText>
              <TouchableOpacity onPress={onPressAdd}>
                <Ionicons
                  name={'add'}
                  size={moderateScale(18)}
                  color={colors.white}
                  style={localStyles.itemAdd}
                  backgroundColor={colors.textBlue}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  productContainer: {
    ...styles.p15,
    ...styles.flexRow,
    ...styles.mt15,
    borderRadius: moderateScale(20),
    ...styles.shadowStyle,
    ...styles.selfCenter,
    width: deviceWidth - moderateScale(40),
    minHeight: moderateScale(130),
    borderWidth: moderateScale(1),
  },
  productImageStyle: {
    height: '100%',
    width: moderateScale(90),
    borderRadius: moderateScale(20),
    resizeMode: 'contain',
    marginRight: moderateScale(15),
  },
  rightContainer: {
    ...styles.flex,
    ...styles.justifyBetween,
  },
  titleContainer: {
    ...styles.rowSpaceBetween,
    ...styles.flex,
  },
  circleContainer: {
    width: moderateScale(13),
    height: moderateScale(13),
    ...styles.mr10,
  },
  subItemStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mv15,
  },
  btnContainer: {
    ...styles.rowSpaceBetween,
  },
  quantityButton: {
    height: getHeight(30),
    ...styles.ph10,
    ...styles.rowCenter,
    borderRadius: moderateScale(15),
  },
  quantityText: {
    width: moderateScale(15),
    backgroundColor: '#64B5F6',
    borderRadius: moderateScale(7),
  },
  quantityContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
    ...styles.center,
    borderRadius: moderateScale(15),
  },
  itemSize: {
    borderRadius: moderateScale(10),
    backgroundColor: '#64B5F6',
    ...styles.p5,
    ...styles.ml10,
    ...styles.center,
  },
  itemRemove: {
    ...styles.mr5,
    borderRadius: moderateScale(7),
  },
  itemAdd: {
    ...styles.ml5,
    borderRadius: moderateScale(7),
  },
});
