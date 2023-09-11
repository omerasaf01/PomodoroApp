import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({navigation}) {

  const start = () => {
    navigation.navigate("Timer")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 70,
        }}
      >
        <Image source={require("../../assets/egg.png")} style={styles.image} />
      </View>
      <View
        style={{
          marginTop: 0,
          flex: 1,
          width: "100%",
          justifyContent: "start",
          alignItems: "center",
          height: 800,
        }}
      >
        <TouchableOpacity onPress={start} style={styles.button}>
          <Text style={{ color: "white", fontSize: 22 }}>Start</Text>
        </TouchableOpacity>
        <Text style={{ alignItems: "center", marginTop: 30, fontSize: 22, paddingHorizontal: 12, textAlign: "center" }}>
          this is a dragon egg, start the pomodoro timer to hatch it
        </Text>
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
  image: {
    width: 300,
    height: 300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
    height: "17%",
    borderRadius: 15,
    backgroundColor: "black",
  },
});
