import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Loading } from 'src/components/loading/Loading';
import { RecipeIngredient } from 'src/components/recipe-detail/recipe-ingredient/RecipeIngredient';
import { RecipePreparation } from 'src/components/recipe-detail/recipe-preparation/RecipePreparation';
import { YoutubePlayer } from 'src/components/youtube-player/YoutubePlayer';
import { AppState } from 'src/store';
import { loadRecipe } from 'src/store/load-recipe/thunks';

import './RecipeDetailPage.scss';

export const RecipeDetailPage: React.FC = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { loading, recipe } = useSelector(
    (state: AppState) => state.loadRecipe,
  );

  useEffect(() => {
    const titleUnique = pathname.split('/recipe/')[1];
    const title = titleUnique.replace(/-/g, ' ');
    dispatch(loadRecipe(title));
  }, [pathname, dispatch]);

  return (
    <div className="recipe-detail-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Typography variant="h4" component="h2" color="primary">
            {recipe?.title}
          </Typography>

          <Divider className="divider" />

          {recipe?.youtubeUrl && (
            <YoutubePlayer title={recipe.title} embedUrl={recipe.youtubeUrl} />
          )}

          <Paper elevation={3} style={{ marginTop: 20, padding: 20 }}>
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
