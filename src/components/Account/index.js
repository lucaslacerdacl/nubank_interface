import React, { Component } from 'react';
import {
	Title,
	Description
} from './style';

export default class Account extends Component {

	render() {
		return (
      <>
        <Title>Saldo disponível</Title>
        <Description>R$ 5.000,00</Description>
      </>
		)
	}
}
