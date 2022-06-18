import React, { useState, useEffect } from "react";
// NATIVE IMPORTS
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
// STYLES
import styles from "../styles/styles";
// AWESOME INPUT DEPENDIENCY
import { AwesomeTextInput } from "react-native-awesome-text-input";
// BUTTON
import Button from "react-native-button";
// AXIOS TO FETCH API
import axios from "axios";
// DEPENDENCY TO DISPLAY SVG IMAGE
import { SvgCssUri } from "react-native-svg";

export default function Home() {
  // VARIABLES TO STORE ITEMS
  const [allData, setAllData] = useState("");
  const [countryName, setCountryName] = useState("");
  const [capital, setCapital] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [continent, setContinent] = useState("");
  const [population, setPopulation] = useState("");
  const [currency, setCurrency] = useState([]);
  const [languages, setLanguages] = useState("");

  // ERR MESSAGE
  const [errMsg, setErrMsg] = useState(true);

  // FUNCTION TO GET COUNTRY DETAILS WITH API
  const getCountryDet = async () => {
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    try {
      // STORING THE RESPONSE IN AN VARIABLE
      const response = await axios.get(url);

      // GIVING THE APPROPRIATE DATA TO THE VARIABLE
      setAllData(response.data[0]);
      setCapital(response.data[0].capital[0]);
      setContinent(response.data[0].continents[0]);
      setCountryFlag(response.data[0].flags.svg);
      setPopulation(response.data[0].population);
      setCurrency({
        short: Object.keys(response.data[0].currencies)[0],
        name: response.data[0].currencies[
          Object.keys(response.data[0].currencies)
        ].name,
      });
      setLanguages(
        Object.values(response.data[0].languages)
          .toString()
          .split(",")
          .join(", ")
      );
    } catch (err) {
      setErrMsg("Please enter a valid country name");
    }
  };

  // JSK
  return (
    <ScrollView>
      <View style={styles.body}>
        {/* <Text style={styles.title}>Country Guide</Text> */}
        <View style={styles.container}>
          <>
            <AwesomeTextInput
              label="Enter A Country Name Here"
              value={countryName}
              onChangeText={(title) => setCountryName(title)}
              customStyles={{
                container: {
                  borderBottomWidth: 1,
                  borderColor: "#4171F1",
                  borderRadius: 5,
                  width: "90%",
                  alignSelf: "center",
                },
                title: {
                  backgroundColor: "white",
                  color: "#4171F1",
                  transform: [{ translateY: -5 }],
                  fontFamily: "Medium-Italic",
                },
              }}
            />
            <TouchableOpacity style={styles.btn} onPress={getCountryDet}>
              <Text style={styles.btnTxt}>Search</Text>
            </TouchableOpacity>
            {allData == "" ? (
              <Text style={styles.errTxt}>{errMsg}</Text>
            ) : (
              <>
                <SvgCssUri
                  uri={countryFlag}
                  style={styles.img}
                  width={"90%"}
                  height={"45%"}
                />
                <Text style={styles.name}>{allData.name.common}</Text>
                <View style={styles.field}>
                  <Text style={styles.capital}>
                    <Text style={styles.label}>Capital: </Text>
                    <Text style={styles.ans}>{capital}</Text>
                  </Text>
                  <Text style={styles.continent}>
                    <Text style={styles.label}>Continent: </Text>
                    <Text style={styles.ans}>{continent}</Text>
                  </Text>
                  <Text style={styles.population}>
                    <Text style={styles.label}>Population: </Text>
                    <Text style={styles.ans}>{population}</Text>
                  </Text>
                  <Text style={styles.currency}>
                    <Text style={styles.label}>Currency: </Text>
                    <Text style={styles.ans}>
                      {currency.short} -- {currency.name}
                    </Text>
                  </Text>
                  <Text style={styles.lang}>
                    <Text style={styles.label}>Common Languages: </Text>
                    <Text style={styles.ans}>{languages}</Text>
                  </Text>
                </View>
              </>
            )}
          </>
        </View>
      </View>
    </ScrollView>
  );
}
