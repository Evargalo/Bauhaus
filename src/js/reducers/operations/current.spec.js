import * as reducer from './current';
import * as A from 'js/actions/constants';

describe('current reducer', () => {
	describe('operationsFamiliesCurrent', () => {
		it('LOAD_OPERATIONS_SERIE_SUCCESS', () => {
			expect(
				reducer.operationsFamiliesCurrent('state', {
					type: A.LOAD_OPERATIONS_FAMILY_SUCCESS,
					payload: 'payload',
				})
			).toEqual('payload');
		});
		it('SAVE_OPERATIONS_FAMILY', () => {
			expect(
				reducer.operationsFamiliesCurrent('state', {
					type: A.SAVE_OPERATIONS_FAMILY,
					payload: 'payload',
				})
			).toEqual('payload');
		});
	});

	[
		{
			method: 'operationsSeriesCurrent',
			returnPayload: ['LOAD_OPERATIONS_SERIE_SUCCESS', 'SAVE_OPERATIONS_SERIE'],
			returnEmpty: ['SAVE_OPERATIONS_SERIE_SUCCESS'],
		},
		{
			method: 'operationsOperationsCurrent',
			returnPayload: [
				'LOAD_OPERATIONS_OPERATION_SUCCESS',
				'LOAD_OPERATIONS_OPERATION_SUCCESS',
			],
			returnEmpty: ['SAVE_OPERATIONS_SIMS_SUCCESS'],
		},
		{
			method: 'operationsIndicatorsCurrent',
			returnPayload: [
				'LOAD_OPERATIONS_INDICATOR_SUCCESS',
				'SAVE_OPERATIONS_INDICATOR',
			],
			returnEmpty: ['SAVE_OPERATIONS_INDICATOR_SUCCESS'],
		},
		{
			method: 'operationsSimsCurrent',
			returnPayload: ['LOAD_OPERATIONS_SIMS_SUCCESS', 'SAVE_OPERATIONS_SIMS'],
			returnEmpty: ['SAVE_OPERATIONS_SIMS_SUCCESS'],
		},
	].forEach(configuration => {
		describe(configuration.method, () => {
			configuration.returnPayload.forEach(action => {
				it(action, () => {
					expect(
						reducer[configuration.method]('state', {
							type: A[action],
							payload: 'payload',
						})
					).toEqual('payload');
				});
			});
			configuration.returnEmpty.forEach(action => {
				it(action, () => {
					expect(
						reducer[configuration.method]('state', {
							type: A[action],
							payload: 'payload',
						})
					).toEqual({});
				});
			});
		});
	});
});
