import { mapStateToProps } from './index';
import { EXPORT_VARBOOK } from 'js/actions/constants';

describe('mapStateToProps', () => {
	it('should return right props', () => {
		const input = {
			app: {
				secondLang: 'en',
				properties: {
					lg1: 'fr',
					lg2: 'en',
				},
			},
			operationsOperationsCurrent: {
				id: '1',
			},
			remoteCalls: {
				[EXPORT_VARBOOK]: {
					status: 'status',
				},
			},
		};
		const output = {
			exportStatus: 'status',
			id: '1',
			langs: { lg1: 'fr', lg2: 'en' },
			operation: { id: '1' },
			secondLang: 'en',
		};
		expect(
			mapStateToProps(input, {
				match: { params: { id: '1' } },
			})
		).toEqual(output);
	});
});
