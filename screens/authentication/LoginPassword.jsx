import {View, SafeAreaView, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../constants/styles';
import {useTranslation} from 'react-i18next';
import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../redux/userRedux';
import {updateExpiresIn, updateLoginCount} from '../../redux/loginRedux';

// Dummy user data for the purpose of this example. In a real-world app, you would fetch and validate this data.
const data = {
  email: 'email@example.com',
  password: '1234',
  name: 'John Doe',
};

const LoginPassword = () => {
  const {loginCount, expiresIn} = useSelector(state => state.loginAttempt);
  const {t} = useTranslation();
  const navigation = useNavigation();

  // console.log('loginCount', loginCount);

  // creating dispatch function to dispatch the user so we can have it globally
  // in our application using the redux state management tools.
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState('');

  const handleSubmitPassword = () => {
    if (!password) {
      return Alert.alert(t('password_required'));
    }

    if (password !== data.password) {
      // return setLoginAttempt(loginAttempt + 1);
      return dispatch(updateLoginCount(loginCount + 1));
    }

    // if there is password and the password is valid, proceed to login the user
    // and update the user state with the user data provided accordingly
    dispatch(userLogin(data));
    dispatch(updateLoginCount(0));
  };

  useEffect(() => {
    const newTime = new Date();
    const currentTime = newTime.getTime();

    // console.log(expiresIn, currentTime);

    if (expiresIn <= currentTime) {
      dispatch(updateLoginCount(0));
    }
  }, [expiresIn]);

  useEffect(() => {
    const currentTime = new Date();
    // console.log(loginCount);

    if (loginCount >= 1 && loginCount <= 2) {
      Alert.alert(`${t('incorrect_password')} ${3 - loginCount}`);
    }

    if (loginCount === 3) {
      const expiration = currentTime.setHours(currentTime.getHours() + 3); // Adds 3 hours to the current time

      if (expiresIn < currentTime.getTime()) {
        dispatch(updateExpiresIn(expiration));
      }

      Alert.alert(t('login_failed_attempts'));
      navigation.goBack();
    }
  }, [loginCount]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />
      <View style={styles.container}>
        <View style={styles.column}>
          <CustomText text={t('login')} />

          <CustomInput
            placeholder={t('enterEmail')}
            width={'100%'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />

          <CustomButton
            buttonText={t('continue')}
            onPress={handleSubmitPassword}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPassword;
