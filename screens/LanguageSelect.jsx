/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {styles} from '../constants/styles';
import {useTranslation} from 'react-i18next';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import i18n from '../utils/i18n';
import {updateLanguageState} from '../redux/langRedux';

const LanguageSelect = () => {
  const {currentLang} = useSelector(state => state.language);

  // import t from react-i18next to translate the content to the selected/current language
  const {t} = useTranslation();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang]); // Run this effect when currentLang changes

  // update language state with the state management tool.
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    dispatch(updateLanguageState(lng));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <View style={styles.container}>
        <View style={[styles.column, {alignItems: 'center'}]}>
          <Text>{t('chooseLanguage')}</Text>

          <CustomButton
            buttonText={'English'}
            onPress={() => {
              navigation.navigate('Login');
              changeLanguage('en');
            }}
          />

          <CustomButton
            buttonText={'Français'}
            onPress={() => {
              navigation.navigate('Login');
              changeLanguage('fr');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LanguageSelect;
