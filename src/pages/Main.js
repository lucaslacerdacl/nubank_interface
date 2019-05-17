import React from 'react';
import { Container } from './style';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Content from '../components/Content';

export default function Main () {
  return (
    <Container>
      <Header />
      <Content />
      <Tabs />
    </Container>
  )
}
