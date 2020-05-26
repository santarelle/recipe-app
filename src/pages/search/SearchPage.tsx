import './SearchPage.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Loading } from 'src/components/loading/Loading';
import { RecipeCard } from 'src/components/recipe-card/RecipeCard';
import { Recipe } from 'src/models/Recipe';
import FavoriteRecipeService from 'src/services/favorite-recipe.service';
import { AppState } from 'src/store';
import * as FavoriteRecipeActions from 'src/store/favorite-recipe/actions';
import { search } from 'src/store/search-recipe/thunks';

function useQuery(param: string) {
  return new URLSearchParams(useLocation().search).get(param);
}

export const SearchPage: React.FC = () => {
  const { recipes, term, loading } = useSelector(
    (state: AppState) => state.searchRecipe,
  );
  const favorites = useSelector(
    (state: AppState) => state.favoriteRecipes.recipes,
  );
  const dispatch = useDispatch();
  const termParam = useQuery('q');

  useEffect(() => {
    if (termParam) {
      dispatch(search(termParam));
    }
  }, [termParam, dispatch]);

  const isFavorite = (recipe: Recipe) =>
    favorites.some((f) => f.id === recipe.id);

  const saveToFavorite = (recipe: Recipe) => {
    FavoriteRecipeService.save(recipe);
    dispatch(FavoriteRecipeActions.saveFavoriteRecipe(recipe));
  };

  const removeToFavorite = (recipe: Recipe) => {
    FavoriteRecipeService.remove(recipe.id);
    dispatch(FavoriteRecipeActions.removeFavoriteRecipe(recipe));
  };

  return (
    <div className="recipe-list-container">
      {loading ? (
        <Loading />
      ) : (
        <Paper variant="outlined" className="recipe-list-content">
          <Typography variant="h4" component="h2" color="primary">
            Search
            {term && `for: ${term}`}
          </Typography>
          <Divider className="divider" />
          <Grid container spacing={2}>
            {!recipes.length && (
              <Grid item xs={12}>
                <p>Sorry. No recipes found</p>
              </Grid>
            )}
            {recipes.map((recipe) => (
              <Grid key={recipe.id} item xs={12} sm={6} md={4}>
                <RecipeCard
                  handleFavorite={() =>
                    isFavorite(recipe)
                      ? removeToFavorite(recipe)
                      : saveToFavorite(recipe)
                  }
                  isFavorite={isFavorite(recipe)}
                  recipe={recipe}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </div>
  );
};
