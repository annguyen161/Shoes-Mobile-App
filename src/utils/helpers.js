import AsyncStorage from '@react-native-async-storage/async-storage';

// Set Async Storage Data
const setAsyncStorageData = async (key, value) => {
  const stringData = JSON.stringify(value);
  await AsyncStorage.setItem(key, stringData);
};

// Get Async Storage Data
const getAsyncStorageData = async key => {
  const data = await AsyncStorage.getItem(key);
  return JSON.parse(data);
};

export {getAsyncStorageData, setAsyncStorageData};
