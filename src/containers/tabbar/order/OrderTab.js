// Library import
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

// Custom imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CText from '../../../components/common/CText';
import {
  AppLogoDark,
  AppLogoLight,
  MenuIcon,
  SearchIcon,
} from '../../../assets/svgs';
import {styles} from '../../../themes';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {SceneMap, TabView} from 'react-native-tab-view';
import {getColors, moderateScale} from '../../../common/constants';
import Active from './Active';
import Completed from './Completed';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function OrderTab({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const color = getColors(colors);
  const [isSelect, setIsSelect] = useState({
    index: 0,
    routes: [
      {key: 'first', title: strings.active},
      {key: 'second', title: strings.completed},
    ],
  });

  const _handleIndexChange = index => {
    setIsSelect({...isSelect, index: index});
  };

  const HeaderCetegoryItem = ({title, index}) => {
    return (
      <TouchableOpacity
        onPress={() => _handleIndexChange(index)}
        style={[
          localStyles.root,
          {
            borderBottomColor: colors.dark
              ? isSelect.index === index
                ? colors.white
                : colors.textBlue
              : isSelect.index === index
              ? colors.textBlue
              : colors.white,
          },
        ]}>
        <CText
          type={'s18'}
          align={'center'}
          style={styles.pb20}
          color={
            colors.dark
              ? isSelect.index === index
                ? colors.textBlueBold
                : colors.textBlueBold
              : isSelect.index === index
              ? colors.textBlueBold
              : colors.textBlue
          }>
          {title}
        </CText>
      </TouchableOpacity>
    );
  };

  const _renderTabBar = props => {
    return (
      <View style={localStyles.mainContainer}>
        {props.navigationState.routes.map((item, index) => {
          return <HeaderCetegoryItem title={item.title} index={index} />;
        })}
      </View>
    );
  };

  const _renderScene = SceneMap({
    first: Active,
    second: Completed,
  });

  const onPressSearch = () => navigation.navigate(StackNav.Search);

  const RightIcon = () => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressSearch}>
          <SearchIcon color={color} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ph10}>
          <MenuIcon color={color} />
        </TouchableOpacity>
      </View>
    );
  };

  const LeftIcon = () => {
    return (
      <View style={styles.pr10}>
        {colors.dark ? <AppLogoDark /> : <AppLogoLight />}
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader
        isHideBack={true}
        title={strings.order}
        isLeftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
      <TabView
        navigationState={isSelect}
        renderScene={_renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
        activeColor={{color: colors.primary}}
        navigation={navigation}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    borderBottomWidth: moderateScale(2.5),
    width: '50%',
  },
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.mt10,
    width: '100%',
    borderColor: '#f2f8fd',
    borderBottomWidth: moderateScale(0.5),
  },
});
