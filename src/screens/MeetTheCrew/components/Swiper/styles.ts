import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Colors, Spacing } from '../../styleguide';

const { width } = Dimensions.get('window');
export const CIRCLE_WIDTH = 30;

export const Container = styled.View`
  height: 5px;
  width: ${width - Spacing.xl * 2}px;
  margin: 18px 0;
  border-radius: 2.5px;
  background-color: ${Colors.brown500};
`;

export const Progress = styled.View`
  height: 5px;
  position: relative;
`;

export const Circle = styled.View`
  position: absolute;
  bottom: ${-(CIRCLE_WIDTH / 2)}px;
  right: 0;
  height: ${CIRCLE_WIDTH}px;
  width: ${CIRCLE_WIDTH}px;
  border-radius: ${CIRCLE_WIDTH / 2}px;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
`;

export const CircleSmall = styled.View`
  height: ${CIRCLE_WIDTH / 2}px;
  width: ${CIRCLE_WIDTH / 2}px;
  border-radius: ${CIRCLE_WIDTH / 4}px;
  background-color: ${Colors.orange100};
`;

export const Characters = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 40px;
  height: 50px;
`;
