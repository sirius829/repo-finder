import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SearchInput from '@/components/SearchInput';
import UserList from '@/components/UserList';
import { useGitHub } from '@/hooks/useGitHub';

const Main = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { users, searchUsers, fetchRepositories } = useGitHub();

    return (
        <View style={styles.container}>
            <SearchInput value={searchQuery} onChange={setSearchQuery}/>
            <TouchableOpacity style={styles.button} onPress={() => searchUsers(searchQuery)}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            {searchQuery && 
              <Text style={styles.text}>Showing users for "{searchQuery}"</Text>
            }
            <UserList users={users} fetchRepositories={fetchRepositories}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  button: {
    height: 40,
    backgroundColor: '#007BFF',
    padding: 5,
    alignItems: 'center',
    verticalAlign: 'middle',
    borderRadius: 2,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    color: 'grey',
    fontSize: 16,
    marginTop: 10,
  },
});

export default Main;
