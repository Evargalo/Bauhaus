import React, { Component } from 'react';
import PageSubtitle from 'js/components/shared/page-subtitle';
import PageTitle from 'js/components/shared/page-title';
import D from 'js/i18n';
import { goBack } from 'js/utils/redirection';
import NoteFlag from 'js/components/shared/note-flag/note-flag';
import PropTypes from 'prop-types';
import Button from 'js/components/shared/button';
import SelectRmes from 'js/components/shared/select-rmes';
import { validate } from './validation';

const defaultOperation = {
	prefLabelLg1: '',
	prefLabelLg2: '',
	altLabelLg1: '',
	altLabelLg2: '',
};
class OperationsOperationEdition extends Component {
	static propTypes = {
		operation: PropTypes.object.isRequired,
		langs: PropTypes.object.isRequired,
		saveOperation: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			operation: {
				...defaultOperation,
				...props.operation,
			},
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			operation: {
				...defaultOperation,
				...nextProps.operation,
			},
		});
	}
	onChange = e => {
		let override = {
			[e.target.id]: e.target.value,
		};
		if (e.target.id === 'idSeries') {
			override = {
				series: {
					id: e.target.value,
				},
			};
		}
		this.setState({
			operation: {
				...this.state.operation,
				...override,
			},
		});
	};
	onSubmit = () => {
		this.props.saveOperation(
			this.state.operation,
			(id = this.state.operation.id) => {
				this.props.history.push(`/operations/operation/${id}`);
			}
		);
	};

	render() {
		const {
			langs: { lg1, lg2 },
		} = this.props;

		const seriesOptions = this.props.series.map(s => {
			return { value: s.id, label: s.label };
		});
		const { operation } = this.state;
		const series = operation.series || { id: '' };
		const isEditing = !!operation.id;

		const errors = validate(operation);

		return (
			<div className="container editor-container">
				{isEditing && (
					<>
						<PageTitle
							title={this.props.operation.prefLabelLg1}
							context="operations"
						/>
						{this.props.operation.prefLabelLg2 && (
							<PageSubtitle
								subTitle={this.props.operation.prefLabelLg2}
								context="operations"
							/>
						)}
					</>
				)}

				<div className="row btn-line">
					<Button
						action={goBack(this.props, '/operations/operations')}
						label={
							<React.Fragment>
								<span
									className="glyphicon glyphicon-floppy-remove"
									aria-hidden="true"
								/>
								<span> {D.btnCancel}</span>
							</React.Fragment>
						}
						context="operations"
					/>

					<div className="col-md-8 centered">
						<div
							style={{ visibility: errors.errorMessage ? 'visible' : 'hidden' }}
							className="alert alert-danger bold"
							role="alert"
						>
							{/* HACK: if no content, the line height is set to 0 and the rest
	              of the page moves a little  */}
							{errors.errorMessage || (
								<span style={{ whiteSpace: 'pre-wrap' }}> </span>
							)}
						</div>
					</div>
					<Button
						action={this.onSubmit}
						label={
							<React.Fragment>
								<span
									className="glyphicon glyphicon-floppy-disk"
									aria-hidden="true"
								/>
								<span> {D.btnSave}</span>
							</React.Fragment>
						}
						context="operations"
						disabled={errors.errorMessage}
					/>
				</div>
				<form>
					{!isEditing && (
						<div className="row">
							<div className="form-group col-md-12">
								<SelectRmes
									placeholder={D.seriesTitle}
									unclearable
									value={series.id}
									options={seriesOptions}
									onChange={value =>
										this.onChange({
											target: { value, id: 'idSeries' },
										})
									}
								/>
							</div>
						</div>
					)}

					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor="prefLabelLg1">
								<NoteFlag text={D.title} lang={lg1} />
								<span className="boldRed">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								id="prefLabelLg1"
								value={operation.prefLabelLg1}
								onChange={this.onChange}
								aria-invalid={errors.fields.prefLabelLg1}
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="prefLabelLg2">
								<NoteFlag text={D.title} lang={lg2} />
								<span className="boldRed">*</span>
							</label>
							<input
								type="text"
								className="form-control"
								id="prefLabelLg2"
								value={operation.prefLabelLg2}
								onChange={this.onChange}
								aria-invalid={errors.fields.prefLabelLg2}
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor="altLabelLg1">
								<NoteFlag text={D.altLabel} lang={lg1} />
							</label>
							<input
								type="text"
								className="form-control"
								id="altLabelLg1"
								value={operation.altLabelLg1}
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="altLabelLg2">
								<NoteFlag text={D.altLabel} lang={lg2} />
							</label>
							<input
								type="text"
								className="form-control"
								id="altLabelLg2"
								value={operation.altLabelLg2}
								onChange={this.onChange}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default OperationsOperationEdition;
