import React, { Component } from 'react';
import MSDLayout from 'js/components/operations/msd/layout/';
import { connect } from 'react-redux';
import Loading from 'js/components/shared/loading';
import { LOADING, NOT_LOADED, LOADED } from 'js/constants';
import loadMetadataStructure from 'js/actions/operations/metadatastructure/list';
import loadSIMS, { saveSims } from 'js/actions/operations/sims/item';
import { withRouter } from 'react-router-dom';
import MSDHelp from 'js/components/operations/msd/pages/help';
import SimsVisualisation from 'js/components/operations/msd/pages/sims-visualisation/';
import SimsCreation from 'js/components/operations/msd/pages/sims-creation/';
import buildExtract from 'js/utils/build-extract';
import { getLabelsFromOperation } from 'js/utils/msd';
import PropTypes from 'prop-types';
import { saveSecondLang } from 'js/actions/app';
import { compose } from 'recompose';
import * as select from 'js/reducers';
import PageSubtitle from 'js/components/shared/page-subtitle';
import PageTitle from 'js/components/shared/page-title';
import loadOperation from 'js/actions/operations/operations/item';
import { getSecondLang } from 'js/reducers/app';
import {
	getOperationsOrganisations,
	getOperationsCodesList,
} from 'js/reducers/operations/selector';
const extractId = buildExtract('id');
const extractIdOperation = buildExtract('idOperation');

export const HELP = 'HELP';
export const CREATE = 'CREATE';
export const VIEW = 'VIEW';
export const UPDATE = 'UPDATE';
export const DUPLICATE = 'DUPLICATE';

class MSDContainer extends Component {
	static propTypes = {
		metadataStructure: PropTypes.object,
		metadataStructureStatus: PropTypes.oneOf([LOADED, NOT_LOADED, LOADING]),
		codesLists: PropTypes.object,
		mode: PropTypes.oneOf([HELP, VIEW, CREATE, UPDATE, DUPLICATE]),
		baseUrl: PropTypes.string,
		id: PropTypes.string,
		saveSims: PropTypes.func,
		idOperation: PropTypes.string,
		disableSectionAnchor: PropTypes.bool,
		saveSecondLang: PropTypes.func,
		langs: PropTypes.object,
		secondLang: PropTypes.bool,
		currentSims: PropTypes.object,
	};
	static defaultProps = {
		currentSims: {},
	};

	goBackCallback = url => {
		this.props.history.push(url);
	};

	componentDidMount() {
		if (this.props.metadataStructureStatus !== LOADED) {
			this.props.loadMetadataStructure();
		}
		if (!this.props.currentSims.id) {
			this.props.loadSIMS(this.props.id);
		}
		if (!this.props.isOperationLoaded) {
			this.props.loadOperation(this.props.idOperation);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps.currentSims.id || this.props.id !== nextProps.id) {
			this.props.loadSIMS(nextProps.id);
		}
		if (!nextProps.isOperationLoaded) {
			this.props.loadOperation(nextProps.idOperation);
		}
	}
	render() {
		const {
			metadataStructure,
			metadataStructureStatus,
			codesLists,
			mode = HELP,
			baseUrl,
			saveSims,
			idOperation,
			disableSectionAnchor,
			saveSecondLang,
			langs,
			secondLang,
			currentSims,
			organisations,
		} = this.props;

		if (
			metadataStructureStatus !== LOADED ||
			(mode === VIEW && !currentSims.id)
		)
			return <Loading textType="loading" context="operations" />;

		return (
			<MSDLayout
				metadataStructure={metadataStructure}
				currentSection={this.props.match.params.idSection}
				storeCollapseState={mode === HELP}
				baseUrl={baseUrl}
				disableSectionAnchor={disableSectionAnchor}
			>
				{mode !== HELP && mode !== DUPLICATE && (
					<React.Fragment>
						<PageTitle title={currentSims.labelLg1} context="operations" />
						{secondLang && (
							<PageSubtitle
								subTitle={currentSims.labelLg2}
								context="operations"
							/>
						)}
					</React.Fragment>
				)}
				{mode === HELP && (
					<MSDHelp
						metadataStructure={metadataStructure}
						codesLists={codesLists}
						currentSection={this.props.match.params.idSection}
						langs={langs}
						organisations={organisations}
					/>
				)}

				{mode === VIEW && (
					<SimsVisualisation
						sims={currentSims}
						idOperation={currentSims.idOperation}
						metadataStructure={metadataStructure}
						codesLists={codesLists}
						organisations={organisations}
						currentSection={this.props.match.params.idSection}
						saveSecondLang={saveSecondLang}
						langs={langs}
						secondLang={secondLang}
						goBack={this.goBackCallback}
					/>
				)}
				{(mode === CREATE || mode === UPDATE || mode === DUPLICATE) && (
					<SimsCreation
						sims={currentSims}
						metadataStructure={metadataStructure}
						codesLists={codesLists}
						onSubmit={saveSims}
						idOperation={idOperation}
						saveSecondLang={saveSecondLang}
						langs={langs}
						secondLang={secondLang}
						goBack={this.goBackCallback}
						mode={mode}
						organisations={organisations}
					/>
				)}
			</MSDLayout>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	if (!state.operationsMetadataStructureList) {
		return {
			metadataStructureStatus: NOT_LOADED,
			metadataStructure: [],
		};
	}

	const {
		results: metadataStructure,
		status: metadataStructureStatus,
	} = state.operationsMetadataStructureList;

	const id = extractId(ownProps);

	const currentOperation = select.getOperation(state);
	const idOperation = extractIdOperation(ownProps);

	let currentSims = {};

	switch (ownProps.mode) {
		case HELP:
			currentSims = {};
			break;
		case CREATE:
			currentSims = {
				...getLabelsFromOperation(currentOperation),
			};
			break;
		default:
			currentSims = select.getOperationsSimsCurrent(state);
			break;
	}

	return {
		langs: select.getLangs(state),
		secondLang: getSecondLang(state),
		metadataStructure,
		metadataStructureStatus,

		currentSims: !id || currentSims.id === id ? currentSims : {},
		isOperationLoaded:
			ownProps.mode !== CREATE || currentOperation.id === idOperation,
		id,
		idOperation,
		codesLists: getOperationsCodesList(state),
		organisations: getOperationsOrganisations(state),
	};
};

const mapDispatchToProps = {
	loadMetadataStructure,
	loadSIMS,
	saveSims,
	loadOperation,
	saveSecondLang,
};

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(MSDContainer);
