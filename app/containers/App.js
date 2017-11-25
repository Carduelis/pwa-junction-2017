import React, { Component } from 'react';
import BandsListPage from './BandsListPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import Page from './Page';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
class App extends Component {
  constructor(props) {
    super(props);
  }
	componentWillMount() {
	}
  onSetSidebarOpen() {
  }
  render() {
    return (
			<Router>
        <div className="react-web">
					<Page>
          <Switch>
            <Route exact path='/' component={LoginPage} />
						<Route path='/bands' component={BandsListPage} />
						<Route component={NotFoundPage} />
					</Switch>
					</Page>
        </div>
      </Router>
    );
  }
}

export default App;
