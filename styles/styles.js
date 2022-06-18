import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000",
    height: height,
    width: width,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#4171F1",
    fontFamily: "Bold-Italic",
    fontSize: 35,
    marginTop: 40,
    textAlign: "center",
  },
  container: {
    backgroundColor: "#fff",
    paddingTop: 50,
    width: width - 40,
    borderRadius: 5,
    alignSelf: "center",
    flex: 1,
  },
  btn: {
    backgroundColor: "#4171F1",
    padding: 10,
    marginTop: 20,
    width: "90%",
    borderRadius: 5,
    alignSelf: "center",
  },
  btnTxt: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
  errTxt: {
    color: "red",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Light-Italic",
    marginTop: 20,
  },
  img: {
    alignSelf: "center",
    marginTop: 20,
  },
  name: {
    color: "#000",
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "900",
  },
  field: {
    marginLeft: 20,
    marginTop: 10,
  },
  label: {
    color: "#000",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  ans: {
    color: "grey",
    fontFamily: "Poppins-Light",
    fontSize: 16,
  },
  continent: {
    marginTop: 5,
  },
  population: {
    marginTop: 5,
  },
  currency: {
    marginTop: 5,
  },
  lang: {
    marginTop: 5,
    marginBottom: 20,
  },
});

export default styles;
