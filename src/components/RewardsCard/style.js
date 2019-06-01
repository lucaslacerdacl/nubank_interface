import styled from 'styled-components/native';
import { Dimensions } from "react-native";

export const Container = styled.View`
    background: #fff;
    border-radius: 4px;
    flex: 1;
    width: ${Math.round(Dimensions.get('window').width) - 40}px;
    margin: 0 20px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const CardContent = styled.View`
    flex: 1;
    padding: 0 30px;
    justify-content: center;
`;

export const CardFooter = styled.View`
    padding: 30px;
    background: #eee;
    border-radius: 4px;
    flex-direction: row;
    justify-content: space-around;    
`;

export const Annotation = styled.Text`
    font-size: 12px;
    color: #333;
    padding: 0 30px;
`;

export const Points = styled.Text`
    flex-direction: row;
`;

export const PointsValue = styled.Text`
    font-size: 30px;
    color: #9639cc;
    font-weight: bold;
`;

export const PointsDescription = styled.Text`
    font-size: 30px;
    color: #9639cc;
`;

export const Description = styled.Text`
    font-size: 16px;
    color: #393939;
`;

export const PointsCount = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #8245b8;
`;
