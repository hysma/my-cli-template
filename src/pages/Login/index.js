import React from 'react';
import { renderRoutes } from "react-router-config";

function Login(props) {
  const { route } = props;

  return (
    <div>
      <h1>Login Page</h1>
      { renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Login);