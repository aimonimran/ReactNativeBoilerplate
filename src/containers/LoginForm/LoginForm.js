import {TouchableOpacity, View as RNView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {authActions} from '../../redux/auth/AuthSlice';
import React from 'react';
import styled from 'styled-components';
import {loginInitialValues} from '../../constants/Formik/Initials';
import {loginValidationSchema} from '../../constants/Formik/Schemas';
import {APP_ROUTES} from '../../constants/Routes/routes';
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

const Button = styled(CustomText)`
  color: ${({theme}) => theme.colors.primary};
`;

const LoginForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = values => dispatch(authActions.asyncLoginAction(values));

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
