import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  Linking,
  FlatList
} from 'react-native';

import styles from '../styles/RecipeStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Recipe = ({ navigation, route: { params } }) => {
  const id = params.props;
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    console.log(id, ' recipe id')

    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOON_API_KEY}`, { method: 'GET' })
      .then(response => response.json())
      .then(response => setRecipe(response))
  }, [])

  return (
    recipe ? 
    <ScrollView>
      <View style={styles.recipeContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={styles.image} />

        <Text style={styles.subTitles}>Ingredients</Text>
        {console.log(recipe, ' this is the recipe')}
        {
          recipe.extendedIngredients.map(ingredient => <Text key={ingredient.id} style={styles.listItemText}>{ingredient.original}</Text>)
        }

        <Text style={styles.subTitles}>Instructions</Text>
        {
          recipe.instructions ? 
            (
              <FlatList
                renderItem={({ item} ) => <Text style={styles.listItemText}>{item.step}</Text>}
                data={recipe.analyzedInstructions[0].steps}
              >
              </FlatList>
            )
          : 
          <Text>
            No instructions were found, but we found the source for the recipe
              <Text 
                style={styles.linkSpan}
                onPress={() => Linking.openURL(recipe.sourceUrl)}
              > here</Text>
          </Text>
        }
      </View>
    </ScrollView>
    :
    <ActivityIndicator size="large" />
  );
}

export default Recipe;