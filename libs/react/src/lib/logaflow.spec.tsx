import { render } from '@testing-library/react';

import { LogaflowWidget } from './logaflow';

describe('Logaflow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogaflowWidget projectKey="xpto" />);
    expect(baseElement).toBeTruthy();
  });
});
