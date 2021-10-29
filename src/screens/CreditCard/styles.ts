import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TextInputProps {
  small?: boolean;
}

export const Container = styled.View``;

export const Input = styled.TextInput<TextInputProps>`
  width: 100%;
  border-width: 1px;
  border-color: #000;
  padding: 12px 16px;
  margin-top: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;

  color: #000;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(8)}px;
`;
