import React from 'react';
import {useFormikContext} from 'formik';
import CustomTextInput from '../../CustomTextInput/CustomTextInput';
import {ErrorMessage} from '../ErrorMessage';

const CustomFormField = ({name, ...rest}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
      <CustomTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...rest}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
};

export default CustomFormField;
