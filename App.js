import React from 'react';
import Navigator from './components/navigators/Navigator';
import {MediaProvider} from './components/contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <Navigator></Navigator>
    </MediaProvider>
  );
};

export default App;
