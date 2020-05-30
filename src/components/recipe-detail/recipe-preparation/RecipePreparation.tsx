import React from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

type RecipePreparationProps = {
  preparations: string[];
};

export const RecipePreparation: React.FC<RecipePreparationProps> = (
  props: RecipePreparationProps,
) => {
  const { preparations } = props;
  return (
    <div className="recipe-preparation-container">
      <Typography variant="h4" component="h3">
        Preparation
      </Typography>

      <Divider className="divider" />

      <Grid container>
        {preparations &&
          preparations.map((step, idx) => (
            <>
              <Grid
                item
                md={2}
                xs={12}
                key={step}
                style={{ paddingBottom: '20px' }}
              >
                <Typography variant="h4" component="h3">
                  Step&nbsp;
                  {idx + 1}
                </Typography>
              </Grid>
              <Grid item md={10} style={{ paddingBottom: '20px' }}>
                <Typography variant="body2">{step}</Typography>
              </Grid>
            </>
          ))}
      </Grid>
    </div>
  );
};
