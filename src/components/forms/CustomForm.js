import React from 'react';
import {Formik} from 'formik';
import {loginInitialValues} from '../../constants/Formik/Initials';
import {loginValidationSchema} from '../../constants/Formik/Schemas';

const CustomForm = ({onSubmit, children}) => {
  return (
    <Formik
      initialValues={loginInitialValues}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default CustomForm;
