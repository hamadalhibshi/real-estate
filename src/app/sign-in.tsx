import React from "react";

import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Image
          source={images.signInImg}
          style={styles.image}
          //   resizeMode="contain"
        />
        <Text style={[styles.textAlign]}>WELCOME TO BHESTATE</Text>
        <Text style={[styles.textAlign]}>Let's get you started on finding</Text>
        <Text style={[styles.textAlign]}>Your dream home</Text>

        <Text style={[styles.textAlign]}>Sign in with Google</Text>
        <TouchableOpacity>{/* <Image /> */}</TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    width: "100%",
    height: 500,
  },
  textAlign: {
    textAlign: "center",
  },
});
