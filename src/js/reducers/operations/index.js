import listReducer from '../utils/list-reducer';
import * as A from 'js/actions/constants';

const operationsSeriesList = listReducer([
	A.LOAD_OPERATIONS_SERIES_LIST,
	A.LOAD_OPERATIONS_SERIES_LIST_SUCCESS,
	A.LOAD_OPERATIONS_SERIES_LIST_FAILURE,
]);

const operationsOperationsList = listReducer([
	A.LOAD_OPERATIONS_OPERATIONS_LIST,
	A.LOAD_OPERATIONS_OPERATIONS_LIST_SUCCESS,
	A.LOAD_OPERATIONS_OPERATIONS_LIST_FAILURE,
]);

const operationsFamiliesList = listReducer([
	A.LOAD_OPERATIONS_FAMILIES_LIST,
	A.LOAD_OPERATIONS_FAMILIES_LIST_SUCCESS,
	A.LOAD_OPERATIONS_FAMILIES_LIST_FAILURE,
]);

export default {
	operationsSeriesList,
	operationsOperationsList,
	operationsFamiliesList,
};
