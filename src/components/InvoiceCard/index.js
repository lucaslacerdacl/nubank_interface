import React, { Component } from 'react';
import {
  Container,
  CardTop,
  CardHeaderContent,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  InvoiceValue,
  Description,
  Currency,
  Decimals,
  LimitAvaliable,
  LimitDescription,
  LimitValue,
  ConsumerIndex,
  LineTop,
  LineCenter,
  LineBottom
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InvoiceCard extends Component {

  render() {
    return (
      <Container>
        <CardTop>
          <CardHeaderContent>
            <CardHeader>
              <Icon name="credit-card" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>FATURA ATUAL</Title>
              <InvoiceValue>
                <Currency>R$ </Currency>
                <Description>5.961</Description>
                <Decimals>,91</Decimals>
              </InvoiceValue>
              <LimitAvaliable>
                <LimitDescription>Limite disponível </LimitDescription>
                <LimitValue>R$ 1.431,29</LimitValue>
              </LimitAvaliable>
            </CardContent>
          </CardHeaderContent>
          <ConsumerIndex>
            <LineTop />
            <LineCenter />
            <LineBottom />
          </ConsumerIndex>
        </CardTop>

        <CardFooter>
          <Icon name="shopping-cart" size={28} color="#666" />
          <Annotation>Compra mais recente em Supermercados BH no valor de 53,90 hoje</Annotation>
          <Icon name="chevron-right" size={28} color="#999" />
        </CardFooter>
      </Container>
    );
  }
}
