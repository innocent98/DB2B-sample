import {View, SafeAreaView, Alert} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {useTranslation} from 'react-i18next';
import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

// Dummy email for the purpose of this example. In a real-world app, you would fetch and validate this data.
const dummy_email = 'email@example.com';

const Login = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');

  const handleSubmitEmail = () => {
    if (!email) {
      return Alert.alert(t('empty_input'));
    }

    if (email !== dummy_email) {
      return Alert.alert(t('invalid_email'));
    }

    navigation.navigate('LoginPassword');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.column}>
          <CustomText text={t('login')} />

          <CustomInput
            placeholder={t('enterEmail')}
            width={'100%'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            onChangeText={value => setEmail(value)}
          />

          <CustomButton
            buttonText={t('continue')}
            onPress={handleSubmitEmail}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
