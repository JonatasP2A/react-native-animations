import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Colors, Spacing } from '../../styleguide';
import { CIRCLE_WIDTH } from '../Swiper/styles';

import { Circle1, Circle2, Circle3, Images, Image } from './styles';

export const CREW = [
  {
    name: 'Dogboy',
    description: 'Recruit the dog boy',
    circle1: Colors.brown300,
    circle2: Colors.brown200,
    circle3: Colors.brown100,
    backgroundColor: Colors.brown400,
    buttonColor: Colors.brown500,
    picture: require('../../assets/dogboy.png'),
    aspectRatio: 220 / 278,
  },
  {
    name: 'Foxtrot',
    description: 'Recruit the dancer fox',
    circle1: Colors.orange300,
    circle2: Colors.orange200,
    circle3: Colors.orange100,
    backgroundColor: Colors.orange400,
    buttonColor: Colors.orange500,
    picture: require('../../assets/foxtrot.png'),
    aspectRatio: 220 / 278,
  },
  {
    name: 'Lionel',
    description: 'Recruit the soccer player lion',
    circle1: Colors.yellow300,
    circle2: Colors.yellow200,
    circle3: Colors.yellow100,
    backgroundColor: Colors.yellow400,
    buttonColor: Colors.yellow500,
    picture: require('../../assets/lionel.png'),
    aspectRatio: 220 / 278,
  },
];
const { width } = Dimensions.get('window');
const AnimatedImages = Animated.createAnimatedComponent(Images);
const AnimatedCircle1 = Animated.createAnimatedComponent(Circle1);
const AnimatedCircle2 = Animated.createAnimatedComponent(Circle2);
const AnimatedCircle3 = Animated.createAnimatedComponent(Circle3);

interface CrewProps {
  x: Animated.SharedValue<number>;
}

const Crew = ({ x }: CrewProps) => {
  const c1 = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      CREW.map(
        (_, index) => (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2
      ),
      CREW.map((character) => character.circle1)
    );
    return {
      backgroundColor,
    };
  });

  const c2 = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      CREW.map(
        (_, index) => (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2
      ),
      CREW.map((character) => character.circle2)
    );
    return {
      backgroundColor,
    };
  });

  const c3 = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      CREW.map(
        (_, index) => (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2
      ),
      CREW.map((character) => character.circle3)
    );
    return {
      backgroundColor,
    };
  });

  return (
    <AnimatedCircle1 style={c1}>
      <AnimatedCircle2 style={c2}>
        <AnimatedCircle3 style={c3}>
          {CREW.map((character, index) => {
            const inputRange = [
              ((index - 1) * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2,
              (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2,
              ((index + 1) * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2,
            ];

            const style = useAnimatedStyle(() => {
              const translateX = interpolate(x.value, inputRange, [
                width / 2,
                0,
                -width / 2,
              ]);
              const scale = interpolate(x.value, inputRange, [0.45, 1, 0.45]);
              return {
                transform: [{ translateX }, { scale }],
              };
            });

            return (
              <AnimatedImages key={index} index={index} style={style}>
                <Image
                  source={character.picture}
                  aspectRatio={character.aspectRatio}
                />
              </AnimatedImages>
            );
          })}
        </AnimatedCircle3>
      </AnimatedCircle2>
    </AnimatedCircle1>
  );
};

export default Crew;
