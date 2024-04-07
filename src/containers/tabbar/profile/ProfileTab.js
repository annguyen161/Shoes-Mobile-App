// Library Imports
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {createRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import {
  AppLogoDark,
  AppLogoLight,
  EditIcon,
  MenuIcon,
} from '../../../assets/svgs';
import {
  ACCESS_TOKEN,
  getColors,
  getHeight,
  moderateScale,
  THEME,
} from '../../../common/constants';
import {colors, styles} from '../../../themes';
import {ProfileSetting} from '../../../api/constant';
import strings from '../../../i18n/strings';
import CText from '../../../components/common/CText';
import {changeThemeAction} from '../../../redux/action/themeAction';
import {setAsyncStorageData} from '../../../utils/helpers';
import {StackNav} from '../../../navigation/NavigationKeys';
import LogOut from '../../../components/models/LogOut';
import {removeUserDetail} from '../../../utils/asyncstorage';
import ProfilePicture from '../../../components/models/ProfilePicture';
import {useNavigation} from '@react-navigation/native';

export default function ProfileTab() {
  const navigation = useNavigation();
  const color = useSelector(state => state.theme.theme);
  const theme = getColors(color);
  const language = useSelector(state => state?.profile?.language);
  const [selectImage, setSelectImage] = useState('');
  const [isEnabled, setIsEnabled] = useState(!!color.dark);
  const dispatch = useDispatch();
  const LogOutSheetRef = createRef();
  const ProfilePictureSheetRef = createRef();
  const onPressProfilePic = () => ProfilePictureSheetRef?.current.show();
  const onPressMenu = () => {};

  useEffect(() => {
    ProfilePictureSheetRef?.current?.hide();
  }, [selectImage]);

  const onPressLightTheme = () => {
    setAsyncStorageData(THEME, 'light');
    dispatch(changeThemeAction(colors.light));
  };

  const onPressDarkTheme = () => {
    setAsyncStorageData(THEME, 'dark');
    dispatch(changeThemeAction(colors.dark));
  };

  const toggleSwitch = val => {
    if (val) {
      onPressDarkTheme();
    } else {
      onPressLightTheme();
    }
    setIsEnabled(previousState => !previousState);
  };

  const onPressItem = item => {
    if (item.route === StackNav.SetUpProfile) {
      navigation.navigate(item.route, {title: item.header});
    } else {
      navigation.navigate(item.route);
    }
  };

  const onPressLogOutBtn = () => LogOutSheetRef?.current?.show();

  const onPressYesLogOut = async () => {
    try {
      await removeUserDetail(ACCESS_TOKEN);
      LogOutSheetRef?.current?.hide();
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: StackNav.Auth}],
        });
      }, 500);
      return true;
    } catch (exception) {
      return false;
    }
  };

  const onPressCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      includeBase64: true,
    }).then(image => {
      setSelectImage(image);
    });
  };

  const onPressGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    }).then(images => {
      setSelectImage(images);
    });
  };

  const onPressCancel = () => LogOutSheetRef?.current?.hide();

  const RightIcon = () => {
    return (
      <TouchableOpacity onPress={onPressMenu} style={styles.pr10}>
        <MenuIcon color={theme} />
      </TouchableOpacity>
    );
  };

  const LeftIcon = () => {
    return (
      <View style={styles.pr10}>
        <AppLogoDark />
      </View>
    );
  };

  return (
    <CSafeAreaView style={{paddingBottom: 80}}>
      <CHeader
        isHideBack={true}
        title={strings.profile}
        isLeftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.root}>
        <TouchableOpacity
          onPress={onPressProfilePic}
          style={[styles.selfCenter, styles.mb20]}>
          <Image
            source={{
              uri: 'https://maycamtay.net/wp-content/uploads/2023/05/c6e56503cfdd87da299f72dc416023d4.jpg',
            }}
            style={localStyles.userImage}
          />
          <View style={localStyles.editIcon}>{<EditIcon color={theme} />}</View>
        </TouchableOpacity>
        <View style={styles.mb20}>
          <CText type="b24" align={'center'}>
            {'Admin'}
          </CText>
          <CText type="m14" align={'center'} style={styles.mt10}>
            {'Admin@gmail.com'}
          </CText>
        </View>
        {ProfileSetting.map((item, index) => {
          return (
            <TouchableOpacity
              disabled={item.title === strings.darkMode}
              onPress={() => onPressItem(item)}
              key={index}
              activeOpacity={item.rightIcon ? 1 : 0.5}
              style={localStyles.settingsContainer}>
              <Ionicons
                name={item.icon}
                size={moderateScale(28)}
                color={color.dark ? color.white : color.textBlueBold}
              />
              <CText type="s18" style={styles.ml15}>
                {item.title}
              </CText>
              <View style={localStyles.rightContainer}>
                {!!item.value && (
                  <CText type="s18" style={styles.mr10}>
                    {language}
                  </CText>
                )}
                {!!item.rightIcon ? (
                  <Switch
                    trackColor={{
                      false: color.grayScale3,
                      true: color.grayScale5,
                    }}
                    thumbColor={color.white}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                ) : (
                  <Ionicons
                    name="chevron-forward-outline"
                    size={moderateScale(20)}
                    color={color.dark ? color.white : color.textBlueBold}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={onPressLogOutBtn}
          style={localStyles.settingsContainer}>
          <Ionicons
            name={'log-out-outline'}
            size={moderateScale(28)}
            color={color.icon}
          />
          <CText type="s18" color={color.icon} style={localStyles.logOutStyle}>
            {strings.logout}
          </CText>
        </TouchableOpacity>
      </ScrollView>
      <LogOut
        SheetRef={LogOutSheetRef}
        onPressLogOut={onPressYesLogOut}
        onPressCancel={onPressCancel}
      />
      <ProfilePicture
        onPressCamera={onPressCamera}
        onPressGallery={onPressGallery}
        SheetRef={ProfilePictureSheetRef}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.pb30,
  },
  settingsContainer: {
    ...styles.mt15,
    ...styles.flexRow,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
  userImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  editIcon: {
    position: 'absolute',
    bottom: moderateScale(-10),
    right: moderateScale(-5),
  },
  logOutStyle: {
    ...styles.ml15,
    marginBottom: Platform.OS === 'ios' ? getHeight(75) : getHeight(0),
  },
});
