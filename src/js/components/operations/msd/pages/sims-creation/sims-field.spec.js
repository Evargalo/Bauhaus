import React from 'react';
import Field from './sims-field';
import { shallow } from 'enzyme';
import { rangeType } from 'js/utils/msd/';
import DatePickerRmes from 'js/components/shared/date-picker-rmes';
import InputRmes from 'js/components/shared/input-rmes';
import EditorMarkdown from 'js/components/shared/editor-html/editor-markdown';
import SelectRmes from 'js/components/shared/select-rmes';
import { Note } from 'js/components/shared/note/note';

const { RICH_TEXT, TEXT, DATE, CODE_LIST } = rangeType;

describe('Sims Field', () => {
	it('if isPresentational is true, should not display any fields', () => {
		const general = shallow(
			<Field
				msd={{
					masLabelLg2: 'masLabelLg2',
					rangeType: TEXT,
					isPresentational: true,
				}}
				codesLists={{}}
			/>
		);
		expect(general.find(InputRmes).length).toBe(0);
		expect(general.find(DatePickerRmes).length).toBe(0);
		expect(general.find(EditorMarkdown).length).toBe(0);
		expect(general.find(SelectRmes).length).toBe(0);
	});
	it('should display only one field', () => {
		const general = shallow(
			<Field
				msd={{
					masLabelLg2: 'masLabelLg2',
					rangeType: TEXT,
					isPresentational: false,
				}}
				codesLists={{}}
				alone={true}
			/>
		);
		expect(
			general
				.find(Note)
				.dive()
				.find(InputRmes).length
		).toBe(1);
	});

	it('when rangeType === DATE, should display a DatePickerRmes', () => {
		const general = shallow(
			<Field
				msd={{
					masLabelLg2: 'masLabelLg2',
					rangeType: DATE,
					isPresentational: false,
				}}
				codesLists={{}}
				alone={true}
			/>
		);
		expect(
			general
				.find(Note)
				.dive()
				.find(DatePickerRmes).length
		).toBe(1);
	});
	it('when rangeType === RICH_TEXT, should display a EditorMarkdown', () => {
		const general = shallow(
			<Field
				msd={{
					masLabelLg2: 'masLabelLg2',
					rangeType: RICH_TEXT,
					isPresentational: false,
				}}
				codesLists={{}}
				alone={true}
			/>
		);
		expect(
			general
				.find(Note)
				.dive()
				.find(EditorMarkdown).length
		).toBe(1);
	});
	it('when rangeType === CODE_LIST, should display a SelectRmes', () => {
		const general = shallow(
			<Field
				msd={{
					masLabelLg1: 'masLabelLg1',
					rangeType: CODE_LIST,
					isPresentational: false,
					codeList: 'codeList',
					idMas: '1',
				}}
				currentSection={{ value: 'value' }}
				codesLists={{ codeList: { codes: [] } }}
				alone={true}
				secondLang={false}
				lang={'fr'}
			/>
		);

		expect(
			general
				.find(Note)
				.dive()
				.find(SelectRmes).length
		).toBe(1);
	});
});
