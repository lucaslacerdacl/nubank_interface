import styled from 'styled-components/native';
import { Dimensions } from "react-native";

export const Container = styled.View`
    background: #fff;
    border-radius: 4px;
    width: ${Math.round(Dimensions.get('window').width) - 40}px;
    margin: 0 20px;
`;

export const CardTop = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const CardHeaderContent = styled.View`
    width: 85%;
    flex-direction: column;
`;

export const ConsumerIndex = styled.View`
    width: 15%;
    height: 100%;
    padding: 20px 0 20px 0;
    align-items: center;
    flex-direction: column;
`;

export const LineTop = styled.View`
    borderTopLeftRadius: 6px;
    borderTopRightRadius: 6px;
    height: 20%;
    width: 10px;
    background: #fcaa00;
`;

export const LineCenter = styled.View`
    height: 60%;
    width: 10px;
    background: #2ebfcb;
`;

export const LineBottom = styled.View`
    height: 20%;
    width: 10px;
    background: #96c22f;
    borderBottomLeftRadius: 6px;
    borderBottomRightRadius: 6px;
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
    font-size: 16px;
    font-weight: bold;
    color: #2cbac9;
    padding-bottom: 3px;
`;

export const InvoiceValue = styled.Text`
    flex-direction: row;
`;

export const Description = styled.Text`
    font-size: 30px;
    color: #2cbac9;
    font-weight: bold;
`;

export const Currency = styled.Text`
    font-size: 30px;
    color: #2cbac9;
`;

export const Decimals = styled.Text`
    font-size: 30px;
    color: #2cbac9;
`;

export const LimitAvaliable = styled.Text`
    flex-direction: row;
`;

export const LimitDescription = styled.Text`
    font-size: 16px;
    color: #393939;
`;

export const LimitValue = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #a4c934;
`;