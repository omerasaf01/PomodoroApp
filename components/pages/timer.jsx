import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimerScreen({ navigation }) {
  const [isActive, setActive] = useState(true);
  const [seconds, setSecond] = useState(0);
  const [count, setCount] = useState(0);

  const back = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    if (isActive) {
      if (parseInt(seconds / 60) >= 25) {
        setActive(false);
        setSecond(0);
      }
    } else {
      if (parseInt(seconds / 60) >= 5) {
        setActive(true);
        setSecond(0);
        setCount(count + 1);
      }
    }
    const interval = setInterval(() => {
      setSecond(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require("../../assets/live.png")} style={styles.image} />
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.title}>
          {isActive == true ? "Hard Work" : "Have Break"}
        </Text>
        <Text style={styles.counter}>
          {parseInt(seconds / 60)} : {seconds % 60}
        </Text>
        <TouchableOpacity onPress={back} style={styles.button}>
          <Text style={{ color: "white", fontSize: 22 }}>Stop</Text>
        </TouchableOpacity>
        <Text style={styles.success}>You fed your dragon <Text style={styles.fedCount}>{count}</Text> times</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
  fedCount: {
    fontWeight: "900"
  },
  counter: {
    fontSize: 30,
    fontWeight: "900",
  },
  success: {
    fontSize: 24,
    marginTop: 12,
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 70,
  },
  image: {
    width: 300,
    height: 300,
  },
  buttonView: {
    marginTop: 0,
    flex: 1,
    width: "100%",
    justifyContent: "start",
    alignItems: "center",
    height: 800,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
    height: "17%",
    borderRadius: 15,
    backgroundColor: "black",
    marginTop: 12,
  },
});
