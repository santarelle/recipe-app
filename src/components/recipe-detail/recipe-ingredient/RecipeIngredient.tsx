import React, { useState } from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

type RecipeIngredientProps = {
  ingredients: { name: string; measure: string }[];
};

export const RecipeIngredient: React.FC<RecipeIngredientProps> = (
  props: RecipeIngredientProps,
) => {
  const { ingredients } = props;
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (name: string) => () => {
    if (checked.some((c) => c === name)) {
      setChecked(checked.filter((c) => c !== name));
    } else {
      setChecked([...checked, name]);
    }
  };

  return (
    <div className="recipe-ingredient-container">
      <Typography variant="h4" component="h3">
        Ingredients
      </Typography>
      <Divider className="divider" />
      <List>
        {ingredients &&
          ingredients.map((i) => (
            <ListItem key={i.name} button dense onClick={handleToggle(i.name)}>
              <ListItemIcon>
                {checked.some((c) => c === i.name) ? (
                  <FavoriteIcon color="secondary" />
                ) : (
                  <FavoriteBorderIcon color="secondary" />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  <span>
                    <strong>{i.measure}</strong>
                    &nbsp;
                    {i.name}
                  </span>
                }
                style={{ fontSize: '20px' }}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
};
