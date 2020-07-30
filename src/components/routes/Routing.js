import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../common/PrivateRoute';
import SearchPage from '../pages/SearchPage';
import Main from '../common/Main';
import Login from '../user/Login';
import { Register } from '../user/Register';

const NotFound = () => {
	return <div>404 Not Found</div>;
};

function Routing({ darkMode }) {
	return (
		<Fragment>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<PrivateRoute exact path="/search" component={() => <SearchPage />} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Fragment>
	);
}

export default Routing;

// 	/* <Link to="/">Home</Link>
// <Link to="/search?q=AnyQuery">Search</Link> */
