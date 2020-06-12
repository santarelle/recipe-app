import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { Loading } from 'src/components/loading/Loading';
import { RecipeIngredient } from 'src/components/recipe-detail/recipe-ingredient/RecipeIngredient';
import { RecipePreparation } from 'src/components/recipe-detail/recipe-preparation/RecipePreparation';
import { YoutubePlayer } from 'src/components/youtube-player/YoutubePlayer';
import FavoriteRecipeService from 'src/services/favorite-recipe.service';
import { AppState } from 'src/store';
import * as FavoriteRecipeActions from 'src/store/favorite-recipe/actions';
import { loadRecipe } from 'src/store/load-recipe/thunks';

import './RecipeDetailPage.scss';

export const RecipeDetailPage: React.FC = () => {
  const { pathname } = useLocation();
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { loading, recipe } = useSelector(
    (state: AppState) => state.loadRecipe,
  );
  const favoriteRecipes = useSelector(
    (state: AppState) => state.favoriteRecipes.recipes,
  );

  useEffect(() => {
    setFavorite(favoriteRecipes.some((fr) => fr.title === recipe?.title));
  }, [recipe, favoriteRecipes]);

  useEffect(() => {
    const titleUnique = pathname.split('/recipe/')[1];
    const title = titleUnique.replace(/-/g, ' ');
    dispatch(loadRecipe(title));
  }, [pathname, dispatch]);

  const handleFavorite = () => {
    if (recipe) {
      if (isFavorite) {
        FavoriteRecipeService.remove(recipe.id);
        dispatch(FavoriteRecipeActions.removeFavoriteRecipe(recipe));
      } else {
        FavoriteRecipeService.save(recipe);
        dispatch(FavoriteRecipeActions.saveFavoriteRecipe(recipe));
      }
    }
  };

  return (
    <div className="recipe-detail-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid container justify="space-between">
            <Typography variant="h6" component="h2" color="primary">
              {recipe?.title}
            </Typography>

            <Button
              variant={isFavorite ? 'contained' : 'outlined'}
              color="primary"
              onClick={handleFavorite}
              startIcon={
                isFavorite ? (
                  <Favorite fontSize="large" />
                ) : (
                  <FavoriteBorder fontSize="large" />
                )
              }
            >
              {isFavorite ? 'Favorited' : 'Favorite'}
            </Button>
          </Grid>

          <Divider className="divider" />

          {recipe?.youtubeUrl && (
            <YoutubePlayer title={recipe.title} embedUrl={recipe.youtubeUrl} />
          )}

          <Paper elevation={6} style={{ marginTop: 20, padding: 20 }}>
            <Grid container spacing={5}>
              <Grid item md={6} xs={12}>
                <img
                  src={recipe?.imgUrl}
                  alt={recipe?.title}
                  className="recipe-img"
                />
              </Grid>
              <Grid item md={6} style={{ width: '100%' }}>
                {recipe?.ingredients && (
                  <RecipeIngredient ingredients={recipe.ingredients} />
                )}
              </Grid>
            </Grid>
          </Paper>

          {recipe?.preparations && (
            <Paper elevation={3} style={{ marginTop: 20, padding: 20 }}>
              <RecipePreparation preparations={recipe.preparations} />
            </Paper>
          )}
        </>
      )}
    </div>
  );
};
