import { render } from '@testing-library/react';
import React from 'react';

import { Loading } from '../Loading';

describe('Loading component Tests', () => {
  test('should render progressbar with MuiCircularProgress-svg', () => {
    const { getByRole } = render(<Loading />);

    expect(getByRole('progressbar').children.item(0)).toBeInstanceOf(
      SVGSVGElement,
    );
    expect(getByRole('progressbar').children.item(0).classList.value).toBe(
      'MuiCircularProgress-svg',
    );
  });
});
