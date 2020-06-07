import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/RecipesStyle';

const Recipes = ({ navigation, route: { params }}) => {
  const [recipes, setRecipes] = useState(() => params.props.map(recipe => recipe));

  return (
    <ScrollView>
      {
        recipes.map(recipe => {
          return (
            <View key={recipe.id} style={styles.recipesContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Recipe', { props: recipe.id })
                }}
              >
                <Image source={{ uri: recipe.image }} style={styles.image}/>
              </TouchableOpacity>
              <Text style={styles.title}>{recipe.title}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

export default Recipes;