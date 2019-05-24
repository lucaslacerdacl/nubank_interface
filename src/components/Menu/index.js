import React, { Component } from 'react'
import {
	Container,
	Code,
	AccountDescription,
	Title,
	Description,
	MenuItems,
	MenuItem,
	Text,
	SignOutButton,
	SignOutButtonText
} from './style';

import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Menu extends Component {
	render() {
		return (
			<Container style={{
				opacity: this.props.translateY.interpolate({
					inputRange: [0, 150],
					outputRange: [0, 1]
				})
			}}>
				<Code>
					<QRCode value="http://google.com" size={80} bgColor="#8B10AE" fgColor="#FFF" />
				</Code>
				<AccountDescription>
					<Title>Banco</Title>
					<Description>260 - Nu Pagamentos S.A.</Description>
				</AccountDescription>
				<AccountDescription>
					<Title>Agência</Title>
					<Description>0001</Description>
				</AccountDescription>
				<AccountDescription>
					<Title>Conta</Title>
					<Description>2793776-7</Description>
				</AccountDescription>
				<MenuItems>
					<MenuItem>
						<Icon name="help-outline" size={28} color="#FFF" />
						<Text>Me ajuda</Text>
						<Icon name="chevron-right" size={28} color="#FFF" />
					</MenuItem>
					<MenuItem>
						<Icon name="person-outline" size={28} color="#FFF" />
						<Text>Perfil</Text>
						<Icon name="chevron-right" size={28} color="#FFF" />
					</MenuItem>
					<MenuItem>
						<Icon name="attach-money" size={28} color="#FFF" />
						<Text>Configurar NuConta</Text>
						<Icon name="chevron-right" size={28} color="#FFF" />
					</MenuItem>
					<MenuItem>
						<Icon name="credit-card" size={28} color="#FFF" />
						<Text>Configurar Cartão</Text>
						<Icon name="chevron-right" size={28} color="#FFF" />
					</MenuItem>
					<MenuItem>
						<Icon name="card-giftcard" size={28} color="#FFF" />
						<Text>Configurar Rewards</Text>
						<Icon name="chevron-right" size={28} color="#FFF" />
					</MenuItem>
					<MenuItem>
						<Icon name="smartphone" size={28} color="#FFF" />
						<Text>Configurações do app</Text>
						<Icon name="chevron-right" size={28} color="#FFF" />
					</MenuItem>
					<SignOutButton>
						<SignOutButtonText>SAIR DO APP</SignOutButtonText>
					</SignOutButton>
				</MenuItems>
			</Container>
		);
	}
}
