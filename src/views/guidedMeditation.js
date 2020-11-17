import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';

const guidedMeditation = ({ navigation }) => {

	const [meditationAudio, setMeditationAudio] = React.useState(new Audio.Sound());
	let isPlaying = false;

	React.useEffect(() => {
		try {
			meditationAudio.loadAsync(require('../assets/music/1997.mp3'));
		} catch (error) {
			// Forgive me Roberta 
		}

		return () => {
			meditationAudio.unloadAsync();
		};
	});

	const RenderPlayPauseButton = () => {
		return (
			<TouchableHighlight
				style={styles.playPauseButton}
				onPress={() => {
					if (isPlaying) {
						meditationAudio.pauseAsync();
						isPlaying = false;
					} else {
						meditationAudio.playAsync();
						isPlaying = true;
					}
				}}
			>
				<Image source={require('../assets/images/playPause.png')} style={{ width: 70, height: 70 }} />
			</TouchableHighlight>
		);
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
				<Image source={require('../assets/images/meditation.png')} style={{ width: 80, height: 80 }} />
				<Text style={styles.title}> Título </Text>
			</View>
			<View style={styles.timerContainer}>
				<Text style={styles.timer}> 89:88 </Text>
			</View>
			<View style={styles.controlsContainer}>
				<TouchableHighlight
					onPress={async () => {
						let audioState = await meditationAudio.getStatusAsync();
						await meditationAudio.setPositionAsync(audioState.positionMillis - 15000);
					}}
				>
					<Image source={require('../assets/images/back15seconds.png')} style={{ width: 50, height: 50 }} />
				</TouchableHighlight>

				<RenderPlayPauseButton />

				<TouchableHighlight
					onPress={async () => {
						await meditationAudio.stopAsync();
						isPlaying = false;
					}}
				>
					<Image source={require('../assets/images/stop.png')} style={{ width: 60, height: 60 }} />
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
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
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
	controlsContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
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

export default guidedMeditation;