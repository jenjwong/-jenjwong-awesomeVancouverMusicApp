import React from 'react';

import MainContainer from './MainContainer';
import { Match, Miss } from 'react-router';
import '../../css/normalize.css';
import '../../css/App.css';

const App = () => (
  <div>
    <Match
      exactly pattern="/"
      component={MainContainer}
    />
   <Miss
     component={MainContainer}
   />
  </div>
  );

export default App;
