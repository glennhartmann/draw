import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from '../theme';
import LandingPage from './LandingPage';
import GamePage from './GamePage';
import UserNameDialog from './UserNameDialog';
import WordSelectionDialog from './WordSelectionDialog';
import Snackbars from './Snackbars';

export default ({ history }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return <ConnectedRouter history={history}>
    <ThemeProvider theme={mainTheme(prefersDarkMode)}>
      <CssBaseline />
      <Switch>
        <Route path='/' exact={true} component={LandingPage} />
        <Route path='/:id' component={GamePage} />
      </Switch>
      <UserNameDialog />
      <WordSelectionDialog />
      <Snackbars />
    </ThemeProvider>
  </ConnectedRouter>;
}
