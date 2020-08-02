import * as ActionTypes from '../actionTypes';
import isEmpty from '../utils/is-empty';

const initialState = {
	isLoading: false,
	isAuthenticated: false,
	token: localStorage.getItem('token'),
	user: {},
	errMess: null
};
export const Auth = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				isAuthenticated: false
			};
		case ActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				errMess: '',
				token: action.token
			};
		case ActionTypes.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		case ActionTypes.LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				errMess: action.message
			};
		case ActionTypes.LOGOUT_REQUEST:
			return {
				...state,
				isLoading: true,
				isAuthenticated: true
			};
		case ActionTypes.LOGOUT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				token: '',
				user: null
			};
		default:
			return state;
	}
};
