import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.ScrollView`
    padding: 0 7px;
    margin: 0 23px;
    max-height: 460px;
`;
export const Code = styled.View`
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
    align-self: center;
`;
export const AccountDescription = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
    align-self: center;
`;
export const Title = styled.Text`
    color: #FFF;
    margin-right: 5px;
`;
export const Description = styled.Text`
    color: #FFF;
    font-weight: bold;
`;
export const MenuItems = styled.View`
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.4);
`;
export const MenuItem = styled.View`
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.4);
    padding: 10px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Text = styled.Text`
    color: #FFF;
    font-size: 16px;
    position: absolute;
    left: 50px;
`;
export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
`;
