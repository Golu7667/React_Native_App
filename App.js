// DetailsScreen.js
import React from "react";
import { View, Text, TextInput, Button,SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4B4623 ",
      }}
    >
      <Text style={{ fontSize: 30, color: "green" }}>Login Page</Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          width: 400,
          height: 200,
          backgroundColor: "#6B756A",
          padding: 10,
          borderWidth: 1,
          borderColor: "#525952",
          borderRadius: 20,
        }}
      >
        <TextInput
          style={{
            height: 44,
            width: 300,
            borderColor: "black",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
          placeholder="Enter Your Name"
        />
        <TextInput
          style={{
            height: 44,
            width: 300,
            borderColor: "black",
            backgroundColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
          placeholder="Enter Your Email"
        />
        <Button
          title="Login"
          color="#23E31A"
          accessibilityLabel="Learn more about this purple button"
          style={{ borderRadius: 10, width: 200, height: 60 }}
        />
      </View>
    </View>
    </SafeAreaView>
  );
}
