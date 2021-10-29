import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Spacing } from '../../styleguide';
import { CREW } from '../Crew';
import { CIRCLE_WIDTH } from '../Swiper/styles';

import { ButtonContainer, Text, Feather } from './styles';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(ButtonContainer);

const { width } = Dimensions.get('window');

interface ButtonProps {
  x: Animated.SharedValue<number>;
}

const Button = ({ x }: ButtonProps) => {
  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      CREW.map(
        (_, index) => (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2
      ),
      CREW.map((character) => character.buttonColor)
    );
    return {
      backgroundColor,
    };
  });

  return (
    <AnimatedTouchableOpacity style={style}>
      <Text>Recruit</Text>
      <Feather name="check" color="#FFF" size={20} />
    </AnimatedTouchableOpacity>
  );
};

export default Button;
