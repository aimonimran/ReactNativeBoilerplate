import {TouchableOpacity, View as RNView} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {loginInitialValues} from '../constants/Formik/Initials';
import {loginValidationSchema} from '../constants/Formik/Schemas';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import CustomText from '../components/CustomText';
import {APP_ROUTES} from '../constants/Routes/routes';
import {useNavigation} from '@react-navigation/native';

const View = styled(RNView)`
  padding: 10px;
  justify-content: center;
  flex: 1;
`;

const Text = styled(CustomText)`
  align-self: center;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: ${({theme}) => theme.fonts.fontSize.xxl}px;
  font-weight: ${({theme}) => theme.fonts.fontWeight.bold};
  color: ${({theme}) => theme.colors.primary};
`;

const Button = styled(CustomText)`
  color: ${({theme}) => theme.colors.primary};
`;

const LoginForm = () => {
  const navigation = useNavigation();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View>
      <Text>Login</Text>
      <CustomForm
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}>
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          name="username"
          placeholder="Username"
          textContentType="username"
        />
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
        <CustomText>
          Need an account?
          <TouchableOpacity
            onPress={() => navigation.navigate(APP_ROUTES.Auth.Signup)}>
            <Button>Signup</Button>
          </TouchableOpacity>
        </CustomText>
      </CustomForm>
    </View>
  );
};

export default LoginForm;
