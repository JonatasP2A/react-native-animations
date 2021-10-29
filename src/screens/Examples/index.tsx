import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RectButton } from 'react-native-gesture-handler';

import { RootStackParamList } from '../../routes';
import { Container, Content, Text } from './styles';

const examples = [
  {
    screen: 'MeetTheCrew',
    title: '🦊 Meet The Crew',
  },
  {
    screen: 'CreditCard',
    title: '💳 Credit Card',
  },
] as const;

type Props = NativeStackScreenProps<RootStackParamList, 'Examples'>;

const Examples = ({ navigation }: Props) => {
  return (
    <Container contentContainerStyle={{ paddingBottom: 32 }}>
      {examples.map((thumbnail) => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigation.navigate(thumbnail.screen)}
        >
          <Content>
            <Text>{thumbnail.title}</Text>
          </Content>
        </RectButton>
      ))}
    </Container>
  );
};

export default Examples;
