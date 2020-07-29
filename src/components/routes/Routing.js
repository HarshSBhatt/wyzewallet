import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchPage from '../pages/SearchPage';
import Main from '../common/Main';
import Header from '../common/Header';
import Login from '../user/Login';
import { Register } from '../user/Register';

const NotFound = () => {
	return <div>404 Not Found</div>;
};

function Routing({ darkMode }) {
	return (
		<Fragment>
			<Header {...{ darkMode }} />
			{/* <Link to="/">Home</Link>
			<Link to="/search?q=AnyQuery">Search</Link> */}

			<div className="App">
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route path="/search" component={SearchPage} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Fragment>
	);
}

export default Routing;
