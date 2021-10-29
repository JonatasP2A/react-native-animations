import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

const CARD_HEIGHT = RFPercentage(25);

export const Container = styled.View`
  width: 100%;
  height: ${CARD_HEIGHT}px;
`;

export const Front = styled(LinearGradient)({
  ...StyleSheet.absoluteFillObject,
  flex: 1,
  width: '100%',
  height: CARD_HEIGHT,
  padding: RFValue(16),
  backgroundColor: 'white',
  borderRadius: RFValue(16),
});

export const Top = styled.View`
  height: 36px;
`;

export const CreditCardBrand = styled.View`
  margin-left: auto;
`;

export const CreditCardNumber = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-size: ${RFValue(24)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: auto;
  justify-content: space-between;
`;

export const Left = styled.View``;

export const Title = styled.Text`
  margin-bottom: ${RFValue(8)}px;
`;

export const Info = styled.Text`
  text-transform: uppercase;
`;

export const Right = styled.View``;

export const Back = styled(Front)`
  padding: 0;
`;

export const Line = styled.View`
  margin-top: ${RFPercentage(4)}px;
  height: ${RFValue(36)}px;
  width: 100%;
  background-color: #000;
`;

export const WhiteLine = styled.View`
  position: relative;
  justify-content: space-around;
  margin: ${RFValue(16)}px ${RFValue(16)}px 0;
  height: ${RFValue(36)}px;
  background-color: #f8f8f8;
`;

export const SmallLine = styled.View`
  width: 80%;
  height: ${RFValue(4)}px;
  background-color: #f3dea7;
`;

export const Cvv = styled.Text`
  position: absolute;
  top: ${RFValue(10)}px;
  /* bottom: auto; */
  right: ${RFValue(16)}px;
`;
