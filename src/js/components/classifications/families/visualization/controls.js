import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from 'js/components/shared/button';
import PlaceHolder from 'js/components/shared/placeholder/placeholder';
import { goBack } from 'js/utils/redirection';
import D from 'js/i18n';

class FamilyControls extends Component {
	static propTypes = {
		id: PropTypes.string,
	};

	render() {
		const cancel = [
			goBack(this.props, `/classifications/families`),
			D.btnReturn,
		];
		const btns = [cancel, null, null, null, null, null];

		return (
			<div className="row btn-line">
				{btns.map((btn, i) => {
					if (!btn) return <PlaceHolder key={i} />;
					const [action, label] = btn;
					return (
						btn && (
							<Button
								key={label}
								action={action}
								label={label}
								context="classifications"
							/>
						)
					);
				})}
			</div>
		);
	}
}

export default withRouter(FamilyControls);
