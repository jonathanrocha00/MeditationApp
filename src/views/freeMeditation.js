import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';

const freeMeditation = ({ route, navigation }) => {

	// const [meditationAudio, setMeditationAudio] = React.useState(new Audio.Sound());
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [isTimerSet, setIsTimerSet] = React.useState(false);
	const [minutes, setMinutes] = React.useState(0);
	const [seconds, setSeconds] = React.useState(5);

	const tickTimer = () => {
		console.log('ticking time...');
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
			console.log('running loop...');
			tickTimer();
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [seconds]);

	const RenderTimerContainer = () => {
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
						Por quanto tempo você deseja meditar?
					</Text>
					<TouchableHighlight
						style={styles.setTimerButton}
						onPress={() => {
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

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['#66ccff', 'transparent']}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: 600,
				}}
			/>
			<View style={styles.titleContainer}>
				<Text style={styles.quote}> 'Respire, feche os olhos e relaxe...' </Text>
			</View>

			<RenderTimerContainer />

			<View style={styles.controlsContainer}>
				<TouchableHighlight
					onPress={async () => {
						let audioState = await meditationAudio.getStatusAsync();
						await meditationAudio.setPositionAsync(audioState.positionMillis - 15000);
					}}
				>
					<Image source={require('../assets/images/moon.png')} style={{ width: 70, height: 70 }} />
				</TouchableHighlight>

				<TouchableHighlight
					onPress={async () => {
						await meditationAudio.pauseAsync();
						isPlaying = false;
					}}
				>
					<Image source={require('../assets/images/sound.png')} style={{ width: 35, height: 35 }} />
				</TouchableHighlight>

				<TouchableHighlight
					style={styles.backButton}
					onPress={async () => {
						navigation.navigate('guidedMeditationSelect')
					}}
				>
					<Image source={require('../assets/images/back.png')} style={{ width: 30, height: 30 }} />
				</TouchableHighlight>

			</View>
		</View >
	);
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
		fontSize: 19,
		marginBottom: 15
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

export default freeMeditation;