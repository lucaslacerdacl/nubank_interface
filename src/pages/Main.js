import React, { Component } from 'react';
import { Container } from './style';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Content from '../components/Content';
import { Animated } from 'react-native';
import { State } from 'react-native-gesture-handler';

export default class Main extends Component {

  translateY = new Animated.Value(0);
  offset = 0;
  opened = false;
  animatedEvent = Animated.event(
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

  setValueAndOffset(value, offset) {
    this.translateY.setValue(value);
    this.translateY.setOffset(offset);
  }

  startAnimation(value, callback) {
    Animated.timing(this.translateY, {
      toValue: value,
      duration: 300,
      useNativeDriver: true
    }).start(callback);
  }

  onChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      this.offset += translationY;

      if (translationY >= 100) {
        this.opened = true;
      } else {
        this.opened = false;
        this.setValueAndOffset(this.offset, 0);
        this.offset = 0;
      }

      const value = this.opened ? 460 : 0;
      this.startAnimation(value, () => {
        this.offset = this.opened ? 460 : 0;
        this.setValueAndOffset(0, this.offset);
      });
    }
  }

  onPress = () => {
    if (this.opened) {
      this.setValueAndOffset(460, 0);
    }

    const value = this.opened ? 0 : 460;
    this.startAnimation(value, () => {
      this.opened = !this.opened;
      if (this.opened) {
        this.setValueAndOffset(0, 460);
      }
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
