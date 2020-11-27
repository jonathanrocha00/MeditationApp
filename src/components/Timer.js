import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const Timer = ({ navigation }) => {

    const [isTimerSet, setIsTimerSet] = React.useState(false);
	const [minutes, setMinutes] = React.useState(0);
	const [seconds, setSeconds] = React.useState(5);

    const tickTimer = () => {
		if (isTimerSet) {
			if (minutes == 0 && seconds == 0) {
				setIsTimerSet(false);
			} else if (minutes != 0 && seconds == 0) {
				setMinutes(minutes - 1);
				setSeconds(59);
			} else {
				setSeconds(seconds - 1);
			}
		}
    }
    
    const pad = (num, size) => {
		var s = "000000000" + num;
		return s.substr(s.length - size);
    }
    
	React.useEffect(() => {
		const timer = setTimeout(() => {
			tickTimer();
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [seconds]);

    if (isTimerSet) {
        return (
            <View style={styles.timerContainer} >
                <Text
                    style={styles.timer}
                >
                    {minutes}:{pad(seconds, 2)}
                </Text>

                <TouchableHighlight
                    style={styles.setTimerButton}
                    onPress={() => {
                        setIsTimerSet(false);
                    }}
                >
                    <Text
                        style={styles.setTimerButtonText}
                    >
                        Parar
                    </Text>
                </TouchableHighlight>
            </View>
        );
    } else {
        return (
            <View style={styles.timerContainer} >
                <Text
                    style = {styles.question}
                >
                    Meditar por:
                </Text>
                <TouchableHighlight
                    style={styles.setTimerButton}
                    onPress={async () => {
                        setIsTimerSet(true);
                        setMinutes(4);
                        setSeconds(59);
                    }}
                >
                    <Text
                        style={styles.setTimerButtonText}
                    >
                        5 minutos
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.setTimerButton}
                    onPress={() => {
                        setIsTimerSet(true);
                        setMinutes(14);
                        setSeconds(59);
                    }}
                >
                    <Text
                        style={styles.setTimerButtonText}
                    >
                        15 minutos
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.setTimerButton}
                    onPress={() => {
                        setIsTimerSet(true);
                        setMinutes(29);
                        setSeconds(59);
                    }}
                >
                    <Text
                        style={styles.setTimerButtonText}
                    >
                        30 minutos
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d9b3ff'
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	quote: {
		color: 'white',
		fontSize: 19
	},
	question: {
		color: 'white',
		fontSize: 16,
		marginBottom: 7
	},
	timerContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	timer: {
		color: 'white',
		fontSize: 90
	},
	setTimerButton: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		width: 120,
		margin: 9,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 7
	},
	setTimerButtonText: {
		color: 'white'
	},
	controlsContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	playPauseButton: {
		marginRight: 50,
		marginLeft: 50
	},
	backButton: {
		position: 'absolute',
		right: 20,
		bottom: 20,
	}
});

export default Timer;