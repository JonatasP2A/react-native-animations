import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import { Spacing } from '../../styleguide';

const { width: wWidth } = Dimensions.get('window');
const width = wWidth - Spacing.xs * 2;

interface ImagesProps {
  index: number;
}

interface ImageProps {
  aspectRatio: number;
}

export const Circle1 = styled.View`
  width: ${width}px;
  height: ${width}px;
  border-radius: ${width / 2}px;
  align-items: center;
  justify-content: center;
`;

export const Circle2 = styled.View`
  width: ${width - Spacing.m}px;
  height: ${width - Spacing.m}px;
  border-radius: ${(width - Spacing.m) / 2}px;
  align-items: center;
  justify-content: center;
`;

export const Circle3 = styled.View`
  position: relative;
  width: ${width - Spacing.m * 2}px;
  height: ${width - Spacing.m * 2}px;
  border-radius: ${(width - Spacing.m * 2) / 2}px;
`;

export const Images = styled.View<ImagesProps>({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
});

export const Image = styled.Image<ImageProps>`
  width: ${width - Spacing.xl * 2}px;
  height: ${({ aspectRatio }) => width - Spacing.xl * 2 * aspectRatio}px;
`;
