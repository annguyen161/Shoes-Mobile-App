import {StatusBar, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation';
import {styles} from './themes';
import CSafeAreaView from './components/common/CSafeAreaView';

const App = () => {
  const colors = useSelector(state => state.theme.theme);

  return (
    <View style={styles.flex}>
      <StatusBar
        barStyle={colors.dark == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.dark ? colors.darkBg : colors.white}
      />
      <AppNavigator />
    </View>
  );
};

export default App;
