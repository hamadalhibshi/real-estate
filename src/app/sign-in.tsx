import { Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>SignIn</Text>
        <Image />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
