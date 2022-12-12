import React from 'react';
import {Formik} from 'formik';

const CustomForm = ({initialValues, validationSchema, onSubmit, children}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default CustomForm;
