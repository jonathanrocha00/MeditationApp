import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import AudioTimer from '../components/AudioTimer';

const meditationAudio = new Audio.Sound();

const guidedMeditation = ({ route, navigation }) => {
	const [isPlaying, setIsPlaying] = React.useState(false);
	let isLoaded = false;

	React.useEffect(() => {
		return () => {
			meditationAudio.unloadAsync();
		};
	});

	React.useEffect(() => {
		if (isPlaying) {
			if (isLoaded) {
				meditationAudio.playAsync();
			} else {
				meditationAudio.loadAsync(route.params.archive).then((status) => {
					meditationAudio.playAsync();
					isLoaded = true;
				});
			}
		} else {
			if (isLoaded) {
				meditationAudio.pauseAsync();
			} else {
				meditationAudio.loadAsync(route.params.archive).then(() => {
					meditationAudio.pauseAsync();
					isLoaded = true;
				});
			}
		}
	}, [isPlaying]);

	const RenderPlayPauseButton = () => {
		return (
			<TouchableHighlight
				style={styles.playPauseButton}
				onPress={async () => {
					if (isPlaying) {
						setIsPlaying(false);
					} else {
						setIsPlaying(true);
					}
				}}
			>
				<Image source={require('../assets/images/playPause.png')} style={{tintColor: 'white', width: 120, height: 120 }} />
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
				<Image source={route.params.icon} style={{tintColor: 'white', width: 100, height: 100 }} />
				<Text style={styles.title}> {route.params.title} </Text>
			</View>
			<View style={styles.timerContainer}>
				<AudioTimer 
					isPlaying={isPlaying}
					duration={route.params.duration}
					stopPlayingCallback={() => {setIsPlaying(false)}}
				/>
			</View>
			<View style={styles.controlsContainer}>
				<RenderPlayPauseButton />

				<TouchableHighlight
					style={styles.backButton}
					onPress={async () => {
						navigation.navigate('guidedMeditationSelect')
					}}
				>
					<Image source={require('../assets/images/back.png')} style={{tintColor: 'white', width: 30, height: 30 }} />
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
		marginLeft: 20,
		marginRight: 20
	},
	backButton: {
		position: 'absolute',
		right: 20,
		bottom: 20,
	}
});

export default guidedMeditation;