import {ScrollView, View} from 'react-native';
import CText from '../../../components/common/CText';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';

export default function Description() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.mh20, styles.mt15]}>
        <CText type={'r14'} style={styles.mb20}>
          {strings.descriptionTitle1}
        </CText>
        <CText type={'r14'}>{strings.descriptionTitle2}</CText>
        <CText type={'r14'} style={styles.mb20}>
          {strings.descriptionTitle3}
        </CText>
        <CText type={'r14'}>{strings.descriptionTitle4}</CText>
        <CText type={'r14'}>{strings.descriptionTitle5}</CText>
        <CText type={'b14'}>{strings.descriptionTitle6}</CText>
      </View>
    </ScrollView>
  );
}
