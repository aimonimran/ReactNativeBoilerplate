import React from 'react';
import styled from 'styled-components';
import CustomText from '../CustomText';

const Error = styled(CustomText)`
  color: red;
`;

const ErrorMessage = ({error}) => {
  if (!error) return null;

  return <Error>{error}</Error>;
};

export default ErrorMessage;
