import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloak from "./Keycloak"
import PrivateRoute from './helpers/PrivateRoute';
import HelloPage from './pages/HelloPage';
import SamplePage from './pages/SamplePage';
import DashboardPage from './pages/DashboardPage';

const initOptions = { 
  pkceMethod: 'S256',
  redirectUri: 'http://localhost:4200/dashboard' 
}

const handleLogInOut = () => {
  if (keycloak.authenticated) {
    keycloak.logout()
  } else {
    keycloak.login()
  }
}

const getLogInOutText = () => {
  return keycloak.authenticated ? "Logout " + keycloak.tokenParsed.preferred_username : "Login"
}

function App() {
  return (
    <ReactKeycloakProvider 
      authClient={keycloak}
      initOptions={initOptions}
    >
      <p>Welcome to my-auth App!</p>
      <div>
        <button
          type="button"
          onClick={() => handleLogInOut()}
        >
          {getLogInOutText()}
        </button>
      </div>
      <div class='container'>
        <hr class="beautiful-line" />
      </div>

      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello">Hello Page</Link>
          </li>
          <PrivateRoute>
            <li>
              <Link to="/sample">Sample Page</Link>
            </li>
          </PrivateRoute>
          <PrivateRoute>
            <li>
              <Link to="/dashboard">Dashboard Page</Link>
            </li>
          </PrivateRoute>
        </ul>
        <div class='container'>
          <hr class="beautiful-line" />
        </div>

        <Routes>
              <Route exact path='/hello' element={< HelloPage />}></Route>
              <Route path='/sample' element={<PrivateRoute>< SamplePage /></PrivateRoute>}></Route>
              <Route path='/dashboard' element={<PrivateRoute>< DashboardPage /></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
