import axios from 'axios';
import jwt_decode from 'jwt-decode';

import * as ActionTypes from '../actionTypes';
import { setAuthHeader } from '../../components/utils/setAuthHeader';

export const setCurrentUser = (decoded) => {
	return {
		type: ActionTypes.SET_CURRENT_USER,
		payload: decoded
	};
};

export const requestLogin = () => {
	return {
		type: ActionTypes.LOGIN_REQUEST
	};
};

export const receiveLogin = (token) => {
	return {
		type: ActionTypes.LOGIN_SUCCESS,
		token
	};
};

export const loginError = (message) => {
	return {
		type: ActionTypes.LOGIN_FAILURE,
		message
	};
};

export const loginUser = (creds) => (dispatch) => {
	dispatch(requestLogin());
	axios
		.post('/users/login', creds)
		.then((res) => {
			const { token } = res.data;
			const decoded = jwt_decode(token);

			localStorage.setItem('token', token);
			setAuthHeader(token);
			dispatch(receiveLogin(token));
			dispatch(setCurrentUser(decoded));
		})
		.catch((error) => {
			console.log(error);
			dispatch(loginError(error.message));
		});
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
	dispatch(receiveLogout());
};
