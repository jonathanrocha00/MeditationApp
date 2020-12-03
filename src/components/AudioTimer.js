import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const AudioTimer = (props) => {

    const [minutes, setMinutes] = React.useState(1);
    const [seconds, setSeconds] = React.useState(1);
    const [ticker, setTicker] = React.useState(false);

    React.useEffect(() => {
        setMinutes(Math.floor(props.duration / 60000));
        setSeconds(Math.floor((props.duration % 60000) / 1000));
	}, [props.duration]);

    const tickTimer = () => {
        if (props.isPlaying){
            if (minutes == 0 && seconds == 0) {
                props.stopPlayingCallback();
            } else if (minutes != 0 && seconds == 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds - 1);
            }
        }

        setTicker(!ticker);
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            tickTimer();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [ticker]);

    const pad = (num, size) => {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    }

    return (
        <View style={styles.timerContainer} >
            <Text
                style={styles.timer}
            >
                {minutes}:{pad(seconds, 2)}
            </Text>
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

export default AudioTimer;