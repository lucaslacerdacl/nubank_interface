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

export const Title = styled.Text`
    font-size: 13px;
    color: #999;
    padding-bottom: 3px;
`;

export const Description = styled.Text`
    font-size: 30px;
    color: #333;
`;

export const AmountBlock = styled.View`
    width: 220px;
    height: 36px;
    background: #f3f3f3;
`;
