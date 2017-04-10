import React from 'react';

import MainContainer from './MainContainer';
// import AsynchRoute from './AsynchRoute'
import { Match, Miss } from 'react-router';
import '../../css/normalize.css';
import '../../css/App.css';


if (global) {
  global.System = { import() {} };
}

const App = () => (
  <div>
    <Match
      exactly pattern="/"
      component={MainContainer}
    />
    {/* component={(props) => <AsynchRoute props={props}
          loadingPromise={System.import('./Main')} />

        } /> */}
    {/* <Miss component={Main} /> */}
  </div>
  );


export default App;
