import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChange}
    value={value}
    placeholder="Enter username"
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 2, 
  },
});

export default SearchInput;
