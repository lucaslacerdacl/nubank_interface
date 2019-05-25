import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Account from '../Account';
import {
  Container,
  CardHeader,
  CardContent,
	CardFooter,
	Annotation
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Card extends Component {

  static props = {
    children: PropTypes.node
  }

  static Account = Account;

  renderAccount = () => {
    const { children } = this.props;

    return (
    <Container>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#999" />
      </CardHeader>
      <CardContent>
        { children }
      </CardContent>
      <CardFooter>
        <Icon name="account-balance" size={28} color="#666" />
        <Annotation>Transferência de R$ 20,00 recebida de Diego Schell hoje às 06:00h</Annotation>
        <Icon name="chevron-right" size={28} color="#999" />
      </CardFooter>
    </Container>);
  }

	render() {
		return (
      this.renderAccount()
		)
	}
}
