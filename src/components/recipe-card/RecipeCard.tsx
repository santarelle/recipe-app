import './RecipeCard.scss';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
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
        <Link to={`recipe/${recipe.titleUnique}`}>
          <div className="card-media">
            <CardMedia
              component="img"
              alt={recipe.title}
              height="250"
              image={recipe.imgUrl}
              title={recipe.title}
            />
          </div>
        </Link>
        <CardContent>
          <div className="content-header">
            <Link to={`recipe/${recipe.titleUnique}`} className="title">
              <Typography variant="h6" gutterBottom color="primary">
                {recipe.title}
              </Typography>
            </Link>

            <div className="actions-btn">
              <Tooltip title={toolTipTitle} placement="top">
                <IconButton
                  onMouseEnter={() => setFavoriteIcon(false)}
                  onMouseLeave={() => setFavoriteIcon(true)}
                  onClick={handleFavorite}
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

              <Link to={`recipe/${recipe.titleUnique}`}>
                <Button variant="outlined" color="secondary">
                  Cook
                </Button>
              </Link>
            </div>
          </div>

          <div className="content-info">
            <div className="content-left">
              <ViewListIcon color="secondary" />
              {recipe.categoryName}
            </div>

            <div className="content-right">
              {recipe.tags && (
                <>
                  <LocalOfferIcon color="secondary" />
                  {recipe.tags}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
