import { render } from '@testing-library/react';

import LogaflowWidget from './logaflow-widget';

describe('LogaflowWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogaflowWidget />);
    expect(baseElement).toBeTruthy();
  });
});
