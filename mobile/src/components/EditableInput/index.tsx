import React from 'react';

import { TextInputProps } from 'react-native';

import {
  Container,
  Label,
  Input,
  InputContainer,
  DisabledPlaceholder
} from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  editable?: boolean;
}

const EditableInput: React.FC<Props> = ({ placeholder, editable, ...rest }) => {
  return (
    <Container>
      <Label>{placeholder}</Label>
      {editable ? (
        <Input placeholder={placeholder} {...rest}></Input>
      ) : (
        <InputContainer>
          <DisabledPlaceholder>{placeholder}</DisabledPlaceholder>
        </InputContainer>
      )}
    </Container>
  );
};

export default EditableInput;
