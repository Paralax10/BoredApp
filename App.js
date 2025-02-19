import React from 'react';
import { PaperProvider } from 'react-native-paper';
import ActivityScreen from './screens/ActivityScreen';

const App = () => {
  return (
    <PaperProvider>
      <ActivityScreen />
    </PaperProvider>
  );
};

export default App;
