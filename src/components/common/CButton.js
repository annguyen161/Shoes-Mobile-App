//Library Imports
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

//Local Imports
import {getHeight, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import CText from './CText';

export default function CButton({
  title,
  type,
  color,
  onPress,
  containerStyle,
  style,
  icon = null,
  frontIcon = null,
  bgColor = null,
  children,
  ...props
}) {
  const colors = useSelector(state => state.theme.theme);
  return (
    <TouchableOpacity
      style={[
        localStyle.btnContainer,
        styles.rowCenter,
        containerStyle,
        bgColor
          ? {backgroundColor: bgColor}
          : {backgroundColor: colors.bgBtnSignUP},
      ]}
      onPress={onPress}
      {...props}>
      {frontIcon}
      <CText
        type={!!type ? type : 'S16'}
        style={style}
        color={color ? color : colors.textRevertColor}>
        {title}
      </CText>
      {icon}
      {children}
    </TouchableOpacity>
  );
}

const localStyle = StyleSheet.create({
  btnContainer: {
    height: getHeight(60),
    borderRadius: moderateScale(5),
  },
});
