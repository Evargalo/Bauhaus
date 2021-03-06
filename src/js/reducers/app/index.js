import * as A from 'js/actions/constants';

export default function(state = {}, action) {
	const { type, payload } = action;
	if (/FAILURE$/.test(type)) {
		return {
			...state,
			error: true,
		};
	}
	switch (type) {
		case A.SAVE_SECOND_LANG: {
			return {
				...state,
				secondLang: payload,
			};
		}
		case A.SAVE_USER_PROPS: {
			return {
				...state,
				auth: { ...state.auth, user: payload },
			};
		}
		case A.CHECK_AUTH: {
			return {
				...state,
				auth: { ...state.auth, user: payload },
			};
		}
		default:
			return state;
	}
}

export function getSecondLang(state) {
	return state.app.secondLang;
}
