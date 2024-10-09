import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

export default function SearchScreen() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 15,
          margin: 10,
          borderRadius: 5,
        }}
      >
        <TextInput placeholder="Search" />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#c02727",
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
});
