import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabsContainer, TabsIndicator, Indicator, IndicatorStyles } from './style';
import { Dimensions } from "react-native";
import AccountCard from '../AccountCard';
import InvoiceCard from '../InvoiceCard';
import RewardsCard from '../RewardsCard';

export default class Cards extends Component {

  static props = {
    children: PropTypes.node
  }

  state = {
		showAmount: false,
		index: 1
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
				this.setState({ index: 2 });
				this.refs.scrollView.scrollTo({x: this.firstPageOffset, animated: true})
			} else if (this.movingFromThirdPage(e)) {
				this.setState({ index: 3 });
				this.refs.scrollView.scrollTo({x: this.secondPageOffset, animated: true})
			}
		} else {
			if (this.movingFromSecondPage(e)) {
				this.setState({ index: 1 });
				this.refs.scrollView.scrollTo({x: 0, animated: true})
			} else if (this.movingFromThirdPage(e)) {
				this.setState({ index: 2 });
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
	
	checkIndicatorPosition = (index) => {
		return this.state.index === index;
	}

  render() {
    return (
			<>
      <TabsContainer ref='scrollView' onScrollEndDrag={this.onScroll}>
        <InvoiceCard />
        <AccountCard />
        <RewardsCard />
      </TabsContainer>
			<TabsIndicator>
				<Indicator style={[this.checkIndicatorPosition(1) ? IndicatorStyles.currentTab : IndicatorStyles.tab]} />
				<Indicator style={[this.checkIndicatorPosition(2) ? IndicatorStyles.currentTab : IndicatorStyles.tab]} />
				<Indicator style={[this.checkIndicatorPosition(3) ? IndicatorStyles.currentTab : IndicatorStyles.tab]} />
			</TabsIndicator>
			</>
		)
  }
}
