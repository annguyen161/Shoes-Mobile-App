//Library import
import React from 'react';
import {ScrollView, View} from 'react-native';

// Local import
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import CText from '../../../components/common/CText';
import CHeader from '../../../components/common/CHeader';
import {privacyPolicyData} from '../../../api/constant';

export default PrivacyPolicy = () => {
  const RenderData = ({item}) => {
    return (
      <View style={styles.mt15}>
        <CText type={'b18'} style={styles.mb10}>
          {item.title}
        </CText>
        <CText type={'r16'} style={[styles.font16, styles.mb10]}>
          {item.description}
        </CText>
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.privacyPolicy} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}>
        {privacyPolicyData.map((item, index) => {
          return <RenderData item={item} key={index} />;
        })}
      </ScrollView>
    </CSafeAreaView>
  );
};
