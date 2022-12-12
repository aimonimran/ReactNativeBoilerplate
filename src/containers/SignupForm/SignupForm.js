import {TouchableOpacity, View as RNView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import {APP_ROUTES} from '../../constants/Routes/routes';
import {signupInitialValues} from '../../constants/Formik/Initials';
import {signupValidationSchema} from '../../constants/Formik/Schemas';
import {CustomText} from '../../components/CustomText';
import {SubmitButton} from '../../components/forms/SubmitButton';
import {CustomFormField} from '../../components/forms/CustomFormField';
import {CustomForm} from '../../components/forms/CustomForm';

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

const Redirect = styled(RNView)`
  flex-direction: row;
  justify-content: flex-start;
`;

const Button = styled(CustomText)`
  color: ${({theme}) => theme.colors.primary};
`;

const SignupForm = () => {
  const navigation = useNavigation();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View>
      <Text>Signup</Text>
      <CustomForm
        initialValues={signupInitialValues}
        validationSchema={signupValidationSchema}
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
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />
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
          keyboardType="default"
          name="fullName"
          placeholder="Full Name"
          textContentType="none"
        />
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          name="cell"
          placeholder="Phone Number"
          textContentType="telephoneNumber"
        />
        {/* {['Male', 'Female'].map((gender, i) => (
          <Radio
            key={`gender-${gender}-${i}`}
            title={gender}
            checked={value.gender === gender}
            setter={() => formik.setFieldValue(gender)}
          />
        ))} */}
        <SubmitButton title="Signup" />
        <Redirect>
          <CustomText>Need an account? </CustomText>
          <TouchableOpacity
            onPress={() => navigation.navigate(APP_ROUTES.Auth.Login)}>
            <Button>Login</Button>
          </TouchableOpacity>
        </Redirect>
      </CustomForm>
    </View>
  );
};

export default SignupForm;
