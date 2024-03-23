import { render } from '@testing-library/react';

import {Logaflow} from './logaflow';

describe('Logaflow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logaflow />);
    expect(baseElement).toBeTruthy();
  });
});
