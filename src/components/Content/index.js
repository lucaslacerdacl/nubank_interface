import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	ContainerCard,
	TabsContainer
} from './style';
import Menu from '../Menu';
import Card from '../Card';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default class Content extends Component {

	static propTypes = {
		translateY: PropTypes.object,
		animatedEvent: PropTypes.object,
		onChange: PropTypes.func
	}

	setTranslationYStyle = () => {
		const { translateY } = this.props;

		return {
			transform: [{
				translateY: translateY.interpolate({
					inputRange: [0, 460],
					outputRange: [0, 460],
					extrapolate: 'clamp'
				})
			}]
		};
	}

	render() {
		const { translateY, animatedEvent, onChange } = this.props;

		return (
			<Container>
				<Menu translateY={translateY} />
				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onChange}>
					<ContainerCard style={this.setTranslationYStyle()}>
						<TabsContainer>
							<Card>
								<Card.Account />
							</Card>
							<Card>
								<Card.Account />
							</Card>
							<Card>
								<Card.Account />
							</Card>
						</TabsContainer>
					</ContainerCard>
				</PanGestureHandler>
			</Container>
		)
	}
}
