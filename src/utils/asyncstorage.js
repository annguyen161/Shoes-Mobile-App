import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN, ON_BOARDING, THEME} from '../common/constants';


const removeUserDetail = async key => {
  await AsyncStorage.removeItem(key);
};

const initialStorageValueGet = async () => {
  let asyncData = await AsyncStorage.multiGet([
    THEME,
    ON_BOARDING,
    ACCESS_TOKEN,
  ]);
  console.log('asyncData ', asyncData);
  const themeColor = JSON.parse(asyncData[0][1]);
  const onBoardingValue = JSON.parse(asyncData[1][1]);
  const acessTokenValue = JSON.parse(asyncData[2][1]);
  return {themeColor, onBoardingValue, acessTokenValue};
};

// setOnBoarding;

const setOnBoarding = async value => {
  const stringifyData = JSON.stringify(value);
  await AsyncStorage.setItem(ON_BOARDING, stringifyData);
  return;
};

export {
  // setUserDetail, getUserDetail,
  initialStorageValueGet,
  setOnBoarding,
  removeUserDetail,
};
