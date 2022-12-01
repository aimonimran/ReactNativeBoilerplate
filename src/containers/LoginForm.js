import {Image as RNImage, View as RNView} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';

const Image = styled(RNImage)`
  align-self: center;
  width: 80px;
  height: 80px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const View = styled(RNView)`
  padding: 10px;
`;

const LoginForm = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View>
      <Image source={require('../../assets/logo.png')} />
      <CustomForm onSubmit={onSubmit}>
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
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
      </CustomForm>
    </View>
  );
};

export default LoginForm;
