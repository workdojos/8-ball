import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

interface MagicBallProps {
  answer: string;
}

export default function MagicBall({ answer }: MagicBallProps): React.JSX.Element {
    return (
        <View>
            <View style={styles.ballContainer}>
                <Image
                    source={require('../assets/images/ball.png')}
                    resizeMode='cover'
                    style={styles.ball}
                />
                <Text style={[styles.answer, answer.length < 8 && styles.littleAnswer]}>
                    {answer || "Demandez quelque chose"}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ballContainer: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ball: {
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'center',
    },
    answer: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#000070',
        textAlign: 'center',
        fontSize: 12,
        paddingVertical: 60,
        paddingHorizontal: 45,
        maxWidth: 200,
    },
    littleAnswer: {
        paddingHorizontal: 60,
    },
});
