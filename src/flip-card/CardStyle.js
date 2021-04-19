import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center"
    },
    flipCard: {
      margin: 15,
      width: 100,
      height: 160,
      borderColor: "#fffeff",
      borderWidth: 2.5,
      borderStyle: "solid",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backfaceVisibility: "hidden"
    },
    flipCardBack: {
      backgroundColor: "white",
      position: "absolute",
      top: 0
    },
    flipCardFront: {
      backgroundColor: "#1ea2f3"
    },
    backText: {
      color: "black",
      fontSize: 25
    },
    frontText: {
      color: "#fffeff",
      fontSize: 30
    }
  });