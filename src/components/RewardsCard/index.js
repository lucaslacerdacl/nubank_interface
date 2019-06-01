import React, { Component } from 'react';
import {
  Container,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Points,
  PointsValue,
  PointsDescription,
  Description,
  PointsCount
} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RewardsCard extends Component {

  render() {
    return (
      <Container>
        <CardHeader>
          <Icon name="gift" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Points>
            <PointsValue>1.501</PointsValue>
            <PointsDescription> pts</PointsDescription>
          </Points>
          <Description>
            Você acumulou <PointsCount>7.886 pontos</PointsCount> nos últimos 30 dias.
          </Description>
        </CardContent>
        <CardFooter>
          <Icon name="food-fork-drink" size={28} color="#666" />
          <Annotation>Apagar compra de R$ 3,50 em Mc Donald com 350 pts</Annotation>
          <Icon name="chevron-right" size={28} color="#999" />
        </CardFooter>
      </Container>
    );
  }
}
