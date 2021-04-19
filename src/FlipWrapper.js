import React, {Component, useState, useEffect} from 'react';
import {Text, View, Alert} from 'react-native';
import styles from './FlipWrapperStyle.js';
import Card from './flip-card/Card';
import {CARD_PAIRS_VALUE} from '../src/constant';

export default function FlipWrapper({cards, reset}) {
  const [cardList, setCardList] = useState(cards);
  const [openCard, setOpenCard] = useState([]);
  const [win, setWin] = useState(false);
  const [steps, setSteps] = useState(0);

  const resetGame = () => {
    /*Reset Game */
    setWin(false);
    setOpenCard([]);
    setCardList([]);
    setSteps(0);
    reset();
  };

  const onPressButton = (item, type, data) => {
    const {value} = item;
    const openCard = data || [];
    /**
     * Collect list of open cards and remove the card if its not open already
     */
    if (type === 'remove') {
      const res = openCard.filter(x => x !== value);
      setOpenCard(res);
    } else {
      const openCardList = openCard.concat(value);
      setOpenCard(openCardList);
      if (openCardList.length / 2 === CARD_PAIRS_VALUE) {
        setWin(true);
      }
      setSteps(steps + 1);
    }
  };

  useEffect(() => {
    /* To set card default card list */
    const carsProperties = cards.map(x => {
      return {value: x};
    });
    setCardList(carsProperties);
  }, [cards]);

  return (
    <>
      <View style={styles.resetGame}>
        <View style={styles.restart}>
          <Text
            data-testid="restart"
            style={styles.restartLabel}
            onPress={resetGame}>
            Restart
          </Text>
          <View style={styles.stepsCountLabel}>
            <Text data-testid="steps" style={styles.stepsLabel}>
              {' '}
              STEPS:
            </Text>
            <Text style={styles.stepsCountVal}> {steps}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        {cardList.map((card, index) => {
          return (
            <View key={index} style={styles.cardContainer}>
              <Card
                card={card}
                onFlipItem={onPressButton}
                openCard={openCard}
              />
            </View>
          );
        })}

        {win &&
          Alert.alert(
            'Congratulations',
            `You win this game by ${steps} steps`,
            [
              {
                text: 'Try another round',
                onPress: () => resetGame(),
              },
            ],
            {cancelable: false},
          )}
      </View>
    </>
  );
}
