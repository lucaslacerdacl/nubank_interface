import React from 'react';
import { Container } from './style';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Content from '../components/Content';
import { Animated } from 'react-native';

export default function Main () {

  const translateY = new Animated.Value(0);

  return (
    <Container>
      <Header />
      <Content translateY={translateY} />
      <Tabs translateY={translateY} />
    </Container>
  )
}
