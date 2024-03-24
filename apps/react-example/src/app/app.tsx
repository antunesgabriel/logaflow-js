// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { LogaflowWidget } from '@logaflow/react';

export function App() {
  return (
    <>
      <LogaflowWidget projectKey="29e159ad-b237-4cce-af4e-16022b075525" />

      <div>
        <h1>
          <span> Hello there, </span>
          Welcome showcase 👋
        </h1>
      </div>
    </>
  );
}

export default App;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: typeof import('@testing-library/react').render;

  beforeEach(async () => {
    render = (await import('@testing-library/react')).render;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome showcase/gi)).toBeTruthy();
  });
}
