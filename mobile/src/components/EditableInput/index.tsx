import React from 'react';

import { TextInputProps } from 'react-native';

import { Container, Input, DisabledPlaceholder } from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  editable?: boolean;
}

const EditableInput: React.FC<Props> = ({ placeholder, editable, ...rest }) => {
  return (
    <>
      {editable ? (
        <Input placeholder={placeholder} {...rest}></Input>
      ) : (
        <Container>
          <DisabledPlaceholder>{placeholder}</DisabledPlaceholder>
        </Container>
      )}
    </>
  );
};

export default EditableInput;
