import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import Timer from '../components/Timer';

const freeMeditation = ({ route, navigation }) => {

	const [meditationAudio, setMeditationAudio] = React.useState(new Audio.Sound());

	const motivationalPhrases = [
		'Respire, feche os olhos e relaxe...',
		'Você está num lugar seguro...',
		'Foque na sua respiração...',
		'Ouça os barulhos ao seu redor...',
		'Observe seus pensamentos...',
		'Desligue cada parte do seu corpo...',
		'Deixe seu corpo afundar...',
		'Não esvazie a mente, apenas a observe...',
		'A ansiedade é parte natural do processo...',
		'A vida às vezes é uma merda!',
		'Tudo bem entrar em desespero às vezes...',
		'Deixe os pensamentos virem e passarem...',
		'Procure onde você perdeu sua calma...',
		'Sua salvação está em você',
		'Converse consigo mesma',
		'Seja sua melhor amiga',
	];

	React.useEffect(() => {
		meditationAudio.loadAsync(require('../assets/music/1997.mp3')).then(() => {
			meditationAudio.playAsync();
		});

		return () => {
			meditationAudio.unloadAsync();
		};
	});

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
				<Text style={styles.quote}>
					{motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)]}
				</Text>
			</View>

			<Timer />

			<View style={styles.controlsContainer}>
				<TouchableHighlight
					onPress={async () => {
						meditationAudio.getStatusAsync().then(status => {
							meditationAudio.setIsMutedAsync(!status.isMuted);
						});
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