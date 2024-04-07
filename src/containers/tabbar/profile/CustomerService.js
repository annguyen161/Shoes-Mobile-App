// Library import
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Local import
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import {styles} from '../../../themes';
import {
  checkPlatform,
  deviceWidth,
  moderateScale,
} from '../../../common/constants';
import CText from '../../../components/common/CText';
import CInput from '../../../components/common/CInput';
import {chatData} from '../../../api/constant';
import strings from '../../../i18n/strings';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function CustomerService({navigation, route}) {
  const title = route.params?.title;
  const colors = useSelector(state => state.theme.theme);
  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.bColor,
  };
  const FocusedStyle = {
    borderColor: colors.textColor,
  };

  const [addChat, setAddChat] = useState('');
  const [chatStyle, setChatStyle] = useState(BlurredStyle);
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (addChat.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [addChat]);

  const onFocusInput = () => setChatStyle(FocusedStyle);

  const onBlurInput = () => setChatStyle(BlurredStyle);

  const onchangeComment = text => setAddChat(text);

  const onPressCall = () =>
    navigation.navigate(StackNav.CallingScreen, {title: title});

  const RightIcon = () => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressCall} style={styles.pr10}>
          <Ionicons
            name="call-outline"
            size={moderateScale(26)}
            color={colors.textColor}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="ellipsis-horizontal-circle-outline"
            size={moderateScale(26)}
            color={colors.textColor}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const SenderMessage = memo(({item, index}) => {
    return (
      <View
        style={[
          localStyles.senderContainer,
          {
            backgroundColor:
              item.type == 'sender'
                ? colors.black
                : colors.dark
                ? colors.dark3
                : colors.bgSearch,
            alignSelf: item.type == 'sender' ? 'flex-end' : 'flex-start',
          },
        ]}>
        <CText
          style={styles.flex}
          color={
            item.type == 'sender'
              ? colors.white
              : colors.dark
              ? colors.grayScale6
              : colors.textColor
          }
          type="m16">
          {item.message}
        </CText>
        <CText color={colors.textBlue} style={styles.pl10} type="r12">
          {item.time}
        </CText>
      </View>
    );
  });

  return (
    <CSafeAreaView>
      <CHeader
        title={title ? title : strings.customerService}
        rightIcon={<RightIcon />}
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={
          checkPlatform() === 'ios' ? moderateScale(50) : null
        }
        style={styles.flex}
        behavior={checkPlatform() === 'ios' ? 'padding' : null}>
        <View style={styles.flex}>
          <FlatList
            data={chatData}
            renderItem={({item, index}) => (
              <SenderMessage item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.mh20}
          />
        </View>
        <View style={styles.rowCenter}>
          <CInput
            placeHolder={strings.message + '...'}
            keyBoardType={'default'}
            _value={addChat}
            autoCapitalize={'none'}
            toGetTextFieldValue={onchangeComment}
            inputContainerStyle={[
              {backgroundColor: colors.inputBg},
              localStyles.inputContainerStyle,
              chatStyle,
            ]}
            _onFocus={onFocusInput}
            onBlur={onBlurInput}
          />
          <TouchableOpacity
            disabled={isDisable}
            style={[
              localStyles.sendBtn,
              {backgroundColor: colors.textBlueBold},
            ]}>
            <Feather
              name={isDisable ? 'mic' : 'send'}
              size={moderateScale(24)}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    ...styles.ph20,
    ...styles.itemsCenter,
  },
  timeContainer: {
    ...styles.pv10,
    ...styles.mv15,
    ...styles.ph15,
    borderRadius: moderateScale(12),
  },
  senderContainer: {
    ...styles.p15,
    ...styles.flexRow,
    borderRadius: moderateScale(12),
    maxWidth: '80%',
    ...styles.itemsEnd,
    ...styles.mt10,
  },
  inputContainerStyle: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.ph15,
    ...styles.flexGrow1,
    width: deviceWidth - moderateScale(100),
  },
  sendBtn: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    ...styles.rowCenter,
    ...styles.ml10,
  },
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    ...styles.mh10,
  },
});
