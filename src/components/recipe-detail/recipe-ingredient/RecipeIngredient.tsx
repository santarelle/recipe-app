import React from 'react';

type RecipeIngredientProps = {
  ingredients: { name: string; measure: string }[];
};

export const RecipeIngredient: React.FC<RecipeIngredientProps> = (
  props: RecipeIngredientProps,
) => {
  const { ingredients } = props;
  return (
    <ul>
      {ingredients && ingredients.map((i) => <li key={i.name}>{i.name}</li>)}
    </ul>
  );
};
