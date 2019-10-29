import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { IndexComponent } from './src';


const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <IndexComponent />
  </ApplicationProvider>
);

export default App;