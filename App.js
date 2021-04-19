import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import FlipWrapper from "./src/FlipWrapper";
import { CardList, ShuffleArray } from "./src/helper/utility";

export default function App() {
  const [list, setList] = useState([]);

  const reset = () => {
    getCardList();
  };

  getCardList = () => {
    const res = CardList();
    setList(res);
  };

  useEffect(() => {
    getCardList();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {list.length > 0 && (
            <FlipWrapper cards={ShuffleArray(list)} reset={reset} />
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#423c44",
    alignItems: "center",
    justifyContent: "center"
  }
});
