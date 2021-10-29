import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Feather as F } from '@expo/vector-icons';
import { Colors, Spacing, FontSize } from '../../styleguide';

const { width } = Dimensions.get('window');

export const ButtonContainer = styled.TouchableOpacity`
  height: 60px;
  width: ${width - Spacing.xl * 2}px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  margin-top: ${Spacing.l}px;
  position: relative;
`;

export const Text = styled.Text`
  color: ${Colors.white};
  font-size: ${FontSize.s}px;
  font-family: AirbnbCereal-Medium;
  text-decoration-line: underline;
`;

export const Feather = styled(F)`
  position: absolute;
  right: 34px;
`;
