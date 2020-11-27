import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import Timer from '../components/Timer';

const freeMeditation = ({ route, navigation }) => {

	const [isPlaying, setIsPlaying] = React.useState(true);
	const [meditationAudio, setMeditationAudio] = React.useState(new Audio.Sound());
	
	React.useEffect(() => {
		// meditationAudio.loadAsync(require('../assets/music/1997.mp3')).then(() => {
		// 	meditationAudio.playAsync();
		// });
		
		return () => {
			meditationAudio.unloadAsync();
		};
	});

	const play = async (audio) => {
		console.log('Playing...');
		await audio.playAsync();
		setIsPlaying(true);
	}

	const pause = async (audio) => {
		await audio.pauseAsync();
		setIsPlaying(true);
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

			<Timer/>

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
						if (isPlaying) {
							await pause(meditationAudio);
						} else {
							await play(meditationAudio);
						}
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