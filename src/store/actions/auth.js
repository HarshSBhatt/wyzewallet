import * as ActionTypes from '../actionTypes';

export const requestLogin = (creds) => {
	return {
		type: ActionTypes.LOGIN_REQUEST,
		creds
	};
};

export const receiveLogin = (response) => {
	console.log(response);
	return {
		type: ActionTypes.LOGIN_SUCCESS,
		token: response.token
	};
};

export const loginError = (message) => {
	return {
		type: ActionTypes.LOGIN_FAILURE,
		message
	};
};

export const loginUser = (creds) => (dispatch) => {
	dispatch(requestLogin(creds));

	setTimeout(() => {
		if (creds.password === 'abcd' && creds.email === 'a@a.com') {
			console.log(creds);
			localStorage.setItem('token', 'Harsh');
			localStorage.setItem('creds', JSON.stringify(creds));
			dispatch(receiveLogin({ token: 'Harsh' }));
		} else {
			dispatch(loginError('Invalid Credentials'));
		}
	}, 4000);
};

export const requestLogout = () => {
	return {
		type: ActionTypes.LOGOUT_REQUEST
	};
};

export const receiveLogout = () => {
	return {
		type: ActionTypes.LOGOUT_SUCCESS
	};
};

// Logs the user out
export const logoutUser = () => (dispatch) => {
	dispatch(requestLogout());
	localStorage.removeItem('token');
	localStorage.removeItem('creds');
	dispatch(receiveLogout());
};
