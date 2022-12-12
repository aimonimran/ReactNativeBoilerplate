import React from 'react';
import styled from 'styled-components';
import CustomText from '../CustomText';

const Error = styled(CustomText)`
  color: ${({theme}) => theme.colors.danger};
  font-size: ${({theme}) => theme.fonts.fontSize.xs}px;
  margin-top: -8px;
`;

const ErrorMessage = ({error}) => {
  if (!error) return null;

  return <Error>{error}</Error>;
};

export default ErrorMessage;
