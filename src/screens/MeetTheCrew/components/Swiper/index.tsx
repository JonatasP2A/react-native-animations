import React, { useCallback } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { clamp, snapPoint } from 'react-native-redash';
import { CREW } from '../Crew';

import {
  Container,
  Progress,
  Circle,
  CIRCLE_WIDTH,
  CircleSmall,
  Characters,
  Image,
} from './styles';
import { Colors, Spacing } from '../../styleguide';

const AnimatedProgress = Animated.createAnimatedComponent(Progress);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const { width } = Dimensions.get('window');
const snapPoints = CREW.map(
  (_, i) => (i * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2
);

interface SwiperProps {
  x: Animated.SharedValue<number>;
  min: number;
  max: number;
  setCharacter: (value: number) => void;
}

const Swiper = ({ x, min, max, setCharacter }: SwiperProps) => {
  const index = useCallback((position) => {
    setCharacter(snapPoints.findIndex((point) => point === position));
  }, []);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = x.value;
    },
    onActive: ({ translationX }, ctx) => {
      x.value = clamp(ctx.offsetX + translationX, min, max);
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(x.value, velocityX, snapPoints);
      x.value = withSpring(dest, {
        velocity: velocityX,
        overshootClamping: true,
      });
      runOnJS(index)(dest);
    },
  });
  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(x.value, snapPoints, [
      Colors.brown100,
      Colors.orange100,
      Colors.yellow100,
    ]);
    return {
      width: x.value,
      backgroundColor,
    };
  });

  const onPress = (index: number) => {
    x.value = withTiming((index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2);
    setCharacter(index);
  };

  return (
    <View>
      <Container>
        <AnimatedProgress style={style}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <AnimatedCircle>
              <CircleSmall />
            </AnimatedCircle>
          </PanGestureHandler>
        </AnimatedProgress>
      </Container>
      <Characters>
        {CREW.map((character, index) => (
          <TouchableOpacity key={index} onPress={() => onPress(index)}>
            <Image source={character.picture} />
          </TouchableOpacity>
        ))}
      </Characters>
    </View>
  );
};

export default Swiper;
