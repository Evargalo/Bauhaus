import React from 'react';
import { shallow } from 'enzyme';
import Status from './status';

describe('concept-send-status', () => {
	it('renders without crashing', () => {
		shallow(<Status status="OK" urlBack="/concepts" />);
	});
});
