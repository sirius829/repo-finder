import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryItem from '../src/components/RepositoryItem';

describe('RepositoryItem', () => {
  it('renders the repository name, description, and star count correctly', () => {
    const repository = {
      name: 'react-native',
      description: 'A framework for building native apps with React.',
      stargazers_count: 150000,
      html_url: 'https://github.com/facebook/react-native',
    };

    const { getByText } = render(<RepositoryItem {...repository} />);

    expect(getByText('react-native')).toBeTruthy();
    expect(getByText('A framework for building native apps with React.')).toBeTruthy();
    expect(getByText('150000')).toBeTruthy();
  });

  it('displays the star icon correctly', () => {
    const repository = {
      name: 'react',
      description: 'A JavaScript library for building user interfaces.',
      stargazers_count: 150000,
      html_url: 'https://github.com/facebook/react',
    };

    const { getByTestId } = render(<RepositoryItem {...repository} />);
    const starIcon = getByTestId('star-icon');

    expect(starIcon).toBeTruthy();
  });
});
