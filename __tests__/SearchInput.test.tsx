import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchInput from '../src/components/SearchInput';

describe('SearchInput', () => {
  it('renders correctly with given value', () => {
    const { getByDisplayValue } = render(
      <SearchInput value="username" onChange={jest.fn()} />
    );

    expect(getByDisplayValue('username')).toBeTruthy();
  });

  it('calls onChange with correct value when text input changes', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput value="" onChange={onChange} />
    );

    fireEvent.changeText(getByPlaceholderText('Enter username'), 'newuser');
    expect(onChange).toHaveBeenCalledWith('newuser');
  });
});
