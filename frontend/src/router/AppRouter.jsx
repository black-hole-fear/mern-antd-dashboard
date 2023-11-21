import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Home = lazy(() => 
  import(/*webpackChunkName: 'HomePage'*/ "@/pages/Home")
);

const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const Apartment = lazy(() =>
  import(/*webpackChunkName:'ApartmentPage'*/ "@/pages/Apartment")
);

const Reservation = lazy(() =>
  import(/*webpackChunkName:'Reservation'*/ "@/pages/Reservation")
);

const Report = lazy(() =>
  import(/*webpackChunkName:'Report'*/ "@/pages/Report")
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Report} path="/reports" exact />
          <PrivateRoute component={Apartment} path="/apartments" exact />
          <PrivateRoute component={Admin} path="/managers" exact />
          <PrivateRoute component={Reservation} path="/reservations" exact />

          <PrivateRoute component={Logout} path="/logout" exact />
          <PublicRoute path="/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
