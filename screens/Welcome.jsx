import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../constants/styles';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {useTranslation} from 'react-i18next';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/userRedux';

const Welcome = () => {
  const {currentUser} = useSelector(state => state.user);

  const {t} = useTranslation();

  const dispatch = useDispatch();

  // handle the logout function here. you don't have to pass any arguments to the logout function
  // as we are setting the user back to null value
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />
      <View style={styles.container}>
        <View style={styles.column}>
          <CustomText text={`${t('welcome')} ${currentUser?.name}`} />
          <CustomText text={`${t('what_can_we_do')}`} />
          <CustomButton buttonText={t('logout')} onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
