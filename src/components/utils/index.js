import * as Yup from 'yup';

//! Today's Date

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

export const DATE = `${yyyy}-${mm}-${dd}`;
export const MAX_AGE = `${yyyy - 18}-${mm}-${dd}`;
export const MIN_AGE = `${yyyy - 80}-${mm}-${dd}`;

//! Validation Schema

//! Register Schema

const dob = Yup.date()
	.required('Required')
	.max(new Date(), "you can't be born in the future!")
	.typeError('please enter valid date of birth');

export const registerSchema = Yup.object().shape({
	firstname: Yup.string().required('required').max(10).min(3),
	lastname: Yup.string().required('required').max(10).min(3),
	email: Yup.string().email().required(),
	password: Yup.string().required().min(8).max(16),
	passwordConfirmation: Yup.string().oneOf([ Yup.ref('password'), null ], 'passwords must match'),
	gender: Yup.string().required('required'),
	birthdate: dob
});

//! Login Schema

export const loginSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().required()
});

//! Redirection Path

export const getRedirectionPath = (loc) => {
	return loc === undefined ? '/' : loc.from.pathname;
};
