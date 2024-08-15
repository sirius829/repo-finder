import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import Main from '@/screens/Main';


export default function App() {
  const backgroundStyle = {
    backgroundColor: "linear-gradient(to bottom, #6a11cb 0%, #2575fc 100%)",
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Main />
    </SafeAreaView>
  );
}


