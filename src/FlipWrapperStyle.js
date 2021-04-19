'use strict'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',        
        justifyContent: 'flex-start',
        padding: 10
    },
    resetGame: {
        padding: 10
    },
    restart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    restartLabel: {
        fontSize: 20,
        color: '#2062b2'
    },
    stepsLabel: {
        color: 'white',
        fontSize: 30,
    },
    stepsCountLabel: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    stepsCountVal: {
        color: '#23a1f0',
        fontSize: 30,
    },
    cardContainer: {
        margin: 5,
        width: 100,
        height: 160,
        borderColor: '#fffeff',
        borderWidth: 2.5,
        borderStyle: 'solid',
        borderRadius: 5,
    },
    frontLabel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ea2f3'
    },
    backLabel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffeff'
    },
    backText: {
        color: 'black',
        fontSize: 25
    },
    frontText: {
        color: '#fffeff',
        fontSize: 30
    }

});