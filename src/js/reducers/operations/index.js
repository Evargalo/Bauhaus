import listReducer from '../utils/list-reducer';
import * as A from 'js/actions/constants';

const seriesList = listReducer([
	A.LOAD_OPERATIONS_SERIES_LIST,
	A.LOAD_OPERATIONS_SERIES_LIST_SUCCESS,
	A.LOAD_OPERATIONS_SERIES_LIST_FAILURE,
]);

export default {
	seriesList,
};
