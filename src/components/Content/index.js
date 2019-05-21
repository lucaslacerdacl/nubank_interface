import React from 'react';
import { 
    Container,
    Card,
    CardContent,
    CardHeader,
    Title,
    Description,
    CardFooter,
    Annotation 
} from './style';
import Menu from '../Menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default function Main ({ translateY }) {

    let offset = 0;
    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY
                }
            }
        ], 
        {
            useNativeDriver: true
        }
    );
    
    onChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY >= 100) {
                opened = true;   
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 460 : 0,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                offset = opened ? 460 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
        <Container>
            <Menu translateY={translateY} />
            <PanGestureHandler 
                onGestureEvent={animatedEvent}
                onHandlerStateChange={this.onChange}>
                <Card style={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [0, 460],
                            outputRange: [0, 460],
                            extrapolate: 'clamp'
                        })
                    }]
                }}>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#999" />
                    </CardHeader>
                    <CardContent>
                        <Title>
                            Saldo disponível
                        </Title>
                        <Description>
                            R$ 5.000,00
                        </Description>
                    </CardContent>
                    <CardFooter>
                        <Icon name="account-balance" size={28} color="#666" />
                        <Annotation>
                            Transferência de R$ 20,00 recebida de Diego Schell hoje às 06:00h
                        </Annotation>
                        <Icon name="chevron-right" size={28} color="#999" />
                    </CardFooter>
                </Card>
            </PanGestureHandler>
        </Container>
  )
}
