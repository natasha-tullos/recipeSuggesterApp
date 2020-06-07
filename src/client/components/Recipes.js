import React, { useEffect, useState } from 'react';
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

  useEffect(() => {

    console.log(recipes, ' recipe props!')
  }, [])

  return (
    <ScrollView>
      {
        recipes.map(recipe => {
          console.log(recipe, ' this recipe!')
          return (
            <View key={recipe.id} style={styles.recipesContainer}>
              <TouchableOpacity>
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