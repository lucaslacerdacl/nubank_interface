import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    max-height: 450px;
    z-index: 5;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})``;

export const ContainerCard = styled(Animated.View)`
    flex: 1;
`;
