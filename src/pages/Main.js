import React, { Component } from 'react';
import { Container } from './style';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Content from '../components/Content';
import { Animated } from 'react-native';
import { State } from 'react-native-gesture-handler';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.translateY = new Animated.Value(0);
    this.offset = 0;
    this.opened = false;
    this.animatedEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationY: this.translateY
          }
        }
      ],
      {
        useNativeDriver: true
      }
    );
  }

  onChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      // this.offset += translationY;

      if (translationY >= 100) {
        this.opened = true;
      } else {
        this.opened = false;
        // this.translateY.setValue(this.offset);
        // this.translateY.setOffset(0);
        // this.offset = 0;
      }

      Animated.timing(this.translateY, {
        toValue: this.opened ? 460 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        // this.offset = this.opened ? 460 : 0;
        // this.translateY.setOffset(this.offset);
        // this.translateY.setValue(0);
      });
    }
  }

  onPress = () => {
    Animated.timing(this.translateY, {
      toValue: this.opened ? 0 : 460,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      this.opened = !this.opened;
    });
  }

  render() {
    return (
      <Container>
        <Header onPress={this.onPress} />
        <Content translateY={this.translateY} onChange={this.onChange} animatedEvent={this.animatedEvent} />
        <Tabs translateY={this.translateY} />
      </Container>
    )
  }
}
