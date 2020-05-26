import './RecipeListPage.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { RecipeCard } from 'src/components/recipe-card/RecipeCard';
import { Recipe } from 'src/models/Recipe';
import FavoriteRecipeService from 'src/services/favorite-recipe.service';
import { AppState } from 'src/store';
import * as FavoriteRecipeActions from 'src/store/favorite-recipe/actions';

export const RecipeListPage: React.FC = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(
    (state: AppState) => state.favoriteRecipes.recipes,
  );

  React.useEffect(() => {
    dispatch(FavoriteRecipeActions.loadFavoriteRecipes());
  }, [dispatch]);

  const removeFavorite = (recipe: Recipe): void => {
    FavoriteRecipeService.remove(recipe.id);
    dispatch(FavoriteRecipeActions.removeFavoriteRecipe(recipe));
  };

  return (
    <div className="recipe-list-container">
      <Paper variant="outlined" className="recipe-list-content">
        <Typography variant="h4" component="h2" color="primary">
          My Favorite Recipes
        </Typography>
        <Divider className="divider" />
        <Grid container spacing={2}>
          {!recipes.length && (
            <Grid item>
              <Typography>You have not favorites yet.</Typography>
            </Grid>
          )}
          {recipes.map((recipe) => (
            <Grid key={recipe.id} item xs={12} sm={6} md={4}>
              <RecipeCard
                handleFavorite={() => removeFavorite(recipe)}
                isFavorite
                recipe={recipe}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};
