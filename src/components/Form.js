import React from 'react';

const Form = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    state: 'PENDING',
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return <div></div>;
};

export default Form;
