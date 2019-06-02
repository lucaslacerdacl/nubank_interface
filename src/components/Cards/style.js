import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const TabsIndicator = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

export const Indicator = styled.View`
    width: 8px;
    height: 8px;
    background: #fff;
    margin: 0 5px;
    border-radius: 8px;
`;

export const IndicatorStyles = StyleSheet.create({
    tab: {
        opacity: 0.4
    },
    currentTab: {
        opacity: 1
    }
});
