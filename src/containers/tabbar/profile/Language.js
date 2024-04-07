// Library import
import {
  ScrollView,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local import
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import CText from '../../../components/common/CText';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import {changeLanguageAction} from '../../../redux/action/profileAction';
import {languageData} from '../../../api/constant';

export default Language = () => {
  const colors = useSelector(state => state.theme.theme);
  const language = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(language);

  const RenderHeader = ({title}) => {
    return (
      <CText type="b20" style={styles.mt20}>
        {title}
      </CText>
    );
  };

  const onPressItem = item => {
    dispatch(changeLanguageAction(item));
    setIsSelected(item);
  };

  const RenderData = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item.lnName)}
        style={localStyles.settingsContainer}>
        <CText type="s18">{item.lnName}</CText>
        <View style={localStyles.rightContainer}>
          <Ionicons
            name={
              isSelected === item.lnName
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            size={moderateScale(24)}
            color={colors.textBlue}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.language} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.ph20}>
        <SectionList
          sections={languageData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <RenderData item={item} />}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({section: {title}}) => (
            <RenderHeader title={title} />
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt20,
  },
});
