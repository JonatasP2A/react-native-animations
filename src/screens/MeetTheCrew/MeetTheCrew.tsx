import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Button, Crew, Swiper } from './components';
import { CREW } from './components/Crew';
import { CIRCLE_WIDTH } from './components/Swiper/styles';
import { Spacing } from './styleguide';
import {
  Name,
  Description,
  Header,
  SmallerTitle,
  Title,
  BackgroundTitle,
  Info,
} from './styles';

const { width } = Dimensions.get('window');

const MeetTheCrew = () => {
  const [character, setCharacter] = useState(0);
  const translateX = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      CREW.map(
        (_, index) => (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2
      ),
      CREW.map((character) => character.backgroundColor)
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={containerStyle}
    >
      <Header>
        <SmallerTitle>MEET THE</SmallerTitle>
        <Title>CREW</Title>
        <BackgroundTitle>CREW</BackgroundTitle>
      </Header>
      <Crew x={translateX} />
      <Info>
        <Name>{CREW[character].name}</Name>
        <Description>{CREW[character].description}</Description>
      </Info>
      <Swiper
        x={translateX}
        min={0}
        max={width - Spacing.xl - CIRCLE_WIDTH}
        setCharacter={setCharacter}
      />
      <Button x={translateX} />
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.xl,
  },
});

export default MeetTheCrew;
