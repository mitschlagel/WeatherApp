import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";

import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={styles.imageLayout}
        imageStyle={{ resizeMode: "cover", alignSelf: "baseline" }}
      >
        <Text style={[cityName, cityText]}>Omaha, NE</Text>
        <Text style={[countryName, cityText]}>USA</Text>
        <View style={[populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"white"}
            bodyText={"80,000"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"7:15:45am"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"5:05:17pm"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "white",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
