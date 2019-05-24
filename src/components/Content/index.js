import React, { Component } from 'react';
import {
	Container,
	Card,
	CardContent,
	CardHeader,
	Title,
	Description,
	CardFooter,
	Annotation
} from './style';
import Menu from '../Menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default class Content extends Component {

	render() {
		return (
			<Container>
				<Menu translateY={this.props.translateY} />
				<PanGestureHandler
					onGestureEvent={this.props.animatedEvent}
					onHandlerStateChange={this.props.onChange}>
					<Card style={{
						transform: [{
							translateY: this.props.translateY.interpolate({
								inputRange: [0, 460],
								outputRange: [0, 460],
								extrapolate: 'clamp'
							})
						}]
					}}>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#999" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponível</Title>
							<Description>R$ 5.000,00</Description>
						</CardContent>
						<CardFooter>
							<Icon name="account-balance" size={28} color="#666" />
							<Annotation>Transferência de R$ 20,00 recebida de Diego Schell hoje às 06:00h</Annotation>
							<Icon name="chevron-right" size={28} color="#999" />
						</CardFooter>
					</Card>
				</PanGestureHandler>
			</Container>
		)
	}
}
