import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Routes from '@/utilities/routes';

import Home from '@pages/Home';
import AboutMe from '@pages/AboutMe';
import NotFound from '@pages/NotFound';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={Routes.home} component={Home} />
      <Route exact path={Routes.aboutMe} component={AboutMe} />
      <Route exact path={Routes.notFound} component={NotFound} />
      <Route exact path='*'>
        <Redirect to={Routes.notFound} />
      </Route>
    </Switch>
  );
};

export default AppRouter;
