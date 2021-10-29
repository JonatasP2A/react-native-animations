import React, { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Card } from './components/Card';
import { maskCardNumber, maskCardValidate } from './utils/masks';

import { Container, Input, Row } from './styles';

const { width } = Dimensions.get('window');

const CreditCard = () => {
  const scrollX = useSharedValue(0);

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [valid, setValid] = useState('');
  const [ccv, setCcv] = useState('');

  const cardNameInputRef = useRef<TextInput>(null);
  const validInputRef = useRef<TextInput>(null);
  const ccvInputRef = useRef<TextInput>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });

  const handleInputFocus = () => {
    if (scrollX.value !== 0) {
      scrollX.value = withTiming(0);
    }
  };

  const handleCCVInputFocus = () => {
    scrollX.value = withTiming(width);
  };

  const handleInputBlur = () => {
    scrollX.value = withTiming(0);
  };

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={-300}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, padding: 24 }}
      >
        <Container>
          <Card
            x={scrollX}
            cardNumber={cardNumber}
            name={cardName}
            valid={valid}
            ccv={ccv}
          />

          <Animated.ScrollView
            horizontal
            bounces={false}
            snapToInterval={width}
            decelerationRate="fast"
            scrollEventThrottle={16}
            contentContainerStyle={{ width: width * 2 }}
            onScroll={scrollHandler}
            showsHorizontalScrollIndicator={false}
            style={StyleSheet.absoluteFillObject}
          />
        </Container>

        <Input
          onFocus={handleInputFocus}
          value={cardNumber}
          onChangeText={(value) => setCardNumber(maskCardNumber(value))}
          maxLength={19}
          placeholder="Número do cartão"
          placeholderTextColor="#999"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => {
            cardNameInputRef.current?.focus();
          }}
        />

        <Input
          ref={cardNameInputRef}
          onFocus={handleInputFocus}
          value={cardName}
          onChangeText={(value) => setCardName(value)}
          placeholder="Nome do titular"
          placeholderTextColor="#999"
          returnKeyType="next"
          onSubmitEditing={() => {
            validInputRef.current?.focus();
          }}
        />

        <Row>
          <View style={{ width: '48%' }}>
            <Input
              small
              ref={validInputRef}
              onFocus={handleInputFocus}
              value={valid}
              onChangeText={(value) => setValid(maskCardValidate(value))}
              maxLength={5}
              placeholder="Validade"
              placeholderTextColor="#999"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() => {
                ccvInputRef.current?.focus();
              }}
            />
          </View>

          <View style={{ width: '48%' }}>
            <Input
              small
              ref={ccvInputRef}
              onBlur={handleInputBlur}
              onFocus={handleCCVInputFocus}
              value={ccv}
              onChangeText={(value) => setCcv(value)}
              maxLength={3}
              placeholder="CCV"
              placeholderTextColor="#999"
              returnKeyType="send"
              keyboardType="number-pad"
            />
          </View>
        </Row>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreditCard;
