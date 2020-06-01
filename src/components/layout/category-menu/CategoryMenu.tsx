import './CategoryMenu.scss';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Category } from 'src/models/Category';
import TheMealDBService from 'src/services/themealdb.service';
import { AppState } from 'src/store';

export const CategoryMenu: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const history = useHistory();
  const open = useSelector((state: AppState) => state.menuCategory.open);

  useEffect(() => {
    TheMealDBService.categories().then((response) => {
      setCategories(response);
    });
  }, []);

  const handleCategoryClick = (name: string) => {
    history.push(`/categories/${name}`);
  };

  return (
    <div className="category-menu-container">
      <Grid container>
        <Grid item xs={12} className="menu-open" hidden={!open}>
          {categories &&
            categories.map((cat) => (
              <ButtonBase
                key={cat.id}
                disableTouchRipple
                onClick={() => handleCategoryClick(cat.name)}
              >
                <Avatar
                  src={cat.imgUrl}
                  alt={cat.name}
                  className="category-icon"
                />
                <Typography variant="caption">{cat.name}</Typography>
              </ButtonBase>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};
