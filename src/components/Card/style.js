import styled from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
    border-radius: 4px;
    width: 335px;
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
