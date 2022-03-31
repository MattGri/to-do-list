import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form``;

const InformationInput = styled.input`
    display: block;
    margin: 0 auto;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

const AddTodo = () => {
  const [value, setValue] = useState('');

  const SubmitForm = (e) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <>
      <Title>My Todo List</Title>
      <Form onSubmit={SubmitForm}>
        <InformationInput
          value={value}
          placeholder="write"
          onChange={(e) => setValue(e.target.value)}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  );
};

export default AddTodo;
