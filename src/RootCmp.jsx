import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { routes } from './routes.js';

import './App.css';
import App from './App.jsx';

export function RootCmp() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} exact element={<route.component />} path={route.path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
