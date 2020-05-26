import './CategoryMenu.scss';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import { Category } from 'src/models/Category';
import TheMealDBService from 'src/services/themealdb.service';

export const CategoryMenu: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const history = useHistory();

  useEffect(() => {
    TheMealDBService.categories().then((response) => {
      setCategories(response);
    });
  }, []);

  const handleClick = (name: string) => {
    history.push(`/categories/${name}`);
  };

  return (
    <div className="category-menu-container">
      {categories &&
        categories.map((cat) => (
          <ButtonBase
            key={cat.id}
            disableTouchRipple
            onClick={() => handleClick(cat.name)}
          >
            <Avatar src={cat.imgUrl} alt={cat.name} className="category-icon" />
            <Typography>{cat.name}</Typography>
          </ButtonBase>
        ))}
    </div>
  );
};
