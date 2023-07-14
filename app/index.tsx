import React from 'react';
import { Redirect } from 'expo-router';

const App: React.FC = () => (
  <Redirect href="/home" />
);

export default App;
