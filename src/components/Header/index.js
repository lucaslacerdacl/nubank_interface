import React, { Component } from 'react';
import { Container, Top, Logo, Title } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/Nubank_Logo.png';
import { TouchableWithoutFeedback } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onPress()} >
        <Container>
          <Top>
            <Logo source={logo} />
            <Title>Lucas</Title>
          </Top>
          <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </Container>
      </TouchableWithoutFeedback>
    )
  }
}
