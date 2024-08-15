import React, { useState, useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import Icon from 'react-native-vector-icons/FontAwesome';

interface User {
  login: string;
  id: number;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

interface Props {
  users: User[];
  fetchRepositories: (username: string) => Promise<Repository[]>;
}

const UserList: React.FC<Props> = ({ users, fetchRepositories }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleSelectUser = useCallback(async (user: User) => {
    if (selectedUserId === user.id) {
      setRepositories([]);
      setSelectedUserId(null);
    } else {
      const repos = await fetchRepositories(user.login);
      setRepositories(repos);
      setSelectedUserId(user.id);
    }
  }, [selectedUserId, fetchRepositories]);

  const renderUserItem = useCallback(({ item }: { item: User }) => (
    <View>
      <TouchableOpacity onPress={() => handleSelectUser(item)}>
        <View style={styles.container}>
          <Text style={styles.userItem}>{item.login}</Text>
          <Icon 
            name={selectedUserId === item.id ? "chevron-up" : "chevron-down"} 
            size={16} 
            color="#000000" 
          />
        </View>
      </TouchableOpacity>
      {selectedUserId === item.id && (
        <FlatList
          data={repositories}
          keyExtractor={(repo) => repo.id.toString()}
          renderItem={({ item: repo }) => (
            <RepositoryItem
              name={repo.name}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
              html_url={repo.html_url}
            />
          )}
        />
      )}
    </View>
  ), [selectedUserId, repositories]);

  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderUserItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    borderRadius: 2,
    padding: 10,
  },
  userItem: {
    fontSize: 18,
  },
});

export default React.memo(UserList);
