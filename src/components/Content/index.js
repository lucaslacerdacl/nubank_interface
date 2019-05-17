import React from 'react';
import { Container, Card, CardContent, CardHeader, Title, Description, CardFooter, Annotation } from './style';
import Menu from '../Menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main () {
  return (
    <Container>
        <Menu />
        <Card>
            <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#999" />
            </CardHeader>
            <CardContent>
                <Title>
                    Saldo disponível
                </Title>
                <Description>
                    R$ 5.000,00
                </Description>
            </CardContent>
            <CardFooter>
                <Icon name="account-balance" size={28} color="#666" />
                <Annotation>
                    Transferência de R$ 20,00 recebida de Diego Schell hoje às 06:00h
                </Annotation>
                <Icon name="chevron-right" size={28} color="#999" />
            </CardFooter>
        </Card>
    </Container>
  )
}
