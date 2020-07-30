import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { incrementCounter, decrementCounter, logoutUser } from '../../store/actions';

function Main(props) {
	return (
		<div>
			<p>{props.counter.count}</p>
			<button onClick={() => props.incrementCounter()}>Increment</button>
			<button onClick={() => props.decrementCounter()}>Decrement</button>
			<button onClick={() => props.logoutUser()}>Logout</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
	incrementCounter: () => dispatch(incrementCounter()),
	decrementCounter: () => dispatch(decrementCounter()),
	logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
