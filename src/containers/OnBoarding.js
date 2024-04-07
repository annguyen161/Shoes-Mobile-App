import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet, FlatList, Image, View} from 'react-native';
import {useSelector} from 'react-redux';

//Local Imports
import {OnBoardingSlide} from '../api/constant';
import {
  deviceWidth,
  getColors,
  getHeight,
  moderateScale,
} from '../common/constants';
import CButton from '../components/common/CButton';
import CSafeAreaView from '../components/common/CSafeAreaView';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';
import {styles} from '../themes';
import {setOnBoarding} from '../utils/asyncstorage';
import CText from '../components/common/CText';

const OnBoarding = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);
  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const onPressRightArrow = async () => {
    if (currentIndex === 2) {
      await setOnBoarding(true);
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.Auth}],
      });
    } else {
      slideRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (currentIndex + 1),
      });
    }
  };

  const RenderOnboardingItem = useCallback(
    ({item}) => {
      return (
        <View style={localStyles.rendetItemConatiner}>
          <Image
            source={colors.dark ? item.productImageDark : item.productImage}
            resizeMode="contain"
            style={localStyles.imageStyle}
            key={item.id}
          />
          <View style={styles.mt30}>
            <CText
              type={'B30'}
              align={'center'}
              color={colors.dark ? colors.white : colors.black}>
              {item.text}
            </CText>
          </View>
        </View>
      );
    },
    [colors.dark],
  );

  return (
    <CSafeAreaView style={styles.flex}>
      <FlatList
        data={OnBoardingSlide}
        ref={slideRef}
        renderItem={({item, index}) => (
          <RenderOnboardingItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        pagingEnabled
      />

      <View style={styles.rowCenter}>
        {OnBoardingSlide.map((_, index) => (
          <View
            style={[
              localStyles.bottomIndicatorStyle,
              {
                width:
                  index !== currentIndex
                    ? moderateScale(10)
                    : moderateScale(20),
                backgroundColor:
                  index !== currentIndex
                    ? colors.dark
                      ? colors.dark3
                      : colors.grayScale3
                    : colors.icon,
              },
            ]}
          />
        ))}
      </View>

      <CButton
        title={currentIndex === 2 ? strings.getStarted : strings.next}
        containerStyle={localStyles.submitButton}
        type={'S18'}
        onPress={onPressRightArrow}
      />
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  submitButton: {
    ...styles.mb15,
    ...styles.mh25,
  },
  rendetItemConatiner: {
    width: deviceWidth,
    ...styles.ph20,
    ...styles.center,
  },
  imageStyle: {
    height: '65%',
    width: deviceWidth - moderateScale(40),
    resizeMode: 'contain',
  },
  bottomIndicatorStyle: {
    height: getHeight(10),
    ...styles.mb30,
    ...styles.mt10,
    borderRadius: moderateScale(10),
    ...styles.mh5,
  },
});

export default OnBoarding;
