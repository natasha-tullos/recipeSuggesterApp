import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/MainStyles';

const Main = ({ navigation, route }) => {
  const [protein, setProtein] = useState();
  const [fats, setFats] = useState();
  const [carbs, setCarbs] = useState();

  useEffect(() => {
    console.log(route.params, ' ROUTE')
  }, [])

  const getRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.SPOON_API_KEY}&minCarbs=${carbs * .95}&maxCarbs=${carbs * 1.05}&minProtein=${protein * .95}&maxProtein=${protein * 1.05}&minFat=${fats * .95}&maxFat=${fats * 1.05}&number=${12}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => navigation.navigate('Recipes', { props: response }))
  }

  return (
    <View style={styles.macroContainer}>
      <Text style={styles.title}>Enter Your Macros</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Protein"
        onChangeText={(text) => setProtein(text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Fats"
        onChangeText={(text) => setFats(text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Carbs"
        onChangeText={(text) => setCarbs(text)}
      />
      {/* <View style={styles.btnContainer}> */}
        <TouchableOpacity
           style={styles.btnContainer}
           onPress={() => getRecipes()}
        >
          <Text style={styles.btnText}>
            Find Recipes
          </Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  )
}

export default Main;