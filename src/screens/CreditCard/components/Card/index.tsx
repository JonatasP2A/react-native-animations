import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Mastercard, Visa } from '../../assets';

import {
  Container,
  Front,
  Top,
  CreditCardBrand,
  CreditCardNumber,
  Footer,
  Left,
  Title,
  Info,
  Right,
  Back,
  Line,
  WhiteLine,
  SmallLine,
  Cvv,
} from './styles';

interface CardProps {
  x: Animated.SharedValue<number>;
  cardNumber: string;
  name: string;
  valid: string;
  ccv: string;
}

const { width } = Dimensions.get('window');

export const Card = ({ x, cardNumber, name, valid, ccv }: CardProps) => {
  const backStyles = useAnimatedStyle(() => {
    const rotateY = interpolate(x.value, [0, width], [180, 360]);

    return {
      transform: [{ rotateY: `${rotateY}deg` }],
    };
  });

  const frontStyles = useAnimatedStyle(() => {
    const rotateY = interpolate(x.value, [0, width], [0, 180]);

    return {
      transform: [{ rotateY: `${rotateY}deg` }],
    };
  });

  const getCardBrandIcon = () => {
    const masterCardPrefixes = ['51', '52', '53', '54', '55'];

    if (masterCardPrefixes.includes(cardNumber.slice(0, 2))) {
      return <Mastercard />;
    }

    if (cardNumber.slice(0, 1) === '4') {
      return <Visa />;
    }

    return <Mastercard />;
  };

  return (
    <Container>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backfaceVisibility: 'hidden',
            width: '100%',
            height: RFPercentage(25),
          },
          backStyles,
        ]}
      >
        <Back
          colors={['#aa4b6b', '#6b6b83', '#3b8d99']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <Line />
          <WhiteLine>
            <SmallLine />
            <SmallLine />
            <SmallLine />
            <SmallLine />
            <Cvv>{ccv === '' ? '000' : ccv}</Cvv>
          </WhiteLine>
        </Back>
      </Animated.View>

      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backfaceVisibility: 'hidden',
            width: '100%',
            height: RFPercentage(25),
          },
          frontStyles,
        ]}
      >
        <Front
          colors={['#aa4b6b', '#6b6b83', '#3b8d99']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <Top>
            <CreditCardBrand>{getCardBrandIcon()}</CreditCardBrand>
          </Top>
          <CreditCardNumber>
            {cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}
          </CreditCardNumber>
          <Footer>
            <Left>
              <Title>Nome</Title>
              <Info>{name === '' ? 'JP2A' : name}</Info>
            </Left>

            <Right>
              <Title>Validade</Title>
              <Info>{valid === '' ? '12/27' : valid}</Info>
            </Right>
          </Footer>
        </Front>
      </Animated.View>
    </Container>
  );
};
