import './RecipeCard.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ViewListIcon from '@material-ui/icons/ViewList';

import { Tooltip } from 'src/components/tooltip/Tooltip';
import { Recipe } from 'src/models/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  handleFavorite: () => void;
  isFavorite: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = (
  props: RecipeCardProps,
) => {
  const { recipe, handleFavorite, isFavorite } = props;
  const [isFavoriteIcon, setFavoriteIcon] = useState(isFavorite);
  const toolTipTitle = isFavorite ? 'Remove favorite' : 'Save favorite';

  return (
    <div className="recipe-card-container">
      <Card elevation={3}>
        <Link to={`/recipe/${recipe.titleUnique}`}>
          <div className="card-media">
            <CardMedia
              component="img"
              alt={recipe.title}
              height="200"
              image={recipe.imgUrl}
              title={recipe.title}
            />
          </div>
        </Link>
        <CardContent>
          <div className="content-header">
            <Link to={`/recipe/${recipe.titleUnique}`} className="title">
              <Typography variant="subtitle1" gutterBottom color="primary">
                {recipe.title}
              </Typography>
            </Link>

            <div className="favorite-btn">
              <Tooltip title={toolTipTitle} placement="top">
                <IconButton
                  onMouseEnter={() => setFavoriteIcon(false)}
                  onMouseLeave={() => setFavoriteIcon(true)}
                  onClick={() => {
                    handleFavorite();
                    setFavoriteIcon(true);
                  }}
                  disableRipple
                >
                  <FavoriteBorderIcon
                    fontSize="large"
                    color="secondary"
                    style={{ display: !isFavorite ? 'block' : 'none' }}
                  />
                  <FavoriteIcon
                    fontSize="large"
                    color="secondary"
                    style={{
                      display: isFavoriteIcon && isFavorite ? 'block' : 'none',
                    }}
                  />
                  <CloseIcon
                    fontSize="large"
                    color="secondary"
                    style={{
                      display: !isFavoriteIcon && isFavorite ? 'block' : 'none',
                    }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <div className="content-info">
            <ViewListIcon color="secondary" />
            <Typography variant="caption">{recipe.categoryName}</Typography>
          </div>

          <div className="content-info">
            {recipe.tags && (
              <>
                <LocalOfferIcon color="secondary" />
                <Typography variant="caption">{recipe.tags}</Typography>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
