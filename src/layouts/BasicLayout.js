import React from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

function BasicLayout(props) {
  const { route } = props;

  return (
    <div>
      <header>Main Header</header>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(BasicLayout);
