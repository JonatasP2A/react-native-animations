import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  background: #f2f2f2;
`;

export const Content = styled.View`
  background-color: white;
  padding: ${RFValue(8) * 2}px;
  border-bottom-width: 1px;
  border-color: #f2f2f2;
`;

export const Text = styled.Text`
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(22)}px;
`;
