import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const guidedMeditation = ({ navigation }) => {
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
				<Text style={styles.timer}> 88:88 </Text>
			</View>
			<View style={styles.controlsContainer}>
				<Image source={require('../assets/images/back15seconds.png')} style={{ width: 40, height: 40 }} />
				<Image source={require('../assets/images/play.png')} style={{ width: 80, height: 80 }} />
				<Image source={require('../assets/images/stop.png')} style={{ width: 40, height: 40 }} />
			</View>
		</View>
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
	}
});

export default guidedMeditation;