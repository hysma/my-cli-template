import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import BlankLayout from "../layouts/BlankLayout";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

/* eslint-disable */
const HomeComponent = lazy(() => import('../pages/Home'));
const LoginComponent = lazy(() => import('../pages/Login'));
/* eslint-disable */
export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: BasicLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/home"} />
          },
          {
            path: "/home",
            component: SuspenseComponent(HomeComponent),
          },
          {
            path: "/login",
            component: SuspenseComponent(LoginComponent),
          }
        ]
      }
    ]
  }
];
