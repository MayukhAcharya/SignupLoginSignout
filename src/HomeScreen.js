import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { Authcontext } from "../api/Authcontext";
import Spinner from "react-native-loading-spinner-overlay";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  const { Signout, isloading } = useContext(Authcontext);

  return (
    <View style={styles.container}>
      <Spinner visible={isloading} color="red" />
      <Text style={styles.HeaderText}>Hello There</Text>

      <TouchableOpacity
        style={{
          top: height / 3.5,
          backgroundColor: "#2887e0",
          width: width / 3.5,
          height: height / 16,
          borderRadius: 60,
          marginTop: 15,
          justifyContent: "center",
        }}
        onPress={() => Signout()}
      >
        <Text style={{ textAlign: "center", color: "white" }}>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textinput: {
    margin: 10,
    padding: 2,
    width: width / 1.2,
    height: height / 16,
    backgroundColor: "white",
    top: width / 1.8,
  },
  LoginButton: {
    backgroundColor: "#2887e0",
    width: width / 1.2,
    height: height / 16,
    borderRadius: 60,
    marginTop: 15,
    top: width / 1.9,
    justifyContent: "center",
  },
  LoginText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
  HeaderText: {
    fontSize: 30,
    top: width / 3,
    textAlign: "center",
    fontWeight: "500",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  LoginButtonDisable: {
    backgroundColor: "red",
    width: width / 1.2,
    height: height / 16,
    borderRadius: 60,
    marginTop: 15,
    top: width / 1.9,
    justifyContent: "center",
  },
});
