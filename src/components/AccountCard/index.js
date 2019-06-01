import React, { Component } from 'react';
import {
  Container,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Description,
  AmountBlock
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from "react-native";

export default class AccountCard extends Component {

  state = {
    showAmount: false
  }

  setAmountVisibility = () => {
    this.setState(prevState => ({
      showAmount: !prevState.showAmount
    }))
  }

  render() {
    const { showAmount } = this.state;

    return (
      <Container>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <TouchableWithoutFeedback onPress={this.setAmountVisibility} >
            <Icon name={showAmount ? 'visibility' : 'visibility-off'} size={28} color="#999" />
          </TouchableWithoutFeedback>
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          {showAmount ? <Description>R$ 5.000,00</Description> : <AmountBlock />}
        </CardContent>
        <CardFooter>
          <Icon name="account-balance" size={28} color="#666" />
          <Annotation>Transferência de R$ 20,00 recebida de Diego Schell hoje às 06:00h</Annotation>
          <Icon name="chevron-right" size={28} color="#999" />
        </CardFooter>
      </Container>
    );
  }
}
