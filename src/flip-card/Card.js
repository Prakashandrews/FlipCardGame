import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import styles from "./CardStyle";

export default function Card({ card, onFlipItem, openCard }) {
  const { value } = card;
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const countRef = useRef([]);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"]
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"]
  });

  useEffect(() => {
    countRef.current = openCard;
  }, [openCard]);

  const flipCard = () => {
    const data = countRef.current;
    onFlipItem(card, "add", data);
    const isOpen = data.some(x => x === card.value);
    if (!isOpen) {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: false
      }).start();

      setTimeout(() => {
        const data = countRef.current;        
        const isOpenAlready = data.filter(x => x === card.value);
        if (isOpenAlready.length <= 1) {
          Animated.spring(animatedValue, {
            toValue: 0,
            friction: 8,
            tension: 10,
            useNativeDriver: false
          }).start();
          onFlipItem(card, "remove", data);
        }
      }, 4000);
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: false
      }).start();
    }
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }]
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }]
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={flipCard}>
        <View>
          <Animated.View
            style={[styles.flipCard, styles.flipCardFront, frontAnimatedStyle]}
          >
            <Text style={[styles.frontText]}>{value}</Text>
          </Animated.View>

          <Animated.View
            style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
          >
            <Text style={[styles.backText]}>{value}</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
}


