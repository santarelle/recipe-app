import React from 'react';

type RecipePreparationProps = {
  preparations: string[];
};

export const RecipePreparation: React.FC<RecipePreparationProps> = (
  props: RecipePreparationProps,
) => {
  const { preparations } = props;
  return (
    <ul>{preparations && preparations.map((i) => <li key={i}>{i}</li>)}</ul>
  );
};
