import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Route from './src/navigation/Routes';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Route />
    </View>
  );
};

export default App;
