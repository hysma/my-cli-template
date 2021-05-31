import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import store from './store';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/common.less';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </Provider>
  );
}

export default App;
