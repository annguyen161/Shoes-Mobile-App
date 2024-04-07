// Library Imports
import {FlatList} from 'react-native';
import React from 'react';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import UserDetailComponent from '../../../components/UserDetailComponent';
import {userDetail} from '../../../api/constant';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';

export default function InviteFriends() {
  return (
    <CSafeAreaView>
      <CHeader title={strings.inviteFriends} />
      <FlatList
        data={userDetail}
        renderItem={({item}) => (
          <UserDetailComponent
            userName={item?.name}
            userImage={item?.imgUrl}
            userDescription={item?.description}
          />
        )}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}
      />
    </CSafeAreaView>
  );
}
