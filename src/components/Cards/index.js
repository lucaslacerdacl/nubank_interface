import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  TabsContainer,
  Title,
  Description,
  AmountBlock
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions, TouchableWithoutFeedback } from "react-native";

export default class Cards extends Component {

  static props = {
    children: PropTypes.node
  }

  state = {
    showAmount: false
  }

	lastOffset = 0;
	firstPageOffset = 0;
	secondPageOffset = 0;

	constructor(props) {
		super(props);
		const screenWidth = Math.round(Dimensions.get('window').width);
		this.firstPageOffset = screenWidth;
		this.secondPageOffset = screenWidth * 2;
	}

  isGoingToRight = (event) => {
		return event.nativeEvent.contentOffset.x >= this.lastOffset;
	}

	movingFromSecondPage = (event) => {
		return event.nativeEvent.contentOffset.x < this.firstPageOffset && event.nativeEvent.contentOffset.x > 60;
	}

	movingFromThirdPage = (event) => {
		return event.nativeEvent.contentOffset.x < this.secondPageOffset && event.nativeEvent.contentOffset.x > this.firstPageOffset;
	}

	onScroll = (e) => {
		if (this.isGoingToRight(e)) {
			if (this.movingFromSecondPage(e)) {
				this.refs.scrollView.scrollTo({x: this.firstPageOffset, animated: true})
			} else if (this.movingFromThirdPage(e)) {
				this.refs.scrollView.scrollTo({x: this.secondPageOffset, animated: true})
			}
		} else {
			if (this.movingFromSecondPage(e)) {
				this.refs.scrollView.scrollTo({x: 0, animated: true})
			} else if (this.movingFromThirdPage(e)) {
				this.refs.scrollView.scrollTo({x: this.firstPageOffset, animated: true})
			}
		}
		this.lastOffset = e.nativeEvent.contentOffset.x;
  }
  
  setAmountVisibility = () => {
    this.setState(prevState => ({
      showAmount: !prevState.showAmount
    }))
  }

  renderAccountCard = () => {
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

  render() {
    return (
      <TabsContainer ref='scrollView' onScrollEndDrag={this.onScroll}>
        {this.renderAccountCard()}
        {this.renderAccountCard()}
        {this.renderAccountCard()}
      </TabsContainer>
		)
  }
}
