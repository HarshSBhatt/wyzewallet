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
	.required('Required Field')
	.max(new Date(), "You can't be born in the future!")
	.typeError('Please enter valid date of birth');

export const registerSchema = Yup.object().shape({
	firstname: Yup.string().required('Required Field').max(10, 'At most 10 characters').min(3, 'At least 3 characters'),
	lastname: Yup.string().required('Required Field').max(10, 'At most 10 characters').min(3, 'At least 3 characters'),
	email: Yup.string().email().required('Required Field'),
	password: Yup.string().required('Required Field').min(8, 'At least 8 characters'),
	passwordConfirmation: Yup.string().oneOf([ Yup.ref('password'), null ], 'Passwords must match'),
	gender: Yup.string().required('Required Field'),
	birthdate: dob
});

//! Login Schema

export const loginSchema = Yup.object().shape({
	email: Yup.string().email().required('Required Field'),
	password: Yup.string().required('Required Field')
});

//! Redirection Path

export const getRedirectionPath = (loc) => {
	return loc === undefined ? '/' : loc.from.pathname;
};
