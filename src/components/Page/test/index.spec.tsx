import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Page from '../index';

const content = <div>Test</div>;

describe('Page component', () => {
  it('should render correctly', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  })

  it('should contain the empty cart message', () => {
    const { getByText } = render(<Page>{content}</Page>);
    expect(getByText('Test')).toBeDefined();
    expect(() => getByText('no exist')).toThrow();
  });
});
