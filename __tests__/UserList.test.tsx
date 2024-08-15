import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserList from '../src/components/UserList';

describe('UserList', () => {
  const users = [
    { id: 1, login: 'user1' },
    { id: 2, login: 'user2' },
  ];

  const fetchRepositories = jest.fn();

  it('renders user list correctly', () => {
    const { getByText } = render(
      <UserList users={users} fetchRepositories={fetchRepositories} />
    );

    expect(getByText('user1')).toBeTruthy();
    expect(getByText('user2')).toBeTruthy();
  });

  it('calls fetchRepositories when a user is clicked', () => {
    const { getByText } = render(
      <UserList users={users} fetchRepositories={fetchRepositories} />
    );

    fireEvent.press(getByText('user1'));
    expect(fetchRepositories).toHaveBeenCalledWith('user1');
  });
});
